import "./Header.css";
import logoScriptum from "/logo.png";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <a href="#inicio">
          <img src={logoScriptum} alt="Projeto Scriptum" className="logo-img" />
        </a>
      </div>

      <nav>
        <ul className="nav-list">
          <li>
            <a href="#sobre" className="nav-link">
              Sobre
            </a>
          </li>
          <li>
            <a href="#atividades" className="nav-link">
              Atividades
            </a>
          </li>
          <li>
            <a href="#duvidas" className="nav-link">
              Dúvidas
            </a>
          </li>
          <li>
            <a href="#voluntariado" className="nav-link btn-voluntario">
              Quero ser voluntário
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
