import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as ArrowUpRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CGxHQ2eR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var profile = {
	name: "Peter Mwangi",
	location: "Nairobi, Kenya",
	availability: "Remote",
	email: "petrasmwash1@gmail.com",
	phone: "+254 799 397 003",
	phoneHref: "tel:+254799397003",
	github: "https://github.com/PETERMWASH286",
	linkedin: "https://www.linkedin.com/in/peter-mwangi-152420292",
	x: "https://x.com/petrasmwash",
	cv: "/peter-mwangi-cv.pdf"
};
var sections = [
	{
		id: "top",
		label: "Intro",
		frame: "01"
	},
	{
		id: "work",
		label: "Work",
		frame: "02"
	},
	{
		id: "methods",
		label: "Methods",
		frame: "03"
	},
	{
		id: "studio",
		label: "Studio",
		frame: "04"
	},
	{
		id: "practice",
		label: "Practice",
		frame: "05"
	},
	{
		id: "contact",
		label: "Contact",
		frame: "06"
	}
];
var nav = sections.filter((section) => section.id !== "top");
var reel = [
	"Software engineering",
	"AI evaluation",
	"Photography",
	"Photo editing",
	"Image labeling",
	"Visual grounding",
	"API design",
	"Technical writing",
	"Rubric scoring",
	"Remote delivery"
];
var proof = [
	{
		figure: "35%",
		title: "Reported API latency reduction",
		detail: "Redis prompt caching on an LLM gateway. Kept as a reported figure, not a slogan."
	},
	{
		figure: "8+",
		title: "Clinical and administrative workflows",
		detail: "AstroCare HMIS — registration through pharmacy, with tenant separation."
	},
	{
		figure: "2023–25",
		title: "Software engineer, AstroByte",
		detail: "Healthcare, education, and operations platforms in production."
	},
	{
		figure: "2024",
		title: "BSc Computer Science",
		detail: "Kenyatta University. Systems, databases, and AI fundamentals."
	}
];
var experience = [
	"Built and improved software across healthcare, education, and operations platforms using Go, Python, TypeScript, React, Next.js, PostgreSQL, and MySQL.",
	"Designed APIs, role-based access controls, and tenant data separation for sensitive records.",
	"Investigated issues, tested fixes, documented behavior, and supported deployment with Docker, Nginx, Git, and CI/CD.",
	"Integrated external services and AI-enabled components, checking response quality, error handling, and reliability."
];
var projects = [
	{
		id: "gateway",
		index: "01",
		title: "LLM Gateway & Orchestrator",
		field: "Infrastructure",
		outcome: "35% latency, reported",
		lede: "An LLM proxy with prompt caching, rate limiting, load balancing, and structured responses.",
		stack: [
			"Go",
			"Redis",
			"OpenAI API",
			"Docker"
		],
		notes: [
			"Sat between product code and model vendors so timeouts, limits, and response shape lived in one place.",
			"Cached prompts in Redis. The reported result was a 35% API latency reduction on that cache.",
			"Rate limiting and load balancing kept one noisy caller from starving the rest.",
			"Structured responses so downstream services could trust a shape, not a blob of text."
		]
	},
	{
		id: "astrocare",
		index: "02",
		title: "AstroCare HMIS",
		field: "Healthcare",
		outcome: "8+ workflows",
		lede: "A multi-tenant hospital platform spanning clinical and administrative work, with access control and coding workflows.",
		stack: [
			"Go",
			"Python",
			"React",
			"PostgreSQL",
			"Docker",
			"Nginx"
		],
		notes: [
			"Workflows covered registration, billing, triage, consultations, laboratory, radiology, pharmacy, and specialized care.",
			"Role-based access and tenant data separation for sensitive records.",
			"ICD-10 and CPT coding workflows inside the same platform.",
			"Deployment and issue work ran through Docker, Nginx, Git, and CI/CD."
		]
	},
	{
		id: "astroedu",
		index: "03",
		title: "AstroEdu Microservices",
		field: "Education",
		outcome: "Identity through AI",
		lede: "A cloud-oriented education platform split across the services a school actually runs on.",
		stack: [
			"TypeScript",
			"Next.js",
			"API Gateway"
		],
		notes: [
			"Designed across identity, learning, finance, analytics, notifications, and AI integrations.",
			"An API gateway in front of those services so clients were not wired to every backend.",
			"AI pieces were treated as integrations to check — response quality, errors, and reliability — not as magic."
		]
	},
	{
		id: "scheduler",
		index: "04",
		title: "Distributed Task Scheduler",
		field: "Operations",
		outcome: "Retries and dead letters",
		lede: "Asynchronous job workflows for background tasks, scheduled reports, and data ingestion.",
		stack: [
			"Python",
			"Redis",
			"RabbitMQ",
			"PostgreSQL"
		],
		notes: [
			"Jobs could fail, retry, and land in a dead-letter path instead of vanishing.",
			"Used for background tasks, scheduled reports, and data ingestion.",
			"Redis, RabbitMQ, and PostgreSQL split the queue, the schedule, and the record."
		]
	}
];
var skillGroups = [
	"Engineering",
	"Evaluation",
	"Visual",
	"Generalist"
];
var skills = [
	{
		name: "Go",
		group: "Engineering"
	},
	{
		name: "Python",
		group: "Engineering"
	},
	{
		name: "TypeScript",
		group: "Engineering"
	},
	{
		name: "JavaScript",
		group: "Engineering"
	},
	{
		name: "REST APIs",
		group: "Engineering"
	},
	{
		name: "React",
		group: "Engineering"
	},
	{
		name: "Next.js",
		group: "Engineering"
	},
	{
		name: "PostgreSQL",
		group: "Engineering"
	},
	{
		name: "MySQL",
		group: "Engineering"
	},
	{
		name: "Redis",
		group: "Engineering"
	},
	{
		name: "RabbitMQ",
		group: "Engineering"
	},
	{
		name: "Docker",
		group: "Engineering"
	},
	{
		name: "Nginx",
		group: "Engineering"
	},
	{
		name: "CI/CD",
		group: "Engineering"
	},
	{
		name: "Rubric scoring",
		group: "Evaluation"
	},
	{
		name: "Instruction adherence",
		group: "Evaluation"
	},
	{
		name: "Agent trace review",
		group: "Evaluation"
	},
	{
		name: "Code diffs and tests",
		group: "Evaluation"
	},
	{
		name: "Visual grounding",
		group: "Evaluation"
	},
	{
		name: "Source verification",
		group: "Evaluation"
	},
	{
		name: "Photography",
		group: "Visual"
	},
	{
		name: "Adobe Photoshop",
		group: "Visual"
	},
	{
		name: "Crop and composition",
		group: "Visual"
	},
	{
		name: "Image labeling",
		group: "Visual"
	},
	{
		name: "Captions",
		group: "Visual"
	},
	{
		name: "Descriptive metadata",
		group: "Visual"
	},
	{
		name: "Documentation",
		group: "Generalist"
	},
	{
		name: "Issue reporting",
		group: "Generalist"
	},
	{
		name: "Data organization",
		group: "Generalist"
	},
	{
		name: "Remote collaboration",
		group: "Generalist"
	},
	{
		name: "Deadline management",
		group: "Generalist"
	}
];
var traceSteps = [
	{
		id: "plan",
		label: "Plan",
		code: false,
		agent: "Hash the raw prompt. If the cache hits, return it. Skip the database.",
		note: "The task was tenant isolation. The plan never says tenant. I stop the run here — a wrong plan makes every later green check suspect."
	},
	{
		id: "tools",
		label: "Tools",
		code: false,
		agent: "Open cache.go. Search for cacheKey. Leave the tenant middleware closed.",
		note: "Right file, ignored neighbor. The middleware already had the tenant id in context. Tool choice followed the bad plan."
	},
	{
		id: "edit",
		label: "Edit",
		code: true,
		agent: `func cacheKey(prompt string) string {\n    return "prompt:" + prompt\n}`,
		note: "The diff compiles and still mixes tenants. The key has to bind the tenant id before the prompt hash."
	},
	{
		id: "test",
		label: "Test",
		code: false,
		agent: "go test ./internal/cache — ok. One tenant in the fixture. Every assertion passed.",
		note: "A passing test with one tenant cannot see a cross-tenant leak. I treat this as untested, not as proof."
	},
	{
		id: "verdict",
		label: "Verdict",
		code: false,
		agent: "Done. Cache is in place. Latency should drop.",
		note: "Fail instruction adherence. Latency was not the task. Isolation was. I send it back at the plan."
	}
];
var plate = [
	["Window", "West, warm"],
	["Object", "Kettle, enamel"],
	["Object", "Mug ×2"],
	["Table", "Wood"],
	["Steam", "Visible"],
	["Person", "Absent"]
];
var faults = [
	{
		id: "person",
		label: "Invents a person",
		expect: true
	},
	{
		id: "vague",
		label: "Objects stay unnamed",
		expect: true
	},
	{
		id: "light",
		label: "No light direction",
		expect: true
	},
	{
		id: "meta",
		label: "No usable metadata",
		expect: true
	},
	{
		id: "fine",
		label: "Caption is fit to ship",
		expect: false
	}
];
var claimWords = [
	{ t: "Redis" },
	{ t: "prompt" },
	{ t: "caching" },
	{ t: "reduced" },
	{ t: "API" },
	{ t: "latency" },
	{ t: "by" },
	{ t: "35%" },
	{
		t: "across",
		bad: true
	},
	{
		t: "all",
		bad: true
	},
	{
		t: "production",
		bad: true
	},
	{
		t: "traffic.",
		bad: true
	}
];
function useNairobiTime() {
	const [time, setTime] = (0, import_react.useState)({
		clock: "—",
		full: "—"
	});
	(0, import_react.useEffect)(() => {
		const clockFormat = new Intl.DateTimeFormat("en-GB", {
			timeZone: "Africa/Nairobi",
			hour: "2-digit",
			minute: "2-digit",
			hourCycle: "h23"
		});
		const fullFormat = new Intl.DateTimeFormat("en-GB", {
			timeZone: "Africa/Nairobi",
			weekday: "short",
			hour: "2-digit",
			minute: "2-digit",
			hourCycle: "h23"
		});
		const tick = () => {
			const now = /* @__PURE__ */ new Date();
			setTime({
				clock: `${clockFormat.format(now)} EAT`,
				full: `${fullFormat.format(now)} EAT`
			});
		};
		tick();
		const id = window.setInterval(tick, 15e3);
		return () => window.clearInterval(id);
	}, []);
	return time;
}
function SiteChrome({ theme, onToggleTheme, active, menuOpen, onMenu }) {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const time = useNairobiTime();
	const current = sections.find((section) => section.id === active) ?? sections[0];
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 8);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!menuOpen) return;
		const onKey = (event) => {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			className: "skip",
			href: "#content",
			children: "Skip to content"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "nav",
			"data-scrolled": scrolled ? "true" : "false",
			"data-open": menuOpen ? "true" : "false",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					className: "wordmark",
					href: "#top",
					onClick: () => onMenu(false),
					children: "Peter Mwangi"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "nav-links",
					"aria-label": "Sections",
					children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `#${item.id}`,
						"data-active": active === item.id ? "true" : "false",
						children: item.label
					}, item.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "theme-toggle press",
						onClick: onToggleTheme,
						"aria-pressed": theme === "print",
						"aria-label": theme === "darkroom" ? "Switch to print theme" : "Switch to darkroom theme",
						children: theme === "darkroom" ? "Darkroom" : "Print"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "menu-toggle press",
						"aria-expanded": menuOpen,
						"aria-controls": "site-menu",
						onClick: () => onMenu(!menuOpen),
						children: menuOpen ? "Close" : "Menu"
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			id: "site-menu",
			className: "menu md:hidden",
			"data-open": menuOpen ? "true" : "false",
			"aria-label": "Mobile",
			inert: !menuOpen,
			children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: `#${item.id}`,
				onClick: () => onMenu(false),
				children: item.label
			}, item.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "status",
			"aria-hidden": "true",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "nums",
					children: ["FR ", current.frame]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: current.label }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "nums",
					children: ["NBO ", time.clock]
				})
			]
		})
	] });
}
function SectionHead({ index, label, title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "mb-10 max-w-3xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "eyebrow mb-4 flex items-center gap-3 text-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-accent",
						children: index
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "rule" }),
					label
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "display-md text-fg",
				children: title
			}),
			children ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 text-lg text-muted",
				children
			}) : null
		]
	});
}
function HeroBody({ lens }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "hero-grid",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow hero-kicker text-accent",
				children: lens ? "Visual editor" : "Software engineer"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: `display-xl hero-name ${lens ? "italic" : ""}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Peter" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Mwangi" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "hero-disciplines",
				children: "AI evaluation · Photography · Systems"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "hero-lede",
				children: lens ? "Frames, labels, and evidence — the edit that makes an image or a model tell the truth." : "APIs, gateways, and multi-tenant systems for clinics, classrooms, and the queues behind them."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hero-actions",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					className: "btn press",
					href: "#work",
					children: "Selected work"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					className: "btn btn-ghost press",
					href: "#contact",
					children: "Write"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "hero-hint",
				children: "Move the aperture. Engineering stays outside. The edit is inside."
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: `hero-verb ${lens ? "italic" : ""}`,
			"aria-hidden": "true",
			children: lens ? "Edit." : "Build."
		})]
	});
}
function Hero() {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
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
		const radius = () => root.clientWidth < 768 ? 118 : 176;
		const place = (px, py) => {
			root.style.setProperty("--lx", `${px}px`);
			root.style.setProperty("--ly", `${py}px`);
			root.style.setProperty("--lr", `${radius()}px`);
		};
		const resetTarget = () => {
			tx = root.clientWidth * .72;
			ty = Math.min(root.clientHeight * .46, 420);
			x = tx;
			y = ty;
			place(x, y);
		};
		resetTarget();
		const onPointer = (event) => {
			const box = root.getBoundingClientRect();
			tx = event.clientX - box.left;
			ty = event.clientY - box.top;
			interacting = true;
		};
		const loop = (now) => {
			if (!interacting && !reduce && fine) {
				const t = now / 1e3;
				tx = root.clientWidth * (.68 + Math.sin(t * .33) * .06);
				ty = root.clientHeight * (.44 + Math.cos(t * .27) * .05);
			}
			const ease = reduce ? 1 : .14;
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "hero",
		id: "top",
		ref,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hero-inner wrap",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroBody, { lens: false })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hero-lens",
				inert: true,
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hero-inner wrap",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroBody, { lens: true })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "aperture",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "corner corner-tl",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "corner corner-tr",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "corner corner-bl",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "corner corner-br",
				"aria-hidden": "true"
			})
		]
	});
}
function Reel() {
	const items = (duplicate) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: duplicate ? "reel is-dup" : "reel",
		children: reel.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "reel-item",
			children: [item, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "dot" })]
		}, item))
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "marquee",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "marquee-track",
			children: [items(false), items(true)]
		})
	});
}
function Practice() {
	const [filter, setFilter] = (0, import_react.useState)("All");
	const visible = filter === "All" ? skillGroups : skillGroups.filter((group) => group === filter);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section",
		id: "practice",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
					index: "05",
					label: "Practice",
					title: "The rest of the bench.",
					children: "Engineering, evaluation, visual work, and the unglamorous generalist layer that keeps a handoff usable."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "seg",
					role: "group",
					"aria-label": "Filter skills",
					children: ["All", ...skillGroups].map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "press",
						"aria-pressed": filter === group,
						onClick: () => setFilter(group),
						children: group
					}, group))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `mt-10 grid gap-8 ${visible.length > 1 ? "md:grid-cols-2 lg:grid-cols-4" : "max-w-xl"}`,
					children: visible.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "skill-col",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "eyebrow",
							children: group
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4",
							children: skills.filter((skill) => skill.group === group).map((skill) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: skill.name }, skill.name))
						})]
					}, group))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-16 grid gap-12 border-t border-line pt-10 md:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "eyebrow text-muted",
							children: "Education"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "display-sm mt-3",
							children: "BSc Computer Science"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-muted",
							children: "Kenyatta University · Graduated 2024"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-muted",
							children: "Algorithms, distributed systems, databases, software architecture, networks, operating systems, and AI fundamentals."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "eyebrow text-muted",
						children: "Working style"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-lg",
						children: "Remote and asynchronous. Detailed guidelines. Independent investigation, then a clear write-up. Feedback goes into the work, not beside it. Accuracy, consistency, and the deadline — in that order."
					})] })]
				})
			]
		})
	});
}
function Contact() {
	const time = useNairobiTime();
	const [copyState, setCopyState] = (0, import_react.useState)("idle");
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
		{
			href: profile.linkedin,
			label: "LinkedIn"
		},
		{
			href: profile.github,
			label: "GitHub"
		},
		{
			href: profile.x,
			label: "X"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section",
		id: "contact",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
					index: "06",
					label: "Contact",
					title: "Write when the work needs a harder look."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					className: "email-link",
					href: mailto,
					children: profile.email
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "btn press",
						onClick: copyEmail,
						children: copyState === "copied" ? "Copied" : copyState === "failed" ? "Use the link" : "Copy email"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "btn btn-ghost press",
						href: profile.cv,
						download: "Peter-Mwangi-CV.pdf",
						children: "Read the CV"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 grid gap-8 border-t border-line pt-8 md:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow text-muted",
								children: "Place"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-3 text-lg",
								children: [profile.location, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1 block text-muted",
									children: profile.availability
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "nums mt-3 text-muted",
								children: time.full
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-muted",
							children: "Phone"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "quiet mt-3 inline-block text-lg",
							href: profile.phoneHref,
							children: profile.phone
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-muted",
							children: "Elsewhere"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3",
							children: links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "mt-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									className: "quiet inline-flex items-center gap-1 text-lg",
									href: link.href,
									target: "_blank",
									rel: "noreferrer",
									children: [link.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
										className: "size-4",
										"aria-hidden": "true"
									})]
								})
							}, link.label))
						})] })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-12 max-w-xl text-muted",
					children: "Open to remote work in software engineering, AI evaluation, and visual review — staff roles and focused contracts."
				})
			]
		})
	});
}
function Work() {
	const [openId, setOpenId] = (0, import_react.useState)(null);
	const [lastId, setLastId] = (0, import_react.useState)(projects[0].id);
	const titleId = (0, import_react.useId)();
	const panelRef = (0, import_react.useRef)(null);
	const opener = (0, import_react.useRef)(null);
	const project = projects.find((item) => item.id === (openId ?? lastId)) ?? projects[0];
	const open = openId !== null;
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const panel = panelRef.current;
		const previously = opener.current;
		(panel?.querySelector("[data-close]"))?.focus();
		const onKey = (event) => {
			if (event.key === "Escape") {
				setOpenId(null);
				return;
			}
			if (event.key !== "Tab" || !panel) return;
			const nodes = panel.querySelectorAll("button, a, [href]");
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
	function show(id, source) {
		if (source) opener.current = source;
		setLastId(id);
		setOpenId(id);
	}
	function cycle(direction) {
		const next = (projects.findIndex((item) => item.id === project.id) + direction + projects.length) % projects.length;
		setLastId(projects[next].id);
		setOpenId(projects[next].id);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "section",
		id: "work",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
						index: "02",
						label: "Work",
						title: "Systems with a paper trail.",
						children: "Four builds from AstroByte, 2023–2025. The 35% is the figure that was reported — not a rounded-up cousin of it."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-12 grid gap-8 border-b border-line pb-10 md:grid-cols-12",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "md:col-span-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow text-accent",
									children: "Employment"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "display-sm mt-3",
									children: "AstroByte Tech Solutions"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-muted",
									children: "Software engineer · 2023–2025 · Nairobi"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "marks text-muted md:col-span-8",
							children: experience.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item }, item))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: projects.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "case-row press",
						onClick: (event) => show(item.id, event.currentTarget),
						"aria-haspopup": "dialog",
						"aria-expanded": openId === item.id,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "idx",
								children: item.index
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "case-title display-sm",
								children: item.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 block text-muted",
								children: item.field
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "case-outcome",
								children: [item.outcome, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
									className: "size-4",
									"aria-hidden": "true"
								})]
							})
						]
					}) }, item.id)) })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "case-overlay",
				"data-open": open ? "true" : "false",
				onClick: () => setOpenId(null)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
				ref: panelRef,
				className: "case-panel",
				"data-open": open ? "true" : "false",
				role: "dialog",
				"aria-modal": open,
				"aria-labelledby": titleId,
				inert: !open,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CaseBody, {
					project,
					titleId,
					onClose: () => setOpenId(null),
					onCycle: cycle
				})
			})
		]
	});
}
function CaseBody({ project, titleId, onClose, onCycle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "panel-bar",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "eyebrow text-muted",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-accent",
					children: project.index
				}),
				" · ",
				project.field
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "btn btn-ghost press",
			"data-close": true,
			onClick: onClose,
			children: "Close"
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "panel-body note-in",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow text-muted",
				children: "AstroByte · 2023–2025"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				id: titleId,
				className: "display-md mt-3",
				children: project.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 text-lg text-muted",
				children: project.lede
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 border-l border-accent pl-4 text-xl",
				children: project.outcome
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "stack mt-6",
				children: project.stack.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item }, item))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "marks mt-8",
				children: project.notes.map((note) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: note }, note))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "btn btn-ghost press",
					onClick: () => onCycle(-1),
					children: "Previous"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "btn press",
					onClick: () => onCycle(1),
					children: "Next case"
				})]
			})
		]
	}, project.id)] });
}
var modes = [
	{
		id: "trace",
		label: "Trace"
	},
	{
		id: "ground",
		label: "Grounding"
	},
	{
		id: "claim",
		label: "Claim"
	}
];
function Bench() {
	const [mode, setMode] = (0, import_react.useState)("trace");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section",
		id: "methods",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
					index: "03",
					label: "Methods",
					title: "How I review a machine.",
					children: "Same habit as editing a frame: against the instruction, against the evidence, and against what would break later. Try the bench."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "seg",
					role: "tablist",
					"aria-label": "Review instruments",
					children: modes.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "press",
						role: "tab",
						"aria-selected": mode === item.id,
						"aria-pressed": mode === item.id,
						onClick: () => setMode(item.id),
						children: item.label
					}, item.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							hidden: mode !== "trace",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TraceBench, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							hidden: mode !== "ground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GroundBench, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							hidden: mode !== "claim",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClaimBench, {})
						})
					]
				})
			]
		})
	});
}
function TraceBench() {
	const [step, setStep] = (0, import_react.useState)(0);
	const [halt, setHalt] = (0, import_react.useState)(null);
	const current = traceSteps[step];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "max-w-2xl text-muted",
			children: "Task: add tenant isolation to the prompt cache key. Scrub the run, then mark where you would stop it."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "steps mt-6",
			role: "tablist",
			"aria-label": "Agent trace",
			children: traceSteps.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: "step press",
				"aria-current": index === step ? "step" : void 0,
				onClick: () => setStep(index),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "eyebrow",
					children: ["0", index + 1]
				}), item.label]
			}, item.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "note-in mt-6 grid gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow text-muted",
				children: "Agent"
			}), current.code ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
				className: "code-block mt-3",
				children: current.agent
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-lg",
				children: current.agent
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow text-accent",
				children: "My read"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-lg",
				children: current.note
			})] })]
		}, current.id),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow text-muted",
					children: "Where do you stop this run?"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "seg mt-3",
					children: traceSteps.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "press",
						"aria-pressed": halt === item.id,
						onClick: () => setHalt(item.id),
						children: item.label
					}, item.id))
				}),
				halt ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "note-in mt-4 text-lg",
					role: "status",
					children: halt === "plan" ? "Same call. I stop at the plan." : "I would stop earlier. A bad plan makes the green test irrelevant."
				}) : null
			]
		})
	] });
}
function GroundBench() {
	const [picked, setPicked] = (0, import_react.useState)([]);
	const [shown, setShown] = (0, import_react.useState)(false);
	function toggle(id) {
		setPicked((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
	}
	const expected = faults.filter((item) => item.expect).map((item) => item.id);
	const hits = expected.filter((id) => picked.includes(id)).length;
	const extras = picked.filter((id) => !expected.includes(id)).length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-8 lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "eyebrow text-muted",
			children: "Evidence plate"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "plate mt-4",
			children: plate.map(([label, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: value })] }, `${label}-${value}`))
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow text-muted",
				children: "Model caption"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "display-sm mt-4 italic",
				children: "“A nice photo of a person in a kitchen with stuff.”"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-muted",
				children: "Mark the faults against the plate."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "faults mt-4",
				children: faults.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "fault press",
					"aria-pressed": picked.includes(item.id),
					onClick: () => toggle(item.id),
					children: item.label
				}, item.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "btn press mt-5",
				onClick: () => setShown(true),
				children: "Compare with my read"
			}),
			shown ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "note-in mt-4 text-lg",
				role: "status",
				children: [
					hits,
					" of ",
					expected.length,
					" faults marked",
					extras ? `, plus ${extras} that I would not flag` : "",
					". I would reject the caption. “Nice” is not a label, the person is not in the evidence, and the kettle, mugs, wood, steam, and west light are. A shippable caption names those and stops."
				]
			}) : null
		] })]
	});
}
function ClaimBench() {
	const [flagged, setFlagged] = (0, import_react.useState)([]);
	const [shown, setShown] = (0, import_react.useState)(false);
	const bad = claimWords.map((word, index) => word.bad ? index : -1).filter((index) => index >= 0);
	function toggle(index) {
		setFlagged((current) => current.includes(index) ? current.filter((item) => item !== index) : [...current, index]);
	}
	const hits = bad.filter((index) => flagged.includes(index)).length;
	const extras = flagged.filter((index) => !bad.includes(index)).length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "max-w-2xl text-muted",
			children: "Tap the words the evidence does not support. The 35% is a real reported figure — the scope around it is the question."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "sentence mt-6",
			children: claimWords.map((word, index) => {
				const on = flagged.includes(index);
				const miss = shown && word.bad && !on;
				const extra = shown && !word.bad && on;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: `${miss ? "word miss" : extra ? "word extra" : on ? "word on" : "word"} press`,
					"aria-pressed": on,
					onClick: () => toggle(index),
					children: word.t
				}, `${word.t}-${index}`);
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "btn press mt-6",
			onClick: () => setShown(true),
			children: "Compare with my read"
		}),
		shown ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "note-in mt-4 max-w-2xl text-lg",
			role: "status",
			children: [
				hits,
				" of ",
				bad.length,
				" unsupported words marked",
				extras ? `, and ${extras} kept word${extras === 1 ? "" : "s"} flagged` : "",
				". Keep the 35%. It is the reported Redis prompt-cache result. “All production traffic” is not what was measured."
			]
		}) : null
	] });
}
var ratios = [
	{
		id: "3:2",
		value: "3 / 2",
		label: "3:2"
	},
	{
		id: "4:5",
		value: "4 / 5",
		label: "4:5"
	},
	{
		id: "1:1",
		value: "1 / 1",
		label: "1:1"
	},
	{
		id: "16:9",
		value: "16 / 9",
		label: "16:9"
	}
];
var lights = [
	"West window",
	"Tungsten",
	"Overcast",
	"Safelight"
];
function clamp(value, min, max) {
	return Math.min(max, Math.max(min, value));
}
function placement(x, y) {
	const col = x < 38 ? "left third" : x > 62 ? "right third" : "center";
	const row = y < 38 ? "upper" : y > 62 ? "lower" : "middle";
	if (col === "center" && row === "middle") return "the center";
	if (col === "center") return `the ${row} center`;
	if (row === "middle") return `the ${col}`;
	return `the ${row} ${col}`;
}
function thirdsHold(x, y) {
	const points = [
		{
			x: 100 / 3,
			y: 100 / 3,
			spot: "upper left"
		},
		{
			x: 200 / 3,
			y: 100 / 3,
			spot: "upper right"
		},
		{
			x: 100 / 3,
			y: 200 / 3,
			spot: "lower left"
		},
		{
			x: 200 / 3,
			y: 200 / 3,
			spot: "lower right"
		}
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
	return {
		held: distance < 8,
		spot: best.spot
	};
}
function Studio() {
	const frameRef = (0, import_react.useRef)(null);
	const drag = (0, import_react.useRef)({
		active: false,
		dx: 0,
		dy: 0
	});
	const [pos, setPos] = (0, import_react.useState)({
		x: 66,
		y: 34
	});
	const [ratio, setRatio] = (0, import_react.useState)(ratios[0]);
	const [grid, setGrid] = (0, import_react.useState)("thirds");
	const [subject, setSubject] = (0, import_react.useState)("Enamel kettle");
	const [light, setLight] = (0, import_react.useState)("West window");
	const [copyState, setCopyState] = (0, import_react.useState)("idle");
	const hold = thirdsHold(pos.x, pos.y);
	const centered = Math.hypot(pos.x - 50, pos.y - 50) < 8;
	const where = placement(pos.x, pos.y);
	const name = subject.trim() || "Untitled subject";
	const metadata = (0, import_react.useMemo)(() => {
		const caption = `${name} in ${light.toLowerCase()} light, held at ${where}, ${ratio.label} crop.`;
		return `Caption: ${caption}\nAlt: ${caption}\nKeywords: ${[
			name,
			light,
			ratio.label,
			"Nairobi",
			"editorial"
		].join(", ")}`;
	}, [
		name,
		light,
		where,
		ratio.label
	]);
	const readout = grid === "thirds" ? hold.held ? `Held · ${hold.spot}` : "Loose — find a power point" : grid === "cross" ? centered ? "Held · center" : "Loose — off center" : `x ${Math.round(pos.x)} · y ${Math.round(pos.y)}`;
	function move(clientX, clientY) {
		const frame = frameRef.current;
		if (!frame) return;
		const box = frame.getBoundingClientRect();
		const x = (clientX - drag.current.dx - box.left) / box.width * 100;
		const y = (clientY - drag.current.dy - box.top) / box.height * 100;
		setPos({
			x: clamp(x, 12, 88),
			y: clamp(y, 16, 78)
		});
	}
	function onKey(event) {
		const step = event.shiftKey ? 6 : 2;
		let { x, y } = pos;
		if (event.key === "ArrowLeft") x -= step;
		else if (event.key === "ArrowRight") x += step;
		else if (event.key === "ArrowUp") y -= step;
		else if (event.key === "ArrowDown") y += step;
		else return;
		event.preventDefault();
		setPos({
			x: clamp(x, 12, 88),
			y: clamp(y, 16, 78)
		});
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section",
		id: "studio",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				index: "04",
				label: "Studio",
				title: "Crop, place, label.",
				children: "A small editor’s bench: ratio, grid, and a caption that follows the subject. Drag it, or focus it and use the arrow keys."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-start gap-10 lg:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "order-2 lg:order-1 lg:col-span-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "eyebrow text-muted",
								children: "Subject"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: "field",
								value: subject,
								maxLength: 42,
								onChange: (event) => setSubject(event.target.value)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow mb-3 mt-8 text-muted",
							children: "Light"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "seg",
							children: lights.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "chip press",
								"aria-pressed": light === item,
								onClick: () => setLight(item),
								children: item
							}, item))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow mb-3 mt-8 text-muted",
							children: "Ratio"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "seg",
							children: ratios.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "chip press",
								"aria-pressed": ratio.id === item.id,
								onClick: () => setRatio(item),
								children: item.label
							}, item.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow mb-3 mt-8 text-muted",
							children: "Grid"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "seg",
							children: [
								["thirds", "Thirds"],
								["cross", "Center"],
								["clean", "Clean"]
							].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "chip press",
								"aria-pressed": grid === id,
								onClick: () => setGrid(id),
								children: label
							}, id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 text-lg",
							role: "status",
							children: readout
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
							className: "meta-block mt-4",
							children: metadata
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "btn press mt-4",
							onClick: copyMeta,
							children: copyState === "copied" ? "Copied" : copyState === "failed" ? "Select the text" : "Copy metadata"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "order-1 lg:order-2 lg:col-span-7",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						ref: frameRef,
						className: "finder",
						style: { aspectRatio: ratio.value },
						onKeyDown: onKey,
						children: [
							grid !== "clean" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `finder-grid ${grid === "thirds" ? "thirds" : "cross"}`,
								"aria-hidden": "true"
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `subject ${hold.held && grid === "thirds" ? "is-held" : ""} ${centered && grid === "cross" ? "is-held" : ""}`,
								style: {
									left: `${pos.x}%`,
									top: `${pos.y}%`
								},
								tabIndex: 0,
								role: "group",
								"aria-label": `${name}, ${where}. ${readout}`,
								onPointerDown: (event) => {
									const rect = event.currentTarget.getBoundingClientRect();
									drag.current = {
										active: true,
										dx: event.clientX - (rect.left + rect.width / 2),
										dy: event.clientY - (rect.top + rect.height / 2)
									};
									event.currentTarget.setPointerCapture(event.pointerId);
								},
								onPointerMove: (event) => {
									if (!drag.current.active) return;
									move(event.clientX, event.clientY);
								},
								onPointerUp: (event) => {
									drag.current.active = false;
									if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow text-accent",
									children: "Subject"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 truncate",
									children: name
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "finder-meta",
								"aria-hidden": "true",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "PMW 286" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: ratio.label }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: grid === "thirds" ? "Thirds" : grid === "cross" ? "Center" : "Clean" })
								]
							})
						]
					})
				})]
			})]
		})
	});
}
function Portfolio() {
	const [theme, setTheme] = (0, import_react.useState)("darkroom");
	const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
	const [active, setActive] = (0, import_react.useState)(sections[0].id);
	(0, import_react.useEffect)(() => {
		if (document.documentElement.dataset.theme === "print") setTheme("print");
	}, []);
	const onMenu = (0, import_react.useCallback)((open) => setMenuOpen(open), []);
	function toggleTheme() {
		const next = theme === "darkroom" ? "print" : "darkroom";
		setTheme(next);
		if (next === "print") document.documentElement.setAttribute("data-theme", "print");
		else document.documentElement.removeAttribute("data-theme");
		localStorage.setItem("pm-theme", next);
		document.querySelector("meta[name=\"theme-color\"]")?.setAttribute("content", next === "print" ? "#f3eee6" : "#12110e");
	}
	(0, import_react.useEffect)(() => {
		const nodes = sections.map((section) => document.getElementById(section.id)).filter((node) => Boolean(node));
		const observer = new IntersectionObserver((entries) => {
			const hit = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
			if (hit?.target.id) setActive(hit.target.id);
		}, {
			rootMargin: "-45% 0px -45% 0px",
			threshold: [
				.1,
				.25,
				.5,
				1
			]
		});
		nodes.forEach((node) => observer.observe(node));
		return () => observer.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteChrome, {
		theme,
		onToggleTheme: toggleTheme,
		active,
		menuOpen,
		onMenu
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "content",
		className: "pb-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reel, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "wrap py-14 md:py-20",
				"aria-label": "Selected figures",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
					className: "grid gap-8 md:grid-cols-2",
					children: proof.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-t border-line pt-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "display-sm",
							children: item.figure
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
							className: "mt-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: item.title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-muted",
								children: item.detail
							})]
						})]
					}, item.figure))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Work, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bench, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Studio, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Practice, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
		]
	})] });
}
var SplitComponent = Portfolio;
//#endregion
export { SplitComponent as component };
