import { Link } from "react-router-dom";
import { artes } from "../data/artesData";
import "./Pages.css";

export default function Galeria() {
  return (
    <main id="conteudo" tabIndex={-1} className="page-shell gallery-page">
      <div className="page-container">
        <header className="page-intro">
          <p className="page-kicker">Galeria Scriptum</p>
          <h1>Há muitas formas de se expressar.</h1>
          <p>
            Desenhos, pinturas e colagens: um espaço para descobrir diferentes
            olhares e possibilidades de criação.
          </p>
        </header>
        <p className="demo-note">
          Acervo demonstrativo. As obras e autorias desta página são fictícias e
          não representam participantes do projeto.
        </p>
        <div className="gallery-grid">
          {artes.map((arte) => (
            <figure
              className={`art-card art-card--${arte.formato}`}
              key={arte.id}
            >
              <img
                src={arte.img}
                alt={arte.alt}
                loading="lazy"
                width={arte.formato === "horizontal" ? 800 : 600}
                height={
                  arte.formato === "vertical"
                    ? 800
                    : arte.formato === "horizontal"
                      ? 500
                      : 600
                }
              />
              <figcaption>
                <p className="art-type">{arte.tipo}</p>
                <h2>{arte.titulo}</h2>
                <p className="art-author">{arte.autor}</p>
              </figcaption>
            </figure>
          ))}
        </div>
        <aside className="page-callout">
          <div>
            <h2>Criar também é estar junto.</h2>
            <p>Conheça as ações que aproximam arte, escrita e comunidade.</p>
          </div>
          <Link className="action-link" to="/#atividades">
            Conhecer as atividades <span aria-hidden="true">↗</span>
          </Link>
        </aside>
      </div>
    </main>
  );
}
