import "./Hero.css";
import logo from "../assets/hero.png";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <>
      <section
        className="hero-container"
        aria-label="Sobre o Projeto Scriptum"
      >
        <div className="hero-left">
          <h1>A arte e a escrita também podem ser formas de cuidado.</h1>
          <p>
            O Projeto Scriptum mobiliza pessoas para criarem espaços de
            expressão, pertencimento e cuidado com a saúde mental através da
            arte e da escrita, com foco principal em jovens e adolescentes.
          </p>
          <div className="hero-actions">
            <Link className="action-link hero-action-primary" to="/voluntariado">
              Quero participar <span aria-hidden="true">↗</span>
            </Link>
            <Link className="hero-action-secondary" to="/#atividades">
              Conhecer as atividades <span aria-hidden="true">↓</span>
            </Link>
          </div>
        </div>

        <div className="hero-right">
          <img src={logo} alt="Caderno aberto e lápis sobre um fundo amarelo" width="500" height="750" fetchPriority="high" decoding="async" />
        </div>
      </section>
    </>
  );
}
