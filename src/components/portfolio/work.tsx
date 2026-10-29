import { useEffect, useId, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { experience, projects, type Project } from "@/data/profile";
import { SectionHead } from "@/components/portfolio/chrome";

export function Work() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [lastId, setLastId] = useState<string>(projects[0].id);
  const titleId = useId();
  const panelRef = useRef<HTMLElement>(null);
  const opener = useRef<HTMLElement | null>(null);
  const project = projects.find((item) => item.id === (openId ?? lastId)) ?? projects[0];
  const open = openId !== null;

  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    const previously = opener.current;
    const closeBtn = panel?.querySelector<HTMLElement>("[data-close]");
    closeBtn?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenId(null);
        return;
      }
      if (event.key !== "Tab" || !panel) return;
      const nodes = panel.querySelectorAll<HTMLElement>("button, a, [href]");
      if (!nodes.length) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.body.dataset.case = "open";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
      delete document.body.dataset.case;
      previously?.focus();
    };
  }, [open]);

  function show(id: string, source?: HTMLElement | null) {
    if (source) opener.current = source;
    setLastId(id);
    setOpenId(id);
  }

  function cycle(direction: 1 | -1) {
    const index = projects.findIndex((item) => item.id === project.id);
    const next = (index + direction + projects.length) % projects.length;
    setLastId(projects[next].id);
    setOpenId(projects[next].id);
  }

  return (
    <section className="section" id="work">
      <div className="wrap">
        <SectionHead
          index="02"
          label="Work"
          title="Systems with a paper trail."
          children="Four builds from AstroByte, 2023–2025. The 35% is the figure that was reported — not a rounded-up cousin of it."
        />
        <div className="mb-12 grid gap-8 border-b border-line pb-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow text-accent">Employment</p>
            <p className="display-sm mt-3">AstroByte Tech Solutions</p>
            <p className="mt-2 text-muted">Software engineer · 2023–2025 · Nairobi</p>
          </div>
          <ul className="marks text-muted md:col-span-8">
            {experience.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <ul>
          {projects.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                className="case-row press"
                onClick={(event) => show(item.id, event.currentTarget)}
                aria-haspopup="dialog"
                aria-expanded={openId === item.id}
              >
                <span className="idx">{item.index}</span>
                <span>
                  <span className="case-title display-sm">{item.title}</span>
                  <span className="mt-1 block text-muted">{item.field}</span>
                </span>
                <span className="case-outcome">
                  {item.outcome}
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div
        className="case-overlay"
        data-open={open ? "true" : "false"}
        onClick={() => setOpenId(null)}
      />
      <article
        ref={panelRef}
        className="case-panel"
        data-open={open ? "true" : "false"}
        role="dialog"
        aria-modal={open}
        aria-labelledby={titleId}
        inert={!open}
      >
        <CaseBody project={project} titleId={titleId} onClose={() => setOpenId(null)} onCycle={cycle} />
      </article>
    </section>
  );
}

function CaseBody({
  project,
  titleId,
  onClose,
  onCycle,
}: {
  project: Project;
  titleId: string;
  onClose: () => void;
  onCycle: (direction: 1 | -1) => void;
}) {
  return (
    <>
      <div className="panel-bar">
        <p className="eyebrow text-muted">
          <span className="text-accent">{project.index}</span>
          {" · "}
          {project.field}
        </p>
        <button type="button" className="btn btn-ghost press" data-close onClick={onClose}>
          Close
        </button>
      </div>
      <div className="panel-body note-in" key={project.id}>
        <p className="eyebrow text-muted">AstroByte · 2023–2025</p>
        <h2 id={titleId} className="display-md mt-3">
          {project.title}
        </h2>
        <p className="mt-5 text-lg text-muted">{project.lede}</p>
        <p className="mt-8 border-l border-accent pl-4 text-xl">{project.outcome}</p>
        <ul className="stack mt-6">
          {project.stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <ul className="marks mt-8">
          {project.notes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
        <div className="mt-10 flex flex-wrap gap-3">
          <button type="button" className="btn btn-ghost press" onClick={() => onCycle(-1)}>
            Previous
          </button>
          <button type="button" className="btn press" onClick={() => onCycle(1)}>
            Next case
          </button>
        </div>
      </div>
    </>
  );
}
