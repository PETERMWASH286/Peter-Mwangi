import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { profile, reel, skillGroups, skills, type SkillGroup } from "@/data/profile";
import { SectionHead, useNairobiTime } from "@/components/portfolio/chrome";

export function Reel() {
  const items = (duplicate: boolean) => (
    <div className={duplicate ? "reel is-dup" : "reel"}>
      {reel.map((item) => (
        <span className="reel-item" key={item}>
          {item}
          <span className="dot" />
        </span>
      ))}
    </div>
  );

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {items(false)}
        {items(true)}
      </div>
    </div>
  );
}

export function Practice() {
  const [filter, setFilter] = useState<SkillGroup | "All">("All");
  const visible = filter === "All" ? skillGroups : skillGroups.filter((group) => group === filter);

  return (
    <section className="section" id="practice">
      <div className="wrap">
        <SectionHead
          index="05"
          label="Practice"
          title="The rest of the bench."
          children="Engineering, evaluation, visual work, and the unglamorous generalist layer that keeps a handoff usable."
        />
        <div className="seg" role="group" aria-label="Filter skills">
          {(["All", ...skillGroups] as const).map((group) => (
            <button key={group} type="button" className="press" aria-pressed={filter === group} onClick={() => setFilter(group)}>
              {group}
            </button>
          ))}
        </div>
        <div className={`mt-10 grid gap-8 ${visible.length > 1 ? "md:grid-cols-2 lg:grid-cols-4" : "max-w-xl"}`}>
          {visible.map((group) => (
            <div key={group} className="skill-col">
              <h3 className="eyebrow">{group}</h3>
              <ul className="mt-4">
                {skills
                  .filter((skill) => skill.group === group)
                  .map((skill) => (
                    <li key={skill.name}>{skill.name}</li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 grid gap-12 border-t border-line pt-10 md:grid-cols-2">
          <div>
            <h3 className="eyebrow text-muted">Education</h3>
            <p className="display-sm mt-3">BSc Computer Science</p>
            <p className="mt-2 text-muted">Kenyatta University · Graduated 2024</p>
            <p className="mt-4 text-muted">
              Algorithms, distributed systems, databases, software architecture, networks, operating systems, and AI
              fundamentals.
            </p>
          </div>
          <div>
            <h3 className="eyebrow text-muted">Working style</h3>
            <p className="mt-3 text-lg">
              Remote and asynchronous. Detailed guidelines. Independent investigation, then a clear write-up. Feedback
              goes into the work, not beside it. Accuracy, consistency, and the deadline — in that order.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const time = useNairobiTime();
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">("idle");
  const mailto = `mailto:${profile.email}?subject=${encodeURIComponent("Work with Peter Mwangi")}`;

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopyState("copied");
    } catch {
      setCopyState("failed");
    }
    window.setTimeout(() => setCopyState("idle"), 1600);
  }

  const links = [
    { href: profile.linkedin, label: "LinkedIn" },
    { href: profile.github, label: "GitHub" },
    { href: profile.x, label: "X" },
  ];

  return (
    <section className="section" id="contact">
      <div className="wrap">
        <SectionHead index="06" label="Contact" title="Write when the work needs a harder look." />
        <a className="email-link" href={mailto}>
          {profile.email}
        </a>
        <div className="mt-6 flex flex-wrap gap-3">
          <button type="button" className="btn press" onClick={copyEmail}>
            {copyState === "copied" ? "Copied" : copyState === "failed" ? "Use the link" : "Copy email"}
          </button>
          <a className="btn btn-ghost press" href={profile.cv} download="Peter-Mwangi-CV.pdf">
            Read the CV
          </a>
        </div>
        <div className="mt-12 grid gap-8 border-t border-line pt-8 md:grid-cols-3">
          <div>
            <p className="eyebrow text-muted">Place</p>
            <p className="mt-3 text-lg">
              {profile.location}
              <span className="mt-1 block text-muted">{profile.availability}</span>
            </p>
            <p className="nums mt-3 text-muted">{time.full}</p>
          </div>
          <div>
            <p className="eyebrow text-muted">Phone</p>
            <a className="quiet mt-3 inline-block text-lg" href={profile.phoneHref}>
              {profile.phone}
            </a>
          </div>
          <div>
            <p className="eyebrow text-muted">Elsewhere</p>
            <ul className="mt-3">
              {links.map((link) => (
                <li key={link.label} className="mt-2">
                  <a className="quiet inline-flex items-center gap-1 text-lg" href={link.href} target="_blank" rel="noreferrer">
                    {link.label}
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-12 max-w-xl text-muted">
          Open to remote work in software engineering, AI evaluation, and visual review — staff roles and focused
          contracts.
        </p>
      </div>
    </section>
  );
}
