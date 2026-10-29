import { useEffect, useRef } from "react";

function HeroBody({ lens }: { lens: boolean }) {
  return (
    <div className="hero-grid">
      <div>
        <p className="eyebrow hero-kicker text-accent">{lens ? "Visual editor" : "Software engineer"}</p>
        <h1 className={`display-xl hero-name ${lens ? "italic" : ""}`}>
          <span>Peter</span>
          <span>Mwangi</span>
        </h1>
        <p className="hero-disciplines">AI evaluation · Photography · Systems</p>
        <p className="hero-lede">
          {lens
            ? "Frames, labels, and evidence — the edit that makes an image or a model tell the truth."
            : "APIs, gateways, and multi-tenant systems for clinics, classrooms, and the queues behind them."}
        </p>
        <div className="hero-actions">
          <a className="btn press" href="#work">
            Selected work
          </a>
          <a className="btn btn-ghost press" href="#contact">
            Write
          </a>
        </div>
        <p className="hero-hint">Move the aperture. Engineering stays outside. The edit is inside.</p>
      </div>
      <p className={`hero-verb ${lens ? "italic" : ""}`} aria-hidden="true">
        {lens ? "Edit." : "Build."}
      </p>
    </div>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(pointer: fine)").matches;
    let frame = 0;
    let interacting = false;
    let tx = 0;
    let ty = 0;
    let x = 0;
    let y = 0;

    const radius = () => (root.clientWidth < 768 ? 118 : 176);

    const place = (px: number, py: number) => {
      root.style.setProperty("--lx", `${px}px`);
      root.style.setProperty("--ly", `${py}px`);
      root.style.setProperty("--lr", `${radius()}px`);
    };

    const resetTarget = () => {
      tx = root.clientWidth * 0.72;
      ty = Math.min(root.clientHeight * 0.46, 420);
      x = tx;
      y = ty;
      place(x, y);
    };

    resetTarget();

    const onPointer = (event: PointerEvent) => {
      const box = root.getBoundingClientRect();
      tx = event.clientX - box.left;
      ty = event.clientY - box.top;
      interacting = true;
    };

    const loop = (now: number) => {
      if (!interacting && !reduce && fine) {
        const t = now / 1000;
        tx = root.clientWidth * (0.68 + Math.sin(t * 0.33) * 0.06);
        ty = root.clientHeight * (0.44 + Math.cos(t * 0.27) * 0.05);
      }
      const ease = reduce ? 1 : 0.14;
      x += (tx - x) * ease;
      y += (ty - y) * ease;
      place(x, y);
      if (!reduce) frame = window.requestAnimationFrame(loop);
    };

    root.addEventListener("pointermove", onPointer);
    if (reduce) place(tx, ty);
    else frame = window.requestAnimationFrame(loop);

    const onResize = () => {
      if (!interacting) resetTarget();
    };
    window.addEventListener("resize", onResize);

    return () => {
      root.removeEventListener("pointermove", onPointer);
      window.removeEventListener("resize", onResize);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className="hero" id="top" ref={ref}>
      <div className="hero-inner wrap">
        <HeroBody lens={false} />
      </div>
      <div className="hero-lens" inert aria-hidden="true">
        <div className="hero-inner wrap">
          <HeroBody lens />
        </div>
      </div>
      <div className="aperture" aria-hidden="true" />
      <span className="corner corner-tl" aria-hidden="true" />
      <span className="corner corner-tr" aria-hidden="true" />
      <span className="corner corner-bl" aria-hidden="true" />
      <span className="corner corner-br" aria-hidden="true" />
    </section>
  );
}
