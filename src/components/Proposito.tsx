import "./Proposito.css";

export default function Proposito() {
  const pilaresData = [
    { numero: "01", label: "Arte", variante: "card-yellow" },
    { numero: "02", label: "Escrita", variante: "card-white" },
    { numero: "03", label: "Afetividade", variante: "card-black" },
  ];

  return (
    <section className="proposito-section" id="sobre">
      <div className="proposito-container">
        
      
        <div className="proposito-image-wrapper">
          <div className="yellow-background-frame"></div>
          <div className="image-container">
            <img 
              src="https://images.pexels.com/photos/8107772/pexels-photo-8107772.jpeg" 
              alt="Jovens desenhando e escrevendo juntos" 
            />
            <div className="image-tag">
              Expressão sem julgamento
            </div>
          </div>
        </div>

        
        <div className="proposito-content">
          <p className="proposito-kicker">POR QUE EXISTIMOS</p>
          
          <h2 className="proposito-title">
            Cuidar da mente
            <br />
            também é dar forma ao
            <br />
            que sentimos.
          </h2>

          <p className="proposito-description">
            "Nosso trabalho nasce da colaboração de toda a comunidade, 
            reunindo o apoio de artistas, escritores, psicólogos, educadores 
            e todas as pessoas dispostas a contribuir com esta causa. Mas, 
            principalmente, buscamos a participação e o 
            protagonismo de adolescentes e jovens, construindo, juntos, 
            espaços que cultivam expressão, cuidado mútuo, presença e novas possibilidades. 
            Acreditamos que, por meio da arte e da escrita, 
            podemos descobrir novas formas de expressão, convivência e cuidado."
          </p>

          <ul className="pilares-cards">
            {pilaresData.map((pilar, index) => (
              <li className={`card ${pilar.variante}`} key={index}>
                <span className="card-number">{pilar.numero}</span>
                <span className="card-label">{pilar.label}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}