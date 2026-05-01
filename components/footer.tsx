import Link from "next/link"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const sections = [
  {
    title: "Main",
    links: [
      { label: "Data Storage Policy", href: "/legal/data-storage" },
      { label: "Ecosystem Security", href: "/legal/ecosystem-security" },
      { label: "Privacy Policy", href: "/legal/privacy" },
      { label: "Subprocessors", href: "/legal/subprocessors" },
    ],
  },
  {
    title: "Chat",
    links: [
      { label: "Data Storage Policy", href: "/legal/chat/data-storage" },
      { label: "Ecosystem Security", href: "/legal/chat/ecosystem-security" },
      { label: "Privacy Policy", href: "/legal/chat/privacy" },
      { label: "Subprocessors", href: "/legal/chat/subprocessors" },
    ],
  },
  {
    title: "Grip",
    links: [
      { label: "Data Storage Policy", href: "/legal/grip/data-storage" },
      { label: "Ecosystem Security", href: "/legal/grip/ecosystem-security" },
      { label: "Privacy Policy", href: "/legal/grip/privacy" },
      { label: "Subprocessors", href: "/legal/grip/subprocessors" },
    ],
  },
  {
    title: "Workspace",
    links: [
      { label: "Data Storage Policy", href: "/legal/workspace/data-storage" },
      { label: "Ecosystem Security", href: "/legal/workspace/ecosystem-security" },
      { label: "Privacy Policy", href: "/legal/workspace/privacy" },
      { label: "Subprocessors", href: "/legal/workspace/subprocessors" },
    ],
  },
  {
    title: "Account",
    links: [
      { label: "Data Storage Policy", href: "/legal/account/data-storage" },
      { label: "Ecosystem Security", href: "/legal/account/ecosystem-security" },
      { label: "Privacy Policy", href: "/legal/account/privacy" },
      { label: "Subprocessors", href: "/legal/account/subprocessors" },
    ],
  },
]

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
    >
      {label}
    </Link>
  )
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border mt-auto">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="hidden lg:grid lg:grid-cols-5 lg:gap-8">
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="mb-3 text-sm font-semibold">{section.title}</h3>
              <div className="flex flex-col gap-2">
                {section.links.map((link) => (
                  <FooterLink key={link.href} href={link.href} label={link.label} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="lg:hidden">
          <Accordion type="single" collapsible>
            {sections.map((section) => (
              <AccordionItem key={section.title} value={section.title}>
                <AccordionTrigger>{section.title}</AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-2">
                    {section.links.map((link) => (
                      <FooterLink key={link.href} href={link.href} label={link.label} />
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          &copy; AWFixer Enterprising Inc. 2025&ndash;{currentYear}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
