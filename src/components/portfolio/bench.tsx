import { useState } from "react";
import { claimWords, faults, plate, traceSteps } from "@/data/profile";
import { SectionHead } from "@/components/portfolio/chrome";

type Mode = "trace" | "ground" | "claim";

const modes: { id: Mode; label: string }[] = [
  { id: "trace", label: "Trace" },
  { id: "ground", label: "Grounding" },
  { id: "claim", label: "Claim" },
];

export function Bench() {
  const [mode, setMode] = useState<Mode>("trace");

  return (
    <section className="section" id="methods">
      <div className="wrap">
        <SectionHead
          index="03"
          label="Methods"
          title="How I review a machine."
          children="Same habit as editing a frame: against the instruction, against the evidence, and against what would break later. Try the bench."
        />
        <div className="seg" role="tablist" aria-label="Review instruments">
          {modes.map((item) => (
            <button
              key={item.id}
              type="button"
              className="press"
              role="tab"
              aria-selected={mode === item.id}
              aria-pressed={mode === item.id}
              onClick={() => setMode(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="mt-8">
          <div hidden={mode !== "trace"}>
            <TraceBench />
          </div>
          <div hidden={mode !== "ground"}>
            <GroundBench />
          </div>
          <div hidden={mode !== "claim"}>
            <ClaimBench />
          </div>
        </div>
      </div>
    </section>
  );
}

function TraceBench() {
  const [step, setStep] = useState(0);
  const [halt, setHalt] = useState<string | null>(null);
  const current = traceSteps[step];

  return (
    <div>
      <p className="max-w-2xl text-muted">
        Task: add tenant isolation to the prompt cache key. Scrub the run, then mark where you would stop it.
      </p>
      <div className="steps mt-6" role="tablist" aria-label="Agent trace">
        {traceSteps.map((item, index) => (
          <button
            key={item.id}
            type="button"
            className="step press"
            aria-current={index === step ? "step" : undefined}
            onClick={() => setStep(index)}
          >
            <span className="eyebrow">0{index + 1}</span>
            {item.label}
          </button>
        ))}
      </div>
      <div className="note-in mt-6 grid gap-4" key={current.id}>
        <div>
          <p className="eyebrow text-muted">Agent</p>
          {current.code ? <pre className="code-block mt-3">{current.agent}</pre> : <p className="mt-3 text-lg">{current.agent}</p>}
        </div>
        <div>
          <p className="eyebrow text-accent">My read</p>
          <p className="mt-3 text-lg">{current.note}</p>
        </div>
      </div>
      <div className="mt-8">
        <p className="eyebrow text-muted">Where do you stop this run?</p>
        <div className="seg mt-3">
          {traceSteps.map((item) => (
            <button
              key={item.id}
              type="button"
              className="press"
              aria-pressed={halt === item.id}
              onClick={() => setHalt(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
        {halt ? (
          <p className="note-in mt-4 text-lg" role="status">
            {halt === "plan"
              ? "Same call. I stop at the plan."
              : "I would stop earlier. A bad plan makes the green test irrelevant."}
          </p>
        ) : null}
      </div>
    </div>
  );
}

function GroundBench() {
  const [picked, setPicked] = useState<string[]>([]);
  const [shown, setShown] = useState(false);

  function toggle(id: string) {
    setPicked((current) => (current.includes(id) ? current.filter((item) => item !== id) : [...current, id]));
  }

  const expected = faults.filter((item) => item.expect).map((item) => item.id as string);
  const hits = expected.filter((id) => picked.includes(id)).length;
  const extras = picked.filter((id) => !expected.includes(id)).length;

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div>
        <p className="eyebrow text-muted">Evidence plate</p>
        <ul className="plate mt-4">
          {plate.map(([label, value]) => (
            <li key={`${label}-${value}`}>
              <span>{label}</span>
              <span>{value}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="eyebrow text-muted">Model caption</p>
        <p className="display-sm mt-4 italic">“A nice photo of a person in a kitchen with stuff.”</p>
        <p className="mt-6 text-muted">Mark the faults against the plate.</p>
        <div className="faults mt-4">
          {faults.map((item) => (
            <button
              key={item.id}
              type="button"
              className="fault press"
              aria-pressed={picked.includes(item.id)}
              onClick={() => toggle(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <button type="button" className="btn press mt-5" onClick={() => setShown(true)}>
          Compare with my read
        </button>
        {shown ? (
          <p className="note-in mt-4 text-lg" role="status">
            {hits} of {expected.length} faults marked{extras ? `, plus ${extras} that I would not flag` : ""}. I would
            reject the caption. “Nice” is not a label, the person is not in the evidence, and the kettle, mugs, wood,
            steam, and west light are. A shippable caption names those and stops.
          </p>
        ) : null}
      </div>
    </div>
  );
}

function ClaimBench() {
  const [flagged, setFlagged] = useState<number[]>([]);
  const [shown, setShown] = useState(false);
  const bad = claimWords.map((word, index) => (word.bad ? index : -1)).filter((index) => index >= 0);

  function toggle(index: number) {
    setFlagged((current) => (current.includes(index) ? current.filter((item) => item !== index) : [...current, index]));
  }

  const hits = bad.filter((index) => flagged.includes(index)).length;
  const extras = flagged.filter((index) => !bad.includes(index)).length;

  return (
    <div>
      <p className="max-w-2xl text-muted">
        Tap the words the evidence does not support. The 35% is a real reported figure — the scope around it is the question.
      </p>
      <p className="sentence mt-6">
        {claimWords.map((word, index) => {
          const on = flagged.includes(index);
          const miss = shown && word.bad && !on;
          const extra = shown && !word.bad && on;
          const className = miss ? "word miss" : extra ? "word extra" : on ? "word on" : "word";
          return (
            <button
              key={`${word.t}-${index}`}
              type="button"
              className={`${className} press`}
              aria-pressed={on}
              onClick={() => toggle(index)}
            >
              {word.t}
            </button>
          );
        })}
      </p>
      <button type="button" className="btn press mt-6" onClick={() => setShown(true)}>
        Compare with my read
      </button>
      {shown ? (
        <p className="note-in mt-4 max-w-2xl text-lg" role="status">
          {hits} of {bad.length} unsupported words marked{extras ? `, and ${extras} kept word${extras === 1 ? "" : "s"} flagged` : ""}.
          Keep the 35%. It is the reported Redis prompt-cache result. “All production traffic” is not what was measured.
        </p>
      ) : null}
    </div>
  );
}
