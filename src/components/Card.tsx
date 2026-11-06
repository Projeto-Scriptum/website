import "./Card.css";
import ImagemAdiada from "./ImagemAdiada";

interface CardProps {
  kicker?: string;
  titulo: string;
  texto: string;
  isDark?: boolean;
  imagem?: {
    src: string;
    alt: string;
    legenda?: string;
    width?: number;
    height?: number;
  };
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
          <ImagemAdiada
            src={imagem.src}
            alt={imagem.alt}
            width={imagem.width ?? 800}
            height={imagem.height ?? 500}
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
