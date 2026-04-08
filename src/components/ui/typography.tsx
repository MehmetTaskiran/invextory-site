import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Heading({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h1
      className={cn(
        "text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl",
        className
      )}
    >
      {children}
    </h1>
  );
}

export function Subheading({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "mt-4 max-w-2xl text-lg text-neutral-400",
        className
      )}
    >
      {children}
    </p>
  );
}

export function Text({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("text-sm text-neutral-400", className)}>
      {children}
    </p>
  );
}