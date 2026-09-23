import './BotaoAjuda.css';

export default function BotaoAjuda() {
  return (
    <a href="https://cvv.org.br/" target="_blank" rel="noopener noreferrer" className="botao-ajuda">
      <span className="text-desktop">Precisa de ajuda? Ligue 188</span>
      <span className="mobile-icon">📴</span>
    </a>
  );
}
