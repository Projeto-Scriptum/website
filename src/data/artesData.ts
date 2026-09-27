import caminhos from "../assets/artes/caminhos.svg";
import encontro from "../assets/artes/encontro.svg";
import jardim from "../assets/artes/jardim.svg";
import horizonte from "../assets/artes/horizonte.svg";
import movimento from "../assets/artes/movimento.svg";
import pausa from "../assets/artes/pausa.svg";
import janela from "../assets/artes/janela.svg";
import laços from "../assets/artes/lacos.svg";

export interface Arte {
  id: number;
  titulo: string;
  tipo: "Desenho" | "Pintura" | "Colagem";
  autor: string;
  img: string;
  alt: string;
  formato: "quadrado" | "vertical" | "horizontal";
}

// Obras e autorias fictícias: substituir por um acervo autorizado do projeto.
export const artes: Arte[] = [
  {
    id: 1,
    titulo: "Caminhos possíveis",
    tipo: "Desenho",
    autor: "Lia (nome fictício)",
    img: caminhos,
    alt: "Linhas curvas pretas atravessam um círculo amarelo",
    formato: "vertical",
  },
  {
    id: 2,
    titulo: "Ponto de encontro",
    tipo: "Colagem",
    autor: "Alex (nome fictício)",
    img: encontro,
    alt: "Formas de papel sobrepostas em amarelo, rosa e preto",
    formato: "quadrado",
  },
  {
    id: 3,
    titulo: "Um jardim por dentro",
    tipo: "Desenho",
    autor: "Nina (nome fictício)",
    img: jardim,
    alt: "Folhas e flores desenhadas sobre um fundo de papel claro",
    formato: "vertical",
  },
  {
    id: 4,
    titulo: "Além do horizonte",
    tipo: "Pintura",
    autor: "Caio (nome fictício)",
    img: horizonte,
    alt: "Paisagem abstrata com sol amarelo e colinas em verde e azul",
    formato: "horizontal",
  },
  {
    id: 5,
    titulo: "Tudo se move",
    tipo: "Pintura",
    autor: "Sol (nome fictício)",
    img: movimento,
    alt: "Pinceladas onduladas em coral, azul e amarelo",
    formato: "vertical",
  },
  {
    id: 6,
    titulo: "Tempo de pausa",
    tipo: "Colagem",
    autor: "Dani (nome fictício)",
    img: pausa,
    alt: "Círculo amarelo e recortes geométricos em uma composição minimalista",
    formato: "quadrado",
  },
  {
    id: 7,
    titulo: "Uma janela aberta",
    tipo: "Desenho",
    autor: "Ivo (nome fictício)",
    img: janela,
    alt: "Uma janela preta em arco se abre para um céu azul com sol",
    formato: "vertical",
  },
  {
    id: 8,
    titulo: "Laços",
    tipo: "Pintura",
    autor: "Bia (nome fictício)",
    img: laços,
    alt: "Duas linhas curvas entrelaçadas sobre áreas de cor suaves",
    formato: "horizontal",
  },
];
