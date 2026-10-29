import { useCallback, useEffect, useState } from "react";
import { proof, sections } from "@/data/profile";
import { SiteChrome, type ThemeName } from "@/components/portfolio/chrome";
import { Hero } from "@/components/portfolio/hero";
import { Reel, Practice, Contact } from "@/components/portfolio/closing";
import { Work } from "@/components/portfolio/work";
import { Bench } from "@/components/portfolio/bench";
import { Studio } from "@/components/portfolio/studio";

export function Portfolio() {
  const [theme, setTheme] = useState<ThemeName>("darkroom");
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState<string>(sections[0].id);

  useEffect(() => {
    if (document.documentElement.dataset.theme === "print") setTheme("print");
  }, []);

  const onMenu = useCallback((open: boolean) => setMenuOpen(open), []);

  function toggleTheme() {
    const next: ThemeName = theme === "darkroom" ? "print" : "darkroom";
    setTheme(next);
    if (next === "print") document.documentElement.setAttribute("data-theme", "print");
    else document.documentElement.removeAttribute("data-theme");
    localStorage.setItem("pm-theme", next);
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", next === "print" ? "#f3eee6" : "#12110e");
  }

  useEffect(() => {
    const nodes = sections
      .map((section) => document.getElementById(section.id))
      .filter((node): node is HTMLElement => Boolean(node));
    const observer = new IntersectionObserver(
      (entries) => {
        const hit = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (hit?.target.id) setActive(hit.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0.1, 0.25, 0.5, 1] },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <SiteChrome theme={theme} onToggleTheme={toggleTheme} active={active} menuOpen={menuOpen} onMenu={onMenu} />
      <main id="content" className="pb-16">
        <Hero />
        <Reel />
        <section className="wrap py-14 md:py-20" aria-label="Selected figures">
          <dl className="grid gap-8 md:grid-cols-2">
            {proof.map((item) => (
              <div key={item.figure} className="border-t border-line pt-5">
                <dt className="display-sm">{item.figure}</dt>
                <dd className="mt-2">
                  <p>{item.title}</p>
                  <p className="mt-1 text-muted">{item.detail}</p>
                </dd>
              </div>
            ))}
          </dl>
        </section>
        <Work />
        <Bench />
        <Studio />
        <Practice />
        <Contact />
      </main>
    </>
  );
}
