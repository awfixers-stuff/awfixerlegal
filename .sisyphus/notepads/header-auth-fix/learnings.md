# Header Auth Fix - Learnings

## Clerk v7 API Differences
- `@clerk/nextjs` v7 (^7.2.7) does NOT export `SignedIn` or `SignedOut` components
- Available exports for auth state: `ClerkLoaded`, `ClerkLoading`, `Show`, `useUser`, `useAuth`
- To conditionally render based on auth state in a header, use `"use client"` + `useUser()` hook:
  ```tsx
  "use client";
  import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
  const { isSignedIn } = useUser();
  // {isSignedIn ? <UserButton /> : <SignInButton>... </SignInButton>}
  ```

## Server-side alternative
- Clerk v7 has a server `Show` component (async, in app-router/server/controlComponents.js)
- Supports `when="signed-out"` with `fallback` prop
- But wrapping client components (SignInButton, UserButton) in async server components may have edge cases
- Client-side `useUser` approach is simpler and more reliable for headers
