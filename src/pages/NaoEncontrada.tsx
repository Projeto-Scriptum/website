import { Link } from "react-router-dom";
import "./Pages.css";

export default function NaoEncontrada() {
  return (
    <main id="conteudo" tabIndex={-1} className="page-shell">
      <div className="page-container page-intro">
        <p className="page-kicker">404 • Página não encontrada</p>
        <h1>Vamos encontrar outro caminho?</h1>
        <p>
          Esta página não existe. Volte ao início para conhecer o Projeto
          Scriptum.
        </p>
        <Link className="action-link" to="/">
          Voltar ao início
        </Link>
      </div>
    </main>
  );
}
