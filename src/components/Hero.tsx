import "./Hero.css";
import logo from "../assets/hero.png";

export default function Hero() {
    return (
        <>
        <div className="hero-container">
            <div className="hero-left">
                <h1>A arte e a escrita também podem ser formas de cuidado.</h1>
                <p>O Projeto Scriptum mobiliza pessoas para criarem espaços de expressão, pertencimento e cuidado com a saúde mental através da arte e da escrita, com foco principal em jovens e adolescentes.</p>
            </div>

            <div className="hero-right">
                <img src={logo} alt="Imagem de materiais artísticos" />
            </div>
        </div>
        </>
    );
}