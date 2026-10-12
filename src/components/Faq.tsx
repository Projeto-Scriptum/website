import { useState } from "react";
import "./Faq.css";

export default function Faq() {
  const faqData = [
    {
      pergunta: "Preciso ser artista ou escritor para participar?",
      resposta: (
        <>
          <p className="faq-answer">
            <strong>Não</strong>, qualquer pessoa pode participar das ações do
            projeto, tanto quem já possui contato com arte e escrita quanto quem
            ainda está começando e quer ter mais contato com essas linguagens.
          </p>
          <p className="faq-answer">
            <em>
              <strong>As atividades valorizam o processo, e não a técnica.</strong>{" "}
              Não é necessário “saber fazer” arte ou escrever bem para participar.
            </em>
          </p>
        </>
      ),
    },
    {
      pergunta: "Quem pode se voluntariar?",
      resposta: (
        <p className="faq-answer">
          Pessoas de diferentes idades, áreas e experiências que se identifiquem
          com a nossa causa e queiram contribuir com o projeto. Vale destacar que
          valorizamos o protagonismo juvenil (Voluntariado aberto para jovens e
          adolescentes) e a construção coletiva.
        </p>
      ),
    },
    {
      pergunta: "O Projeto Scriptum oferece atendimento psicológico?",
      resposta: (
        <p className="faq-answer">
          Não. O projeto{" "}
          <strong>
            não oferece atendimento psicológico nem atuamos como serviço de
            encaminhamento clínico
          </strong>
          . Nossa atuação é voltada para criar espaços de expressão, convivência
          e participação por meio da arte e da escrita.
        </p>
      ),
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex((current) => current === index ? null : index);
  };

  return (
    <section className="faq-section" id="duvidas" tabIndex={-1} aria-labelledby="duvidas-titulo">
      <div className="faq-container">
        <div className="faq-header">
          <h2 className="faq-title" id="duvidas-titulo">Perguntas frequentes</h2>
        </div>

        <div className="faq-list">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div className={`faq-item ${isOpen ? "open" : ""}`} key={index}>
                <h3 className="faq-question">
                  <button
                    type="button"
                    id={`faq-pergunta-${index}`}
                    className="faq-question-row"
                    onClick={() => toggleItem(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-resposta-${index}`}
                  >
                    <span>{item.pergunta}</span>
                    <span className={`faq-toggle-btn ${isOpen ? "rotated" : ""}`} aria-hidden="true">+</span>
                  </button>
                </h3>
                <div
                  id={`faq-resposta-${index}`}
                  className="faq-answer-wrapper"
                  role="region"
                  aria-labelledby={`faq-pergunta-${index}`}
                  hidden={!isOpen}
                >
                  <div className="faq-answer-content">{item.resposta}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
