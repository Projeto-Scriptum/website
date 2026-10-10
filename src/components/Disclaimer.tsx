import "./Disclaimer.css";
import iconeCoracao from "../assets/ilustracoes/icone-coracao.png";

export default function Disclaimer() {
    return (
        <section className="disclaimer">
            <div className="disclaimer-container">
                <img className="disclaimer-icon" src={iconeCoracao} alt="Ícone de coração com batimento" />
                <div>
                    <h2 className="disclaimer-title">Cuidado responsável</h2>
                    <p className="disclaimer-text">
                        O Projeto Scriptum promove expressão, convivência e bem-estar, mas não substitui psicoterapia, acompanhamento médico ou serviços de emergência. Em uma crise, procure ajuda profissional ou ligue 188 para o CVV.
                    </p>
                </div>
            </div>
        </section>
    );
}