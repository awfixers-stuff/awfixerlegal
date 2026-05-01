# Work Plan: AWFixer Legal Website

## Architecture

### Route Structure
```
app/
  layout.tsx                    # Root: ClerkProvider, ThemeProvider, fonts
  globals.css                   # Already configured (Tailwind v4, shadcn, dark mode)
  (main)/                       # Route group — gets shared header + footer
    layout.tsx                  # Header (AWFixer Legal + Clerk buttons) + Footer
    page.tsx                    # Home page: "AWFixer Legal" branding
    legal/
      data-storage/
        page.mdx                # Main Data Storage Policy
      ecosystem-security/
        page.mdx                # Main Ecosystem Security
      privacy/
        page.mdx                # Main Privacy Policy
      subprocessors/
        page.mdx                # Main Subprocessors
      chat/                     # Service-specific copies
        data-storage/page.mdx
        ecosystem-security/page.mdx
        privacy/page.mdx
        subprocessors/page.mdx
      grip/                     # Service-specific copies
        data-storage/page.mdx
        ecosystem-security/page.mdx
        privacy/page.mdx
        subprocessors/page.mdx
      workspace/                # Service-specific copies
        data-storage/page.mdx
        ecosystem-security/page.mdx
        privacy/page.mdx
        subprocessors/page.mdx
      account/                  # Service-specific copies
        data-storage/page.mdx
        ecosystem-security/page.mdx
        privacy/page.mdx
        subprocessors/page.mdx
  sign-in/[[...sign-in]]/       # Clerk auth — no header/footer
  sign-up/[[...sign-up]]/       # Clerk auth — no header/footer

Total: 20 MDX pages (4 main + 16 service-specific)
```

### Component Tree
```
RootLayout
└── ClerkProvider
    └── ThemeProvider
        ├── (main)/layout
        │   ├── Header
        │   │   ├── "AWFixer Legal" link (→ /)
        │   │   └── Clerk: SignedIn → UserButton | SignedOut → SignInButton
        │   ├── {children} (page content)
        │   └── Footer
        │       ├── Desktop: 5-column grid (Main, Chat, Grip, Workspace, Account)
        │       │   └── Each column: section title + links to 4 policy pages
        │       ├── Mobile: Accordion (5 sections, collapsed by default)
        │       └── Copyright: "AWFixer Enterprising Inc. 2025-Present. All rights reserved."
        └── SignIn/SignUp pages (no header/footer)
```

### Footer Link Map
| Section | Links |
|---------|-------|
| Main | /legal/data-storage, /legal/ecosystem-security, /legal/privacy, /legal/subprocessors |
| Chat | /legal/chat/data-storage, /legal/chat/ecosystem-security, /legal/chat/privacy, /legal/chat/subprocessors |
| Grip | /legal/grip/data-storage, /legal/grip/ecosystem-security, /legal/grip/privacy, /legal/grip/subprocessors |
| Workspace | /legal/workspace/data-storage, /legal/workspace/ecosystem-security, /legal/workspace/privacy, /legal/workspace/subprocessors |
| Account | /legal/account/data-storage, /legal/account/ecosystem-security, /legal/account/privacy, /legal/account/subprocessors |

---

## Implementation Steps

### Step 1: Configure MDX
- Update `next.config.mjs` with `@next/mdx` plugin and `mdxRs: true`
- **Verification**: `bun run build` succeeds, MDX files render as pages

### Step 2: Restructure Routes
- Create `app/(main)/` route group directory
- Move `app/page.tsx` → `app/(main)/page.tsx`, update to show "AWFixer Legal" branding
- Move current `app/layout.tsx` → stays as root layout (unchanged except for route group awareness)
- **Verification**: Home page still loads, auth pages still work

### Step 3: Install shadcn Accordion
- Add `@radix-ui/react-accordion` dependency
- Create `components/ui/accordion.tsx` (shadcn accordion component)
- **Verification**: Component imports cleanly

### Step 4: Build Header Component
- Create `components/header.tsx`
  - Left: "AWFixer Legal" as Next.js `<Link href="/">`
  - Right: `<SignedOut><SignInButton /></SignedOut>` + `<SignedIn><UserButton /></SignedIn>`
- Use in `app/(main)/layout.tsx`
- **Verification**: Header visible on home page, auth buttons work, clicking logo goes home

### Step 5: Build Footer Component
- Create `components/footer.tsx`
  - Data structure: array of sections, each with title + links
  - Desktop: 5-column grid (responsive, hides below `lg`)
  - Mobile: Accordion with 5 items (visible below `lg`)
  - Bottom: copyright line with current year
- **Verification**: Footer renders, accordion works on mobile, all links resolve correctly

### Step 6: Create MDX Legal Pages
- Create all 20 `.mdx` files in the `app/(main)/legal/` tree
- Each page: title + placeholder paragraph + "Last updated: [date]" footer
- Service-specific pages include a note: "This page describes how [service] specifically handles..."
- **Verification**: All 20 routes render at correct URLs

### Step 7: Final Verification
- `bun run build` passes with no errors
- All routes accessible (home, all 20 legal pages, sign-in, sign-up)
- Dark mode toggle works on all pages
- Clerk auth flows work (sign in → redirect home, protected routes redirect to sign-in)
- Footer accordion collapses/expands on mobile viewport
- Copyright displays correctly

---

## Dependencies to Add
- `@radix-ui/react-accordion` (for shadcn Accordion component)

## Files to Modify
- `next.config.mjs` — add MDX plugin
- `app/layout.tsx` — minor updates for route group

## Files to Create
- `app/(main)/layout.tsx` — shared layout with header + footer
- `app/(main)/page.tsx` — home page
- `components/header.tsx` — header component
- `components/footer.tsx` — footer component
- `components/ui/accordion.tsx` — shadcn accordion
- 20 `.mdx` files in `app/(main)/legal/`

## Files to Delete
- `app/page.tsx` (moved to route group)
