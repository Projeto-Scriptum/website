import { Link } from "react-router-dom";
import "./Pages.css";

const areas = [
  {
    titulo: "Acolhimento",
    texto:
      "Cuidado com os voluntários, apoio em eventos e integração de novas pessoas ao projeto.",
  },
  {
    titulo: "Mídias e produção de conteúdo",
    texto:
      "Redes sociais, produção de conteúdo e newsletter ManuScritum: diferentes formas de compartilhar nossa causa.",
  },
  {
    titulo: "Administrativo",
    texto:
      "Organização e estruturação interna para apoiar o funcionamento do projeto.",
  },
  {
    titulo: "Parcerias",
    texto:
      "Construção de conexões com pessoas, projetos e profissionais que possam apoiar o Scriptum.",
  },
  {
    titulo: "Tecnologia",
    texto:
      "Colaboração com as ferramentas e necessidades tecnológicas do projeto.",
  },
];

export default function Voluntariado() {
  return (
    <main id="conteudo" tabIndex={-1} className="page-shell volunteer-page">
      <div className="page-container">
        <div className="volunteer-intro">
          <header className="page-intro">
            <p className="page-kicker">Construir em comunidade</p>
            <h1>Seja um Scriptumer.</h1>
            <p>
              Você pode fazer a diferença na vida de outras pessoas. Junte-se a
              uma comunidade que cria espaços de expressão e pertencimento por
              meio da arte e da escrita.
            </p>
            <a
              className="action-link"
              href="https://forms.gle/QiuoNk7Wa3knT5o27"
              target="_blank"
              rel="noopener noreferrer"
            >
              Quero me voluntariar <span aria-hidden="true">↗</span>
              <span className="sr-only"> (abre em nova aba)</span>
            </a>
          </header>
          <aside className="volunteer-note">
            <p className="page-kicker">Aprender junto</p>
            <h2>Sua disposição para participar importa.</h2>
            <p>
              Você não precisa ser especialista. Valorizamos pessoas
              responsáveis, empáticas e comprometidas com a causa, dispostas a
              aprender e construir nossa missão na prática.
            </p>
            <p>
              A troca e o protagonismo de jovens e adolescentes fazem parte
              dessa construção coletiva.
            </p>
          </aside>
        </div>
        <section className="volunteer-areas" aria-labelledby="areas-titulo">
          <div className="section-heading">
            <p className="page-kicker">Encontre sua forma de contribuir</p>
            <h2 id="areas-titulo">Diferentes talentos. Uma causa em comum.</h2>
          </div>
          <div className="volunteer-grid">
            {areas.map((area, index) => (
              <article className="volunteer-card" key={area.titulo}>
                <span className="role-number" aria-hidden="true">
                  0{index + 1}
                </span>
                <h3>{area.titulo}</h3>
                <p>{area.texto}</p>
              </article>
            ))}
          </div>
        </section>
        <aside className="page-callout">
          <div>
            <h2>Quer conhecer melhor o projeto?</h2>
            <p>
              Veja nossas atividades e tire suas dúvidas antes de participar.
            </p>
          </div>
          <Link className="action-link" to="/#duvidas">
            Perguntas frequentes <span aria-hidden="true">↗</span>
          </Link>
        </aside>
      </div>
    </main>
  );
}
