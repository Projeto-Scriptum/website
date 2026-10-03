import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div>
          <Link className="footer-brand" to="/">Projeto Scriptum</Link>
          <p>Arte, escrita e comunidade.</p>
        </div>
        <nav aria-label="Navegação do rodapé">
          <Link to="/#sobre">Sobre o projeto</Link>
          <Link to="/galeria">Galeria</Link>
          <Link to="/voluntariado">Voluntariado</Link>
        </nav>
      </div>
    </footer>
  );
}
