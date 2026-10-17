import Hero from "../components/Hero";
import Manifesto from "../components/Manifesto";
import Atividades from "../components/Atividades";
import Faq from "../components/Faq";
import Proposito from "../components/Proposito";
import Disclaimer from "../components/Disclaimer";

export default function Home() {
  return (
    <main id="conteudo" tabIndex={-1}>
      <div id="inicio" tabIndex={-1}>
        <Hero />
      </div>
      <Manifesto />
      <Proposito />
      <Atividades />
      <Disclaimer />

      <Faq />
    </main>
  );
}
