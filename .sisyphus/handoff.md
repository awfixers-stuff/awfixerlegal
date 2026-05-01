HANDOFF CONTEXT
===============

USER REQUESTS (AS-IS)
---------------------
- this site needs to have the same look and feel of the nextjs and vercel docs. it is a legal website with need for a set of legal pages like privacy, terms of use, terms of access, acceptable usage policy, subprocessors, data processing agreement, etc. it needs a home page with AWFixer Legal on it and all of the links in a detailed footer with only AWFixer Legal in the upper left (click to home) and the clerk account buttons in the upper right. the legal pages need to use MDX

GOAL
----
Complete the interview and generate a work plan for building the AWFixer Legal website with Next.js/Vercel docs styling, MDX-based legal pages, Clerk auth header, and detailed footer.

WORK COMPLETED
--------------
- I explored the codebase and found a solid foundation already in place
- I identified that Clerk auth and dark mode are fully configured
- I discovered MDX package is installed but NOT configured in next.config.mjs
- I found only the Button shadcn component exists - more will be needed
- I created a draft file at .sisyphus/drafts/awfixer-legal.md to track decisions
- I asked clarifying questions about Clerk features, legal text content, home page scope, search functionality, and complete legal page list
- The user has not yet answered the clarifying questions

CURRENT STATE
-------------
- The codebase has uncommitted changes: modified app/layout.tsx, bun.lock, package.json; deleted .prettierignore, .prettierrc, README.md, eslint.config.mjs; added app/sign-in/, app/sign-up/, proxy.ts, .sisyphus/
- The project is a Next.js 16.1.7 App Router project with Tailwind CSS v4, shadcn/ui, Clerk auth, and next-themes dark mode
- MDX support is installed but not wired up
- Only placeholder content exists on the home page
- We are in the interview/planning phase - no work plan has been generated yet

PENDING TASKS
-------------
- Awaiting answers to clarifying questions from the user
- Need to complete the interview and run clearance check
- Need to consult Metis for gap analysis
- Need to generate work plan to .sisyphus/plans/awfixer-legal.md
- Need to get user confirmation before proceeding to execution

KEY FILES
---------
- package.json - Dependencies and scripts
- app/layout.tsx - Root layout with ClerkProvider and ThemeProvider
- app/page.tsx - Current placeholder home page
- app/globals.css - Tailwind v4 + shadcn CSS variables with light/dark themes
- next.config.mjs - Currently empty, needs MDX plugin configuration
- components/theme-provider.tsx - next-themes dark mode with d key hotkey
- components/ui/button.tsx - Only shadcn component currently installed
- proxy.ts - Clerk middleware for route protection
- .sisyphus/drafts/awfixer-legal.md - Draft tracking requirements and decisions

IMPORTANT DECISIONS
-------------------
- The project uses Bun 1.3.11 strictly as package manager and runtime
- Tailwind CSS v4 is in use (no tailwind.config.js needed, uses @theme inline in globals.css)
- shadcn style is radix-nova with RSC enabled
- Clerk auth routes are /sign-in and /sign-up with fallback redirect to /
- Path alias @/* maps to ./* (project root)
- No existing test files or test infrastructure beyond vitest being installed

EXPLICIT CONSTRAINTS
--------------------
- Site must match Next.js and Vercel docs look and feel
- Legal pages must use MDX
- Header must have AWFixer Legal upper left (clickable to home) and Clerk auth buttons upper right
- Footer must contain all legal page links
- None

CONTEXT FOR CONTINUATION
------------------------
- The next session should pick up by asking the clarifying questions if not yet answered, or proceed with planning if they have been
- The key technical gap is configuring @next/mdx in next.config.mjs
- The site needs a shared layout with header and footer
- Need to decide whether to add more shadcn components (NavigationMenu, Sheet, etc.) or build custom navigation
- Consider whether the legal pages should be under a route group like (legal) or directly under app/
- The user may have answered the questions in a separate session - check for those answers first
