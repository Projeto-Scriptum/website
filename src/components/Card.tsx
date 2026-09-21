import "./Card.css";

interface CardProps {
  kicker?: string;
  titulo: string;
  texto: string;
  isDark?: boolean;
}

export default function Card({
  kicker,
  titulo,
  texto,
  isDark = false,
}: CardProps) {
  return (
    <div className={`card ${isDark ? "card-dark" : "card-light"}`}>
      <div className="card-icon-placeholder"></div>
      {kicker && <p className="card-kicker">{kicker}</p>}
      <h3 className="card-titulo">{titulo}</h3>
      <p className="card-texto">{texto}</p>
    </div>
  );
}
