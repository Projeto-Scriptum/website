import "./Header.css";
import logoScriptum from "/logo.png";
import { Link, NavLink } from "react-router-dom";
import { useRef, useState } from "react";

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  return (
    <header
      className="header"
      onKeyDown={(event) => {
        if (event.key === "Escape" && menuAberto) {
          setMenuAberto(false);
          menuButton.current?.focus();
        }
      }}
    >
      <div className="header-container">
        <div className="logo">
          <Link to="/#inicio" aria-label="Projeto Scriptum, início">
            <img src={logoScriptum} alt="Projeto Scriptum" className="logo-img" decoding="async" />
          </Link>
        </div>

        <button
          ref={menuButton}
          type="button"
          className="menu-toggle"
          aria-expanded={menuAberto}
          aria-controls="navegacao-principal"
          onClick={() => setMenuAberto(!menuAberto)}
        >
          {menuAberto ? "Fechar" : "Menu"}
          <span aria-hidden="true">{menuAberto ? "×" : "☰"}</span>
        </button>
        <nav
          id="navegacao-principal"
          className={menuAberto ? "nav-open" : undefined}
          aria-label="Navegação principal"
          onClick={() => setMenuAberto(false)}
        >
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
