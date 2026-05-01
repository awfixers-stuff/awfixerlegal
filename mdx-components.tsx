import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    wrapper: ({ children }) => (
      <div className="prose prose-neutral dark:prose-invert mx-auto max-w-3xl px-4 py-12">
        {children}
      </div>
    ),
    ...components,
  };
}
