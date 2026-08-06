# Audit Checklist — "Needs Attention" pass

Use this as a prompt for what to look for. It is not a form to fill out; skip
what doesn't apply and dig where the repo actually warrants it. Every finding
you report should point at a real file and line and carry a concrete fix.

## Security

- **Secrets in source**: API keys, tokens, passwords, private keys, connection
  strings committed to the repo or baked into client bundles. Check `.env`
  files that are tracked, config files, and anything shipped to the browser
  (in a Next/Vite app, only `NEXT_PUBLIC_*` / `VITE_*` vars should reach the
  client — flag secrets that leak into client code).
- **Injection**: SQL/NoSQL built via string concatenation, shell commands from
  user input (`exec`, `child_process`), `eval`, template injection, unsafe
  `dangerouslySetInnerHTML` / `innerHTML` with untrusted data (XSS).
- **AuthN / AuthZ**: routes or API handlers with no auth check, missing
  ownership checks (user A can access user B's data), trusting client-supplied
  role/ID fields, JWT verification skipped or secret hardcoded.
- **Input validation**: request bodies, query params, and path params used
  without validation; missing size/type limits on uploads.
- **Transport & headers**: missing HTTPS enforcement, overly permissive CORS
  (`Access-Control-Allow-Origin: *` on authenticated endpoints), missing
  security headers (CSP, HSTS) where relevant.
- **Dependencies**: known-vulnerable packages, unpinned/`latest` versions,
  abandoned libraries, or a lockfile out of sync with the manifest. Note if a
  quick `npm audit` / equivalent is warranted.
- **Exposed surfaces**: debug endpoints, source maps in production, verbose
  error responses that leak stack traces or internal paths, admin routes
  reachable without gating.

## Bugs / correctness

- **Error handling**: unhandled promise rejections, `async` functions whose
  errors are never caught, empty `catch {}` blocks that swallow failures,
  missing error states in UI data fetching.
- **Async / concurrency**: missing `await`, `forEach` with async callbacks,
  race conditions on shared state, unbounded parallelism.
- **Null / undefined**: property access on possibly-undefined values, array
  access without bounds checks, optional chaining that hides a real bug.
- **Logic**: off-by-one errors, inverted conditionals, incorrect equality
  (`==` vs `===`), fallthrough, timezone/date handling.
- **Resources**: unclosed files/connections/streams, listeners added but never
  removed, memory growth in long-lived processes.
- **State & effects** (frontend): stale closures, effects missing dependencies
  or with wrong dependency arrays, direct state mutation.

## Design / maintainability

- **Coupling & boundaries**: modules reaching across layers, business logic in
  UI components or route handlers, circular dependencies.
- **Duplication**: the same logic copy-pasted in several places (a signal to
  extract a helper).
- **Dead code**: unused exports, unreachable branches, commented-out blocks,
  files nothing imports.
- **Size**: functions or files doing too much (hundreds of lines, many
  responsibilities) — hard to test and change safely.
- **Testing**: no tests, or tests that don't cover the risky paths; no CI
  running them.
- **Configuration**: magic numbers and hardcoded URLs/paths that should be
  centralized or env-driven; inconsistent config across environments.
- **Types & contracts**: `any` used to paper over real type gaps, missing
  types at module boundaries, implicit contracts between components.

## How to prioritize

Rank by real-world impact, not by how easy it was to spot.

- **Critical** — exploitable right now, or can lose/corrupt data (leaked
  secret, auth bypass, injection on a live endpoint).
- **High** — serious but needs a condition to bite (missing authz on a
  low-traffic route, an unhandled error on a common path).
- **Medium** — should fix; contained blast radius (duplication, a swallowed
  error in a non-critical flow).
- **Low** — hygiene and polish (dead code, naming, minor type gaps).
