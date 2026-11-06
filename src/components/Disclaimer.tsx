import "./Disclaimer.css";

export default function Disclaimer() {
    return (
        <section className="disclaimer">
            <div className="disclaimer-container">
                <svg
                    className="disclaimer-icon"
                    viewBox="0 0 64 64"
                    width="66"
                    height="66"
                    aria-hidden="true"
                    focusable="false"
                >
                    <circle cx="32" cy="32" r="30" fill="currentColor" />
                    <g
                        fill="none"
                        stroke="var(--preto-scriptum)"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <g transform="translate(32 32)">
                            <g>
                                <animateTransform
                                    attributeName="transform"
                                    type="scale"
                                    values="1;1.16;1;1.10;1"
                                    keyTimes="0;0.12;0.24;0.38;1"
                                    dur="1.2s"
                                    repeatCount="indefinite"
                                />

                                <g transform="translate(-32 -32)">
                                    <path d="M32 48S15 37.3 15 26c0-8 10-12 17-3 7-9 17-5 17 3 0 11.3-17 22-17 22Z" />
                                    <path d="M21 33h7l3-6 4 12 3-6h5" />
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
                <div className="disclaimer-content">
                    <h2 className="disclaimer-title">Cuidado responsável</h2>
                    <p className="disclaimer-text">
                        O Projeto Scriptum promove expressão, convivência e bem-estar, mas não substitui psicoterapia, acompanhamento médico ou serviços de emergência. Em uma crise, procure ajuda profissional ou ligue 188 para o CVV.
                    </p>
                </div>
            </div>
        </section>
    );
}
