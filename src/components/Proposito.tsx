import "./Proposito.css";
import { useState } from "react";
import materiais from "../assets/ilustracoes/materiais.svg";

export default function Proposito() {
  const [fotoIndisponivel, setFotoIndisponivel] = useState(false);
  const pilaresData = [
    { numero: "01", label: "Arte", variante: "card-yellow" },
    { numero: "02", label: "Escrita", variante: "card-white" },
    { numero: "03", label: "Afetividade", variante: "card-black" },
  ];

  return (
    <section
      className="proposito-section"
      id="sobre"
      tabIndex={-1}
      aria-labelledby="proposito-titulo"
    >
      <div className="proposito-container">
        <div className="proposito-image-wrapper">
          <div className="proposito-frame" aria-hidden="true"></div>
          <figure className="proposito-image">
            <img
              src={fotoIndisponivel
                ? materiais
                : "https://images.pexels.com/photos/8107772/pexels-photo-8107772.jpeg?auto=compress&cs=tinysrgb&w=960"}
              alt={fotoIndisponivel
                ? "Ilustração de tintas, lápis e papéis para criação artística"
                : "Jovens desenhando e escrevendo juntos"}
              loading="lazy"
              width="960"
              height="960"
              onError={() => setFotoIndisponivel(true)}
            />
            <figcaption className="proposito-image-tag">
              Expressão sem julgamento
              <span>{fotoIndisponivel ? "Ilustração" : "Foto ilustrativa"}</span>
            </figcaption>
          </figure>
        </div>

        <div className="proposito-content">
          <p className="proposito-kicker">POR QUE EXISTIMOS</p>

          <h2 className="proposito-title" id="proposito-titulo">
            Cuidar da mente também é dar forma ao que sentimos.
          </h2>

          <p className="proposito-description">
            Nosso trabalho nasce da colaboração de toda a comunidade,
            reunindo o apoio de artistas, escritores, psicólogos, educadores
            e todas as pessoas dispostas a contribuir com esta causa. Mas,
            principalmente, buscamos a participação e o protagonismo de
            adolescentes e jovens, construindo, juntos, espaços que cultivam
            expressão, cuidado mútuo, presença e novas possibilidades.
          </p>
          <p className="proposito-description">
            Acreditamos que, por meio da arte e da escrita,
            podemos descobrir novas formas de expressão, convivência e cuidado.
          </p>

          <ul className="pilares-cards">
            {pilaresData.map((pilar) => (
              <li
                className={`proposito-pilar ${pilar.variante}`}
                key={pilar.numero}
              >
                <span className="card-number">{pilar.numero}</span>
                <span className="card-label">{pilar.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
