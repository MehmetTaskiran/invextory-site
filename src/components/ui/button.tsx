import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary";

export function Button({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
}) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-medium transition-all",
        variant === "primary" &&
          "bg-white text-black hover:bg-neutral-200",
        variant === "secondary" &&
          "border border-neutral-700 text-white hover:bg-neutral-800",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}