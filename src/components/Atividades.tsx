import Card from "./Card";
import "./Atividades.css";

export default function Atividades() {
  const atividadesData = [
    {
      kicker: "ATIVIDADE 01",
      titulo: "Escrita que acolhe",
      texto:
        "Rodas de escrita, cartas, poesia e diários guiados para reconhecer emoções e narrar experiências com liberdade.",
      isDark: false,
    },
    {
      kicker: "ATIVIDADE 02",
      titulo: "Arte que conecta",
      texto:
        "Pintura, colagem e criação visual para experimentar, brincar e comunicar aquilo que nem sempre cabe em uma frase.",
      isDark: true,
    },
    {
      kicker: "ATIVIDADE 03",
      titulo: "Escuta que aproxima",
      texto:
        "Encontros mediados com respeito, confidencialidade e atenção genuína para fortalecer vínculos na comunidade.",
      isDark: false,
    },
  ];

  return (
    <section className="atividades-section" id="atividades">
      <div className="atividades-container">
        <div className="atividades-header-row">
          <div className="atividades-title-col">
            <p className="atividades-kicker">Como transformamos</p>
            <h2 className="atividades-title">
              Criatividade como
              <br />
              ferramenta de cuidado.
            </h2>
          </div>
          <div className="atividades-intro-col">
            <p className="atividades-intro">
              Atividades acessíveis, construídas para acolher
              <br />
              diferentes histórias e formas de expressão.
            </p>
          </div>
        </div>

        <div className="atividades-grid">
          {atividadesData.map((atividade, index) => (
            <Card
              key={index}
              kicker={atividade.kicker}
              titulo={atividade.titulo}
              texto={atividade.texto}
              isDark={atividade.isDark}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
