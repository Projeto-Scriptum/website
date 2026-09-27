import "./Header.css";
import logoScriptum from "/logo.png";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/#inicio" aria-label="Projeto Scriptum, início">
            <img src={logoScriptum} alt="Projeto Scriptum" className="logo-img" />
          </Link>
        </div>

        <nav aria-label="Navegação principal">
          <ul className="nav-list">
            <li>
              <Link to="/#sobre" className="nav-link">
                Sobre
              </Link>
            </li>
            <li>
              <Link to="/#atividades" className="nav-link">
                Atividades
              </Link>
            </li>
            <li>
              <Link to="/#duvidas" className="nav-link">
                Dúvidas
              </Link>
            </li>
            <li>
              <NavLink to="/galeria" className="nav-link">
                Galeria
              </NavLink>
            </li>
            <li>
              <NavLink to="/voluntariado" className="nav-link btn-voluntario">
                Quero ser voluntário
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
