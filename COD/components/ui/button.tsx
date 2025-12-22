import React from "react"
import clsx from "clsx"

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean
  variant?: "default" | "outline"
  size?: "default" | "sm" | "lg"
}

export function Button({ asChild, variant = "default", size = "default", className, children, ...props }: ButtonProps) {
  const base = "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
  const variants: Record<string, string> = {
    default: "bg-indigo-600 text-white hover:bg-indigo-500",
    outline: "border border-slate-600 text-white bg-transparent hover:bg-slate-800/60",
  }
  const sizes: Record<string, string> = {
    default: "h-10 px-4 py-2",
    sm: "h-9 px-3",
    lg: "h-12 px-6",
  }
  const classes = clsx(base, variants[variant], sizes[size], className)

 if (asChild && React.isValidElement(children)) {
  return React.cloneElement(
    children as React.ReactElement<any>,
    {
      className: clsx(
        (children as any).props?.className,
        classes
      ),
      ...props,
    }
  )
}


  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
