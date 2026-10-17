import { contatos, mensagemWhatsApp } from "../data/contatos";
import instagram from "../assets/icones/instagram.svg";
import whatsapp from "../assets/icones/whatsapp.svg";
import email from "../assets/icones/email.svg";
import "./RedesSociais.css";

export default function RedesSociais() {
  const numeroWhatsApp = contatos.whatsappNumero.replace(/\D/g, "");
  const redes = [
    {
      nome: "Instagram",
      icone: instagram,
      href: contatos.instagramUrl,
      novaAba: true,
    },
    {
      nome: "WhatsApp",
      icone: whatsapp,
      href: numeroWhatsApp
        ? `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagemWhatsApp)}`
        : "",
      novaAba: true,
    },
    {
      nome: "E-mail do acolhimento",
      texto: contatos.emailAcolhimento,
      icone: email,
      href: contatos.emailAcolhimento
        ? `mailto:${contatos.emailAcolhimento}`
        : "",
      novaAba: false,
    },
  ];

  return (
    <nav className="hero-redes" aria-labelledby="hero-redes-titulo">
      <h2 id="hero-redes-titulo">Entre em contato conosco</h2>
      <ul className="hero-redes-lista">
        {redes.map((rede) => {
          const conteudo = (
            <>
              <img src={rede.icone} alt="" width="24" height="24" decoding="async" />
              <span>{rede.texto || rede.nome}</span>
            </>
          );

          return (
            <li key={rede.nome}>
              {rede.href ? (
                <a
                  className="hero-rede-link"
                  href={rede.href}
                  aria-label={rede.texto ? `${rede.nome}: ${rede.texto}` : undefined}
                  target={rede.novaAba ? "_blank" : undefined}
                  rel={rede.novaAba ? "noopener noreferrer" : undefined}
                >
                  {conteudo}
                  {rede.novaAba && <span className="sr-only"> (abre em nova aba)</span>}
                </a>
              ) : (
                <span className="hero-rede-link" aria-disabled="true">
                  {conteudo}
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
