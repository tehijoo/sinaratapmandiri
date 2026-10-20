import type { DetailedHTMLProps, HTMLAttributes } from "react";

// <tehijoo-credit> adalah custom element dari skrip kredit Tehijoo Studio
// (dimuat di components/Footer.tsx). Deklarasi ini memberi tahu TypeScript
// atribut apa saja yang diterimanya.
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "tehijoo-credit": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
        variant?: "text" | "pill" | "stack" | "mini";
        theme?: "light" | "dark" | "auto";
        label?: string;
        href?: string;
        accent?: string;
        from?: string;
      };
    }
  }
}
