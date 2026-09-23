import { useState } from "react";
import "./Faq.css";

export default function Faq() {
  const faqData = [
    {
      pergunta: "Preciso ser artista ou escritor para participar?",
      resposta:
        "Não. As atividades valorizam o processo, não a técnica. Basta ter curiosidade, respeito e vontade de experimentar.",
    },
    {
      pergunta: "Quem pode se voluntariar?",
      resposta:
        "Pessoas de diferentes idades e áreas de atuação. Destaque especial para o protagonismo juvenil (aberto para jovens e adolescentes).",
    },
    {
      pergunta: "O projeto oferece atendimento psicológico?",
      resposta:
        "Não. O projeto não oferece atendimento psicológico nem atua como serviço de encaminhamento clínico. O objetivo é criar espaços de expressão e convivência através da arte e escrita.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="duvidas">
      <div className="faq-container">
        <div className="faq-header">
          <p className="faq-kicker">PERGUNTAS FREQUENTES</p>
          <h2 className="faq-title">Antes de começar, tire suas dúvidas.</h2>
        </div>

        <div className="faq-list">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div className={`faq-item ${isOpen ? "open" : ""}`} key={index}>
                <div
                  className="faq-question-row"
                  onClick={() => toggleItem(index)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      toggleItem(index);
                    }
                  }}
                >
                  <h3 className="faq-question">{item.pergunta}</h3>
                  <button
                    className={`faq-toggle-btn ${isOpen ? "rotated" : ""}`}
                    tabIndex={-1}
                    aria-hidden="true"
                  >
                    +
                  </button>
                </div>
                <div className={`faq-answer-wrapper ${isOpen ? "open" : ""}`}>
                  <p className="faq-answer">{item.resposta}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
