import { useMemo, useRef, useState, type KeyboardEvent } from "react";
import { SectionHead } from "@/components/portfolio/chrome";

const ratios = [
  { id: "3:2", value: "3 / 2", label: "3:2" },
  { id: "4:5", value: "4 / 5", label: "4:5" },
  { id: "1:1", value: "1 / 1", label: "1:1" },
  { id: "16:9", value: "16 / 9", label: "16:9" },
] as const;

const lights = ["West window", "Tungsten", "Overcast", "Safelight"] as const;
type GridMode = "thirds" | "cross" | "clean";

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function placement(x: number, y: number) {
  const col = x < 38 ? "left third" : x > 62 ? "right third" : "center";
  const row = y < 38 ? "upper" : y > 62 ? "lower" : "middle";
  if (col === "center" && row === "middle") return "the center";
  if (col === "center") return `the ${row} center`;
  if (row === "middle") return `the ${col}`;
  return `the ${row} ${col}`;
}

function thirdsHold(x: number, y: number) {
  const points = [
    { x: 100 / 3, y: 100 / 3, spot: "upper left" },
    { x: 200 / 3, y: 100 / 3, spot: "upper right" },
    { x: 100 / 3, y: 200 / 3, spot: "lower left" },
    { x: 200 / 3, y: 200 / 3, spot: "lower right" },
  ];
  let best = points[0];
  let distance = Infinity;
  for (const point of points) {
    const next = Math.hypot(x - point.x, y - point.y);
    if (next < distance) {
      distance = next;
      best = point;
    }
  }
  return { held: distance < 8, spot: best.spot };
}

