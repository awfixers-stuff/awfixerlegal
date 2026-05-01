"use client";

import Link from "next/link";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export default function Header() {
  const { isSignedIn } = useUser();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4">
        <Link
          href="/"
          className="font-medium text-foreground transition-colors hover:text-primary"
        >
          AWFixer Legal
        </Link>

        <div className="flex items-center gap-4">
          {isSignedIn ? (
            <UserButton />
          ) : (
            <SignInButton>
              <Button variant="outline" size="sm">
                Sign In
              </Button>
            </SignInButton>
          )}
        </div>
      </div>
    </header>
  );
}
