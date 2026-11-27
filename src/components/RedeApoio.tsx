import { linksApoio, passosApoio } from "../data/apoio";
import "./RedeApoio.css";

export default function RedeApoio() {
  return (
    <div className="rede-apoio">
      <div className="apoio-passos">
        <p className="apoio-kicker">Durante uma crise</p>
        <h3>Um passo de cada vez.</h3>
        <ol>
          {passosApoio.map((passo) => (
            <li key={passo.titulo}>
              <strong>{passo.titulo}</strong>
              <p>{passo.texto}</p>
            </li>
          ))}
        </ol>
      </div>
      <div className="apoio-servicos">
        <article className="apoio-servico apoio-servico--urgente">
          <p className="apoio-kicker">Emergência médica ou risco à vida</p>
          <h3>SAMU <span>192</span></h3>
          <p>Busque atendimento imediato. O serviço é gratuito e funciona 24 horas por dia.</p>
          <a className="action-link" href={linksApoio.samu}>
            Ligar para o SAMU <span aria-hidden="true">↗</span>
          </a>
        </article>
        <article className="apoio-servico">
          <p className="apoio-kicker">Apoio emocional</p>
          <h3>CVV <span>188</span></h3>
          <p>Escuta gratuita e sigilosa, disponível 24 horas por dia.</p>
          <a className="apoio-link" href={linksApoio.cvv} target="_blank" rel="noopener noreferrer">
            Acessar o CVV <span aria-hidden="true">↗</span>
            <span className="sr-only"> (abre em nova aba)</span>
          </a>
        </article>
        <article className="apoio-servico">
          <p className="apoio-kicker">Cuidado na sua região</p>
          <h3>Uma rede perto de você.</h3>
          <p>
            Os CAPS e as Unidades Básicas de Saúde fazem parte da rede pública
            de cuidado em saúde mental. Você pode procurar o CAPS da sua região
            para um primeiro acolhimento.
          </p>
          <a className="apoio-link" href={linksApoio.mapa} target="_blank" rel="noopener noreferrer">
            Encontrar atendimento no mapa <span aria-hidden="true">↗</span>
            <span className="sr-only"> (abre em nova aba)</span>
          </a>
          <a className="apoio-link" href={linksApoio.caps} target="_blank" rel="noopener noreferrer">
            Conhecer os CAPS e a RAPS <span aria-hidden="true">↗</span>
            <span className="sr-only"> (abre em nova aba)</span>
          </a>
        </article>
      </div>
    </div>
  );
}
