import React from "react"
import clsx from "clsx"

type CardProps = React.HTMLAttributes<HTMLDivElement>

export function Card({ className, ...props }: CardProps) {
  return <div className={clsx("rounded-2xl border border-slate-700 bg-slate-900/50", className)} {...props} />
}