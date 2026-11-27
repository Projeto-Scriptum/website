import "./Disclaimer.css";
import { Link } from "react-router-dom";
import { linksApoio } from "../data/apoio";

export default function Disclaimer() {
    return (
        <section className="disclaimer" id="cuidado-responsavel" tabIndex={-1} aria-labelledby="cuidado-titulo">
            <div className="disclaimer-container">
                <svg
                    className="disclaimer-icon"
                    viewBox="0 0 64 64"
                    width="66"
                    height="66"
                    aria-hidden="true"
                    focusable="false"
                >
                    <circle cx="32" cy="32" r="30" fill="currentColor" />
                    <g fill="none" stroke="var(--preto-scriptum)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M32 48S15 37.3 15 26c0-8 10-12 17-3 7-9 17-5 17 3 0 11.3-17 22-17 22Z" />
                        <path d="M21 33h7l3-6 4 12 3-6h5" />
                    </g>
                </svg>
                <div className="disclaimer-content">
                    <h2 className="disclaimer-title" id="cuidado-titulo">Cuidado responsável</h2>
                    <p className="disclaimer-text">
                        O Projeto Scriptum promove expressão, convivência e bem-estar, mas não substitui psicoterapia, acompanhamento médico ou serviços de emergência.
                    </p>
                    <p className="disclaimer-urgencia">
                        Em uma emergência médica ou risco à vida, <a href={linksApoio.samu}>ligue 192 para o SAMU</a>.
                        Para apoio emocional, o CVV atende pelo 188.
                    </p>
                    <Link className="action-link disclaimer-action" to="/apoio">
                        Conheça a rede de apoio <span aria-hidden="true">→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
