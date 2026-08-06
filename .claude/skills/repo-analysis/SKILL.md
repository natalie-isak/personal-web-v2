---
name: repo-analysis
description: >-
  Scan a codebase and produce a single self-contained HTML report containing a
  one-paragraph executive summary, an architecture diagram, and a "Needs
  Attention" section covering security issues, bugs, and design problems. Use
  this whenever the user asks to analyze, audit, review, assess, or "get a
  read on" a repo or codebase, wants a health check / overview / onboarding
  doc for a project, asks "what's wrong with this repo", or wants a shareable
  HTML report about a codebase — even if they don't say the word "skill" or
  "report" explicitly.
---

# Repo Analysis

Produce a single, self-contained HTML report that a non-author can open and
quickly understand: what this repo is, how it's put together, and what a
maintainer should worry about. The report has exactly three parts — an
executive summary, an architecture diagram, and a "Needs Attention" section.

The value of this report is that it's *honest and specific*. A generic
"this is a well-structured React app" is worthless. Cite real files, real
line numbers, and real risks. Someone should be able to act on every finding.

## Workflow

### 1. Scan the repo

Build a mental model before writing anything. Prioritize the files that reveal
structure and intent over reading everything:

- **Manifests & config**: `package.json`, `pyproject.toml`, `go.mod`,
  `Cargo.toml`, `pom.xml`, lockfiles, `Dockerfile`, `docker-compose.yml`,
  CI configs (`.github/workflows`), framework config (next.config, vite,
  webpack, tailwind, tsconfig). These tell you the stack, entry points,
  and how it builds and deploys.
- **README / docs**: for the intended purpose. Trust code over prose when
  they disagree.
- **Directory layout**: the top two or three levels. Identify the real
  modules/layers (routes, components, services, models, api, lib, jobs).
- **Entry points & data flow**: main/index files, server bootstrap, route
  definitions, and where external I/O happens (DB, network, filesystem,
  env vars, user input).

Use the search and file tools to sample representative files in each area
rather than reading the whole tree. For a large repo, depth on the important
paths beats shallow coverage of everything.

### 2. Write the executive summary (one paragraph)

One tight paragraph (~3–6 sentences) that answers: What is this project? Who
or what is it for? What's the core tech stack? What's the overall shape
(monolith, SPA, service, library, CLI…) and maturity? Write for a technical
reader who has never seen the repo. No bullet lists, no hedging filler.

### 3. Build the architecture diagram

Use a **Mermaid** diagram (the template renders it in-browser). Pick the
diagram type that fits:

- `graph LR` / `graph TD` (flowchart) — the usual choice: show the real
  components and how data/control flows between them (e.g. browser → Next.js
  pages → API routes → DB / external services).
- `sequenceDiagram` — when a key request/response flow is the point.
- `erDiagram` — when the repo is data-model-centric.

Aim for **the ~5–12 nodes that actually matter**. Group by responsibility,
label edges with what crosses them ("HTTP", "SQL query", "reads env"), and
show external systems (databases, third-party APIs, CDNs) as distinct nodes.
A diagram that just mirrors the folder names is a missed opportunity — show
how things *interact*, not just what exists.

Keep Mermaid node text short and quote any label containing special
characters, e.g. `A["API route (/api/x)"]`, to avoid parse errors.

### 4. Assess what needs attention

This is the part that earns trust. Actively hunt for problems — don't
pattern-match reassuringly. Read `references/audit-checklist.md` for the full
list of what to look for across three categories:

- **Security** — secrets in source, injection, auth/authz gaps, unsafe
  deserialization, vulnerable or unpinned dependencies, permissive CORS,
  missing input validation, exposed debug/admin surfaces.
- **Bugs / correctness** — unhandled errors and rejected promises, race
  conditions, off-by-one and null/undefined hazards, incorrect async usage,
  swallowed exceptions, resource leaks.
- **Design / maintainability** — tight coupling, duplication, dead code,
  missing tests, giant files/functions, unclear boundaries, config that
  should be centralized.

For **each finding** capture: a short title, a **severity** (Critical /
High / Medium / Low), the **location** (`path/to/file.ts:42`), a one-line
description of the risk, and a concrete **recommendation**. Order findings
by severity within the section. If a category genuinely has nothing notable,
say so briefly rather than inventing filler — but look hard first; most real
repos have something worth flagging.

Severity guidance: **Critical** = exploitable now or data-loss risk;
**High** = serious but conditional; **Medium** = should fix, limited blast
radius; **Low** = polish / hygiene.

### 5. Render the HTML report

Copy `assets/template.html` and fill in every `<!-- PLACEHOLDER -->`. The
template is fully self-contained (inline CSS, Mermaid loaded via CDN with a
graceful fallback that shows the diagram source if offline). Keep it a single
file so it's easy to share.

- Replace the title, generated-date, summary paragraph, Mermaid source, and
  the findings.
- Render findings as cards; set each card's severity class
  (`sev-critical`, `sev-high`, `sev-medium`, `sev-low`) so the color coding
  and badges work.
- Save it in the repo root (or where the user asked) as
  `repo-analysis.html` unless the user names something else. Tell the user
  the path, and mention they can open it directly in a browser.

Do not invent facts to fill the template. An accurate, shorter report beats a
padded one.

## Bundled resources

- `assets/template.html` — the self-contained report scaffold. Copy and fill.
- `references/audit-checklist.md` — concrete things to look for in the
  "Needs Attention" pass, per category. Read it before step 4.
