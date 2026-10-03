import "./Card.css";

interface CardProps {
  kicker?: string;
  titulo: string;
  texto: string;
  isDark?: boolean;
  imagem?: { src: string; alt: string; legenda?: string };
}

export default function Card({
  kicker,
  titulo,
  texto,
  isDark = false,
  imagem,
}: CardProps) {
  return (
    <article className={`card ${isDark ? "card-dark" : "card-light"}`}>
      {imagem ? (
        <figure className="card-imagem">
          <img
            src={imagem.src}
            alt={imagem.alt}
            loading="lazy"
            decoding="async"
            width="800"
            height="500"
          />
          {imagem.legenda && <figcaption>{imagem.legenda}</figcaption>}
        </figure>
      ) : (
        <div className="card-icon-placeholder" aria-hidden="true"></div>
      )}
      {kicker && <p className="card-kicker">{kicker}</p>}
      <h3 className="card-titulo">{titulo}</h3>
      <p className="card-texto">{texto}</p>
    </article>
  );
}
