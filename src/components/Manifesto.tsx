
import { useEffect, useRef } from "react";
import "./Manifesto.css";

const VELOCIDADE = 50;

const arquivosRabiscos = import.meta.glob<string>(
  "/src/assets/rabiscos/*.png",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

const rabiscos = Object.entries(arquivosRabiscos)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([caminho, src]) => ({
    nome: caminho.split("/").pop() ?? "",
    src,
  }));

export default function Manifesto() {
  const faixaRef = useRef<HTMLDivElement>(null);
  const grupoRef = useRef<HTMLDivElement>(null);
  const pausadoRef = useRef(false);

  const grupos = [0, 1, 2];

  useEffect(() => {
    const faixa = faixaRef.current;
    const grupo = grupoRef.current;

    if (!faixa || !grupo || rabiscos.length === 0) return;

    let frame: number;
    let ultimoTempo = 0;
    let posicao = 0;
    let larguraGrupo = grupo.offsetWidth;

    const observer = new ResizeObserver(() => {
      larguraGrupo = grupo.offsetWidth;

      if (larguraGrupo > 0) {
        posicao = faixa.scrollLeft % larguraGrupo;
      }
    });

    observer.observe(grupo);

    function animar(agora: number) {
      if (!ultimoTempo) ultimoTempo = agora;

      const delta = Math.min((agora - ultimoTempo) / 1000, 0.1);
      ultimoTempo = agora;

      if (!pausadoRef.current && larguraGrupo > 0) {
        posicao += VELOCIDADE * delta;

        if (posicao >= larguraGrupo) {
          posicao -= larguraGrupo;
        }

        faixa!.scrollLeft = posicao;
      }

      frame = requestAnimationFrame(animar);
    }

    frame = requestAnimationFrame(animar);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, []);

  return (
    <section className="manifesto-container">
      <div className="manifesto-texto">
        <h2>Setembro Amarelo é todo dia.</h2>
      </div>

      <div
        className="manifesto-faixa"
        ref={faixaRef}
        onMouseEnter={() => {
          pausadoRef.current = true;
        }}
        onMouseLeave={() => {
          pausadoRef.current = false;
        }}
      >
        <div className="manifesto-trilho">
          {grupos.map((grupo, index) => (
            <div
              key={grupo}
              className="manifesto-grupo"
              ref={index === 0 ? grupoRef : null}
              aria-hidden={index !== 0}
            >
              {rabiscos.map((rabisco) => (
                <img
                  key={`${grupo}-${rabisco.nome}`}
                  src={rabisco.src}
                  alt=""
                  className="manifesto-rabisco"
                  draggable={false}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
