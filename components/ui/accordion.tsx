import * as React from "react"
import { Accordion } from "radix-ui"

import { cn } from "@/lib/utils"

function AccordionRoot({
  className,
  ...props
}: React.ComponentProps<typeof Accordion.Root>) {
  return (
    <Accordion.Root
      data-slot="accordion"
      className={cn("", className)}
      {...props}
    />
  )
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof Accordion.Item>) {
  return (
    <Accordion.Item
      data-slot="accordion-item"
      className={cn("border-b", className)}
      {...props}
    />
  )
}

function AccordionHeader({
  className,
  ...props
}: React.ComponentProps<typeof Accordion.Header>) {
  return (
    <Accordion.Header
      data-slot="accordion-header"
      className={cn("flex", className)}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof Accordion.Trigger>) {
  return (
    <Accordion.Header data-slot="accordion-header" className="flex">
      <Accordion.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon className="size-4 shrink-0 text-muted-foreground transition-transform duration-200" />
      </Accordion.Trigger>
    </Accordion.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof Accordion.Content>) {
  return (
    <Accordion.Content
      data-slot="accordion-content"
      className={cn(
        "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
        className
      )}
      {...props}
    >
      <div className="pb-4 pt-0">{children}</div>
    </Accordion.Content>
  )
}

function ChevronDownIcon({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

export {
  AccordionRoot as Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionContent,
  ChevronDownIcon,
}
