import Hero from "../components/Hero";
import Manifesto from "../components/Manifesto";
import Atividades from "../components/Atividades";
import Faq from "../components/Faq";

export default function Home() {
  return (
    <main id="conteudo" tabIndex={-1}>
      <div id="inicio" tabIndex={-1}>
        <Hero />
      </div>
      <Manifesto />
      <Atividades />
      <Faq />
    </main>
  );
}
