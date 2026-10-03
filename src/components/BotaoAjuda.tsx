import './BotaoAjuda.css';

export default function BotaoAjuda() {
  return (
    <a href="https://cvv.org.br/" target="_blank" rel="noopener noreferrer" className="botao-ajuda" aria-label="Precisa de ajuda? Conheça o CVV e o telefone 188 (abre em nova aba)">
      <span className="text-desktop">Precisa de ajuda? Ligue 188</span>
      <span className="mobile-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2z" />
        </svg>
        <span>188</span>
      </span>
    </a>
  );
}
