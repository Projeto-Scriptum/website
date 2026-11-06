import { useEffect, useState } from "react";
import type { ImgHTMLAttributes } from "react";
import "./ImagemAdiada.css";

type ImagemAdiadaProps = Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  "src" | "loading" | "decoding"
> & { src: string };

export default function ImagemAdiada({ src, ...props }: ImagemAdiadaProps) {
  const [podeCarregar, setPodeCarregar] = useState(false);

  useEffect(() => {
    let ativo = true;
    let primeiroQuadro = 0;
    let segundoQuadro = 0;
    let observadorPintura: PerformanceObserver | undefined;

    const agendarImagem = () => {
      if (!ativo) return;
      // A estrutura tem uma oportunidade de ser pintada antes de liberar a foto.
      primeiroQuadro = requestAnimationFrame(() => {
        segundoQuadro = requestAnimationFrame(() => setPodeCarregar(true));
      });
    };

    const liberarImagem = () => {
      if (
        typeof PerformanceObserver === "undefined" ||
        !PerformanceObserver.supportedEntryTypes?.includes("paint") ||
        performance.getEntriesByName("first-contentful-paint").length > 0
      ) {
        agendarImagem();
        return;
      }

      observadorPintura = new PerformanceObserver((entradas) => {
        if (entradas.getEntriesByName("first-contentful-paint").length > 0) {
          observadorPintura?.disconnect();
          agendarImagem();
        }
      });
      observadorPintura.observe({ type: "paint", buffered: true });
    };

    if (document.readyState === "complete") {
      liberarImagem();
    } else {
      window.addEventListener("load", liberarImagem, { once: true });
    }

    return () => {
      ativo = false;
      window.removeEventListener("load", liberarImagem);
      observadorPintura?.disconnect();
      cancelAnimationFrame(primeiroQuadro);
      cancelAnimationFrame(segundoQuadro);
    };
  }, []);

  return (
    <img
      {...props}
      src={podeCarregar ? src : undefined}
      loading="lazy"
      decoding="async"
      data-carregamento-adiado={podeCarregar ? "liberado" : "aguardando"}
    />
  );
}