export function Studio() {
  const frameRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ active: false, dx: 0, dy: 0 });
  const [pos, setPos] = useState({ x: 66, y: 34 });
  const [ratio, setRatio] = useState<(typeof ratios)[number]>(ratios[0]);
  const [grid, setGrid] = useState<GridMode>("thirds");
  const [subject, setSubject] = useState("Enamel kettle");
  const [light, setLight] = useState<(typeof lights)[number]>("West window");
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">("idle");

  const hold = thirdsHold(pos.x, pos.y);
  const centered = Math.hypot(pos.x - 50, pos.y - 50) < 8;
  const where = placement(pos.x, pos.y);
  const name = subject.trim() || "Untitled subject";

  const metadata = useMemo(() => {
    const caption = `${name} in ${light.toLowerCase()} light, held at ${where}, ${ratio.label} crop.`;
    const keywords = [name, light, ratio.label, "Nairobi", "editorial"].join(", ");
    return `Caption: ${caption}\nAlt: ${caption}\nKeywords: ${keywords}`;
  }, [name, light, where, ratio.label]);

  const readout =
    grid === "thirds"
      ? hold.held
        ? `Held · ${hold.spot}`
        : "Loose — find a power point"
      : grid === "cross"
        ? centered
          ? "Held · center"
          : "Loose — off center"
        : `x ${Math.round(pos.x)} · y ${Math.round(pos.y)}`;

  function move(clientX: number, clientY: number) {
    const frame = frameRef.current;
    if (!frame) return;
    const box = frame.getBoundingClientRect();
    const x = ((clientX - drag.current.dx - box.left) / box.width) * 100;
    const y = ((clientY - drag.current.dy - box.top) / box.height) * 100;
    setPos({ x: clamp(x, 12, 88), y: clamp(y, 16, 78) });
  }

  function onKey(event: KeyboardEvent<HTMLDivElement>) {
    const step = event.shiftKey ? 6 : 2;
    let { x, y } = pos;
    if (event.key === "ArrowLeft") x -= step;
    else if (event.key === "ArrowRight") x += step;
    else if (event.key === "ArrowUp") y -= step;
    else if (event.key === "ArrowDown") y += step;
    else return;
    event.preventDefault();
    setPos({ x: clamp(x, 12, 88), y: clamp(y, 16, 78) });
  }

  async function copyMeta() {
    try {
      await navigator.clipboard.writeText(metadata);
      setCopyState("copied");
    } catch {
      setCopyState("failed");
    }
    window.setTimeout(() => setCopyState("idle"), 1600);
  }

  return (
    <section className="section" id="studio">
      <div className="wrap">
        <SectionHead
          index="04"
          label="Studio"
          title="Crop, place, label."
          children="A small editor’s bench: ratio, grid, and a caption that follows the subject. Drag it, or focus it and use the arrow keys."
        />
        <div className="grid items-start gap-10 lg:grid-cols-12">
          <div className="order-2 lg:order-1 lg:col-span-5">
            <label className="block">
              <span className="eyebrow text-muted">Subject</span>
              <input
                className="field"
                value={subject}
                maxLength={42}
                onChange={(event) => setSubject(event.target.value)}
              />
            </label>
            <p className="eyebrow mb-3 mt-8 text-muted">Light</p>
            <div className="seg">
              {lights.map((item) => (
                <button key={item} type="button" className="chip press" aria-pressed={light === item} onClick={() => setLight(item)}>
                  {item}
                </button>
              ))}
            </div>
            <p className="eyebrow mb-3 mt-8 text-muted">Ratio</p>
            <div className="seg">
              {ratios.map((item) => (
                <button key={item.id} type="button" className="chip press" aria-pressed={ratio.id === item.id} onClick={() => setRatio(item)}>
                  {item.label}
                </button>
              ))}
            </div>
            <p className="eyebrow mb-3 mt-8 text-muted">Grid</p>
            <div className="seg">
              {(
                [
                  ["thirds", "Thirds"],
                  ["cross", "Center"],
                  ["clean", "Clean"],
                ] as const
              ).map(([id, label]) => (
                <button key={id} type="button" className="chip press" aria-pressed={grid === id} onClick={() => setGrid(id)}>
                  {label}
                </button>
              ))}
            </div>
            <p className="mt-8 text-lg" role="status">
              {readout}
            </p>
            <pre className="meta-block mt-4">{metadata}</pre>
            <button type="button" className="btn press mt-4" onClick={copyMeta}>
              {copyState === "copied" ? "Copied" : copyState === "failed" ? "Select the text" : "Copy metadata"}
            </button>
          </div>
          <div className="order-1 lg:order-2 lg:col-span-7">
            <div
              ref={frameRef}
              className="finder"
              style={{ aspectRatio: ratio.value }}
              onKeyDown={onKey}
            >
              {grid !== "clean" ? <div className={`finder-grid ${grid === "thirds" ? "thirds" : "cross"}`} aria-hidden="true" /> : null}
              <div
                className={`subject ${hold.held && grid === "thirds" ? "is-held" : ""} ${centered && grid === "cross" ? "is-held" : ""}`}
                style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
                tabIndex={0}
                role="group"
                aria-label={`${name}, ${where}. ${readout}`}
                onPointerDown={(event) => {
                  const rect = event.currentTarget.getBoundingClientRect();
                  drag.current = {
                    active: true,
                    dx: event.clientX - (rect.left + rect.width / 2),
                    dy: event.clientY - (rect.top + rect.height / 2),
                  };
                  event.currentTarget.setPointerCapture(event.pointerId);
                }}
                onPointerMove={(event) => {
                  if (!drag.current.active) return;
                  move(event.clientX, event.clientY);
                }}
                onPointerUp={(event) => {
                  drag.current.active = false;
                  if (event.currentTarget.hasPointerCapture(event.pointerId)) {
                    event.currentTarget.releasePointerCapture(event.pointerId);
                  }
                }}
              >
                <p className="eyebrow text-accent">Subject</p>
                <p className="mt-1 truncate">{name}</p>
              </div>
              <div className="finder-meta" aria-hidden="true">
                <span>PMW 286</span>
                <span>{ratio.label}</span>
                <span>{grid === "thirds" ? "Thirds" : grid === "cross" ? "Center" : "Clean"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
