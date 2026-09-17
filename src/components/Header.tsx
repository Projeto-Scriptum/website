import './Header.css';
import logoScriptum from '/logo.png';

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
          <li><a href="#inicio" className="nav-link">Início</a></li>
          <li><a href="#galeria" className="nav-link">Galeria</a></li>
          <li><a href="#sobre" className="nav-link">Sobre</a></li>
          <li><a href="#voluntariado" className="nav-link">Voluntariado</a></li>
        </ul>
      </nav>
    </header>
  );
}