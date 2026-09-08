import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

interface SectionProps extends ComponentPropsWithoutRef<"section"> {
  children: ReactNode;
  as?: ElementType;
}

export function Section({ children, as: Component = "section", className = "", ...props }: SectionProps) {
  const classes = ["section", className].filter(Boolean).join(" ");

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
}
