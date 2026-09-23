import Hero from "./components/Hero";
import BotaoAjuda from "./components/BotaoAjuda";
import Header from "./components/Header";
import Manifesto from "./components/Manifesto";
import Atividades from "./components/Atividades";
import Faq from "./components/Faq";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Manifesto />
      <Atividades />
      <Faq />
      <BotaoAjuda />
    </>
  );
}

export default App;