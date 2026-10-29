import { useEffect, useState } from "react";
import { nav, sections } from "@/data/profile";

export type ThemeName = "darkroom" | "print";

export function useNairobiTime() {
  const [time, setTime] = useState({ clock: "—", full: "—" });

  useEffect(() => {
    const clockFormat = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Africa/Nairobi",
      hour: "2-digit",
      minute: "2-digit",
      hourCycle: "h23",
    });
    const fullFormat = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Africa/Nairobi",
      weekday: "short",
      hour: "2-digit",
      minute: "2-digit",
      hourCycle: "h23",
    });
    const tick = () => {
      const now = new Date();
      setTime({ clock: `${clockFormat.format(now)} EAT`, full: `${fullFormat.format(now)} EAT` });
    };
    tick();
    const id = window.setInterval(tick, 15000);
    return () => window.clearInterval(id);
  }, []);

  return time;
}

export function SiteChrome({
  theme,
  onToggleTheme,
  active,
  menuOpen,
  onMenu,
}: {
  theme: ThemeName;
  onToggleTheme: () => void;
  active: string;
  menuOpen: boolean;
  onMenu: (open: boolean) => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const time = useNairobiTime();
  const current = sections.find((section) => section.id === active) ?? sections[0];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onMenu(false);
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [menuOpen, onMenu]);

  return (
    <>
      <a className="skip" href="#content">
        Skip to content
      </a>
      <header className="nav" data-scrolled={scrolled ? "true" : "false"} data-open={menuOpen ? "true" : "false"}>
        <a className="wordmark" href="#top" onClick={() => onMenu(false)}>
          Peter Mwangi
        </a>
        <nav className="nav-links" aria-label="Sections">
          {nav.map((item) => (
            <a key={item.id} href={`#${item.id}`} data-active={active === item.id ? "true" : "false"}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="theme-toggle press"
            onClick={onToggleTheme}
            aria-pressed={theme === "print"}
            aria-label={theme === "darkroom" ? "Switch to print theme" : "Switch to darkroom theme"}
          >
            {theme === "darkroom" ? "Darkroom" : "Print"}
          </button>
          <button
            type="button"
            className="menu-toggle press"
            aria-expanded={menuOpen}
            aria-controls="site-menu"
            onClick={() => onMenu(!menuOpen)}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </header>
      <nav id="site-menu" className="menu md:hidden" data-open={menuOpen ? "true" : "false"} aria-label="Mobile" inert={!menuOpen}>
        {nav.map((item) => (
          <a key={item.id} href={`#${item.id}`} onClick={() => onMenu(false)}>
            {item.label}
          </a>
        ))}
      </nav>
      <div className="status" aria-hidden="true">
        <span className="nums">FR {current.frame}</span>
        <span>{current.label}</span>
        <span className="nums">NBO {time.clock}</span>
      </div>
    </>
  );
}

export function SectionHead({
  index,
  label,
  title,
  children,
}: {
  index: string;
  label: string;
  title: string;
  children?: string;
}) {
  return (
    <header className="mb-10 max-w-3xl">
      <p className="eyebrow mb-4 flex items-center gap-3 text-muted">
        <span className="text-accent">{index}</span>
        <span className="rule" />
        {label}
      </p>
      <h2 className="display-md text-fg">{title}</h2>
      {children ? <p className="mt-5 text-lg text-muted">{children}</p> : null}
    </header>
  );
}
