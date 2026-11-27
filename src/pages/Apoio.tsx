import { Link } from "react-router-dom";
import RedeApoio from "../components/RedeApoio";
import { linksApoio } from "../data/apoio";
import "./Pages.css";
import "./Apoio.css";

export default function Apoio() {
  return (
    <main id="conteudo" tabIndex={-1} className="apoio-page">
      <header className="apoio-banner">
        <div className="page-container apoio-banner-container">
          <div>
            <p className="apoio-kicker">Rede de apoio · Brasil</p>
            <h1>Você não precisa passar por isso sozinho(a).</h1>
            <p>Há pessoas e serviços que podem acolher você.</p>
            <a className="action-link" href="#onde-buscar-apoio">
              Encontrar apoio <span aria-hidden="true">↓</span>
            </a>
          </div>
          <blockquote>
            Pedir ajuda não é fraqueza.
            <span>Você merece ser ouvido(a).</span>
          </blockquote>
        </div>
      </header>
      <div className="page-container apoio-page-content">
        <p className="apoio-emergencia">
          <strong>Emergência médica ou risco à vida?</strong>{" "}
          <a href={linksApoio.samu}>Ligue 192 para o SAMU.</a>
        </p>
        <section id="onde-buscar-apoio" tabIndex={-1} aria-labelledby="apoio-titulo">
          <h2 id="apoio-titulo">Um cuidado pode começar aqui.</h2>
          <RedeApoio />
        </section>
        <aside className="apoio-contexto" aria-label="Sobre esta rede de apoio">
          <p>
            O Projeto Scriptum promove expressão, convivência e bem-estar, mas
            não substitui psicoterapia, acompanhamento médico ou serviços de
            emergência.
          </p>
          <p>
            O Mapa da Saúde Mental, do Instituto Vita Alere, reúne serviços
            públicos, gratuitos e voluntários. Consulte as condições de
            atendimento de cada local.
          </p>
          <p className="apoio-fontes">
            Informações sobre os serviços no Brasil. Consulte também o{" "}
            <a href={linksApoio.sobreSamu} target="_blank" rel="noopener noreferrer">
              Ministério da Saúde sobre o SAMU
              <span className="sr-only"> (abre em nova aba)</span>
            </a>.
          </p>
          <Link className="apoio-link" to="/#cuidado-responsavel">
            <span aria-hidden="true">←</span> Voltar para o Projeto Scriptum
          </Link>
        </aside>
      </div>
    </main>
  );
}
