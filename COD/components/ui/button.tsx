import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: "default" | "outline";
  size?: "default" | "sm" | "lg";
}

export const Button = React.forwardRef<
  HTMLButtonElement,
  ButtonProps
>(function Button(
  {
    className,
    variant = "default",
    size = "default",
    asChild = false,
    ...props
  },
  ref
) {
  const Comp = asChild ? Slot : "button";

  const base =
    "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50";

  const variants = {
    default: "bg-indigo-600 text-white hover:bg-indigo-500",
    outline:
      "border border-slate-600 text-white bg-transparent hover:bg-slate-800/60",
  };

  const sizes = {
    default: "h-10 px-4 py-2",
    sm: "h-9 px-3",
    lg: "h-12 px-6",
  };

  return (
    <Comp
      ref={ref}
      className={clsx(base, variants[variant], sizes[size], className)}
      {...props}
    />
  );
});
