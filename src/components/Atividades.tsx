import { Link } from "react-router-dom";
import Card from "./Card";
import materiais from "../assets/ilustracoes/materiais.svg";
import pincel from "../assets/ilustracoes/pincel.svg";
import cartas from "../assets/ilustracoes/cartas.svg";
import caderno from "../assets/ilustracoes/caderno.svg";
import "./Atividades.css";

export default function Atividades() {
  const atividadesData = [
    {
      titulo: "Amigo Scriptum",
      texto:
        "Um convite à troca e à construção de vínculos por meio da arte, da escrita e da presença.",
      isDark: false,
      imagem: {
        src: cartas,
        alt: "Ilustração de cartas e envelopes sobre uma mesa",
      },
    },
    {
      titulo: "Roda de conversa e Oficinas",
      texto:
        "Espaços de conversa e experimentação artística para compartilhar ideias e explorar diferentes formas de expressão.",
      isDark: true,
      imagem: {
        src: materiais,
        alt: "Ilustração de tintas, lápis e papéis para uma oficina criativa",
      },
    },
    {
      titulo: "Campanha Acolher para Conhecer",
      texto:
        "Uma chamada para conhecer diferentes histórias e construir relações com respeito, empatia e acolhimento.",
      isDark: false,
      imagem: {
        src: pincel,
        alt: "Ilustração de um pincel e marcas de tinta em papel",
      },
    },
    {
      titulo: "Desafio Scriptum",
      texto:
        "Propostas criativas para experimentar a arte e a escrita no cotidiano, valorizando o processo de cada pessoa.",
      isDark: true,
      imagem: {
        src: caderno,
        alt: "Ilustração de um caderno aberto com um lápis",
      },
    },
  ];

  return (
    <section
      className="atividades-section"
      id="atividades"
      tabIndex={-1}
      aria-labelledby="atividades-titulo"
    >
      <div className="atividades-container">
        <div className="atividades-header-row">
          <div className="atividades-title-col">
            <p className="atividades-kicker">Como transformamos</p>
            <h2 className="atividades-title" id="atividades-titulo">
              Criatividade como
              <br />
              ferramenta de cuidado.
            </h2>
          </div>
          <div className="atividades-intro-col">
            <p className="atividades-intro">
              Atividades acessíveis, construídas para acolher
              {" "}
              diferentes histórias e formas de expressão.
            </p>
          </div>
        </div>

        <div className="atividades-grid">
          {atividadesData.map((atividade) => (
            <Card
              key={atividade.titulo}
              titulo={atividade.titulo}
              texto={atividade.texto}
              isDark={atividade.isDark}
              imagem={{
                ...atividade.imagem,
                legenda: "Imagem ilustrativa • registro provisório",
              }}
            />
          ))}
        </div>
        <div className="atividades-next">
          <p>Conheça também nosso espaço de expressão e criação.</p>
          <Link className="action-link" to="/galeria">
            Explorar a galeria <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
