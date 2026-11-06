import { Link } from "react-router-dom";
import Card from "./Card";
import pincel from "../assets/ilustracoes/pincel.svg";
import amigoScriptum from "../assets/fotos/amigo-scriptum-cartas-afetos-2026.png";
import oficina from "../assets/fotos/oficina-quem-sou-eu-depois-da-escola-2026.jpeg";
import desafio from "../assets/fotos/desafio-onde-a-arte-mora-2026.png";
import "./Atividades.css";

export default function Atividades() {
  const atividadesData = [
    {
      titulo: "Amigo Scriptum",
      texto:
        "Um convite à troca e à construção de vínculos por meio da arte, da escrita e da presença.",
      isDark: false,
      imagem: {
        src: amigoScriptum,
        alt: "Mosaico de cartas, desenhos, pinturas e colagens do Amigo Scriptum",
        legenda: "Amigo Scriptum • Entre Cartas e Afetos • setembro de 2026",
        width: 763,
        height: 554,
      },
    },
    {
      titulo: "Roda de conversa e Oficinas",
      texto:
        "Espaços de conversa e experimentação artística para compartilhar ideias e explorar diferentes formas de expressão.",
      isDark: true,
      imagem: {
        src: oficina,
        alt: "Participantes em uma chamada online da oficina Quem Sou Eu Depois da Escola",
        legenda: "Oficina Quem Sou Eu Depois da Escola • maio de 2026",
        width: 1600,
        height: 1112,
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
        legenda: "Imagem ilustrativa • registro provisório",
      },
    },
    {
      titulo: "Desafio Scriptum",
      texto:
        "Propostas criativas para experimentar a arte e a escrita no cotidiano, valorizando o processo de cada pessoa.",
      isDark: true,
      imagem: {
        src: desafio,
        alt: "Mosaico de produções reunidas no desafio Onde a Arte Mora",
        legenda: "Registro do acervo • desafio Onde a Arte Mora",
        width: 1629,
        height: 759,
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
              imagem={atividade.imagem}
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
