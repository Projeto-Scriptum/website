import { Route, Routes } from "react-router-dom";
import BotaoAjuda from "./components/BotaoAjuda";
import Header from "./components/Header";
import NavigationScroll from "./components/NavigationScroll";
import Home from "./pages/Home";
import Galeria from "./pages/Galeria";
import Voluntariado from "./pages/Voluntariado";
import NaoEncontrada from "./pages/NaoEncontrada";

function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <NavigationScroll />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/voluntariado" element={<Voluntariado />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
      <BotaoAjuda />
    </>
  );
}

export default App;
