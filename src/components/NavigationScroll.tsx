import { useLayoutEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

export default function NavigationScroll() {
  const location = useLocation();
  const navigationType = useNavigationType();
  const positions = useRef(new Map<string, { x: number; y: number }>());

  useLayoutEffect(() => {
    const previous = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";
    return () => {
      window.history.scrollRestoration = previous;
    };
  }, []);

  useLayoutEffect(() => {
    let restored = false;
    const frame = window.requestAnimationFrame(() => {
      restored = true;
      const saved = positions.current.get(location.key);
      const anchor = location.hash
        ? document.getElementById(location.hash.slice(1))
        : null;

      if (navigationType === "POP" && saved) {
        window.scrollTo(saved.x, saved.y);
        return;
      }

      const target = anchor ?? document.getElementById("conteudo");
      if (anchor || navigationType !== "POP") {
        target?.focus({ preventScroll: true });
      }
      if (anchor) anchor.scrollIntoView();
      else window.scrollTo(0, 0);
    });

    const savedPositions = positions.current;
    return () => {
      window.cancelAnimationFrame(frame);
      if (restored) {
        savedPositions.set(location.key, {
          x: window.scrollX,
          y: window.scrollY,
        });
      }
    };
  }, [location.key, location.hash, location.pathname, navigationType]);

  return null;
}
