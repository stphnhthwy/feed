import React from "react"
import clsx from "clsx"

export type StackProps = {
    children: React.ReactNode
    className?: string
}

export function HStack({ children, className }: StackProps) {
    return <div className={clsx("flex flex-row items-center", className)}>{children}</div>
}

export function VStack({ children, className }: StackProps) {
    return <div className={clsx("flex flex-col", className)}>{children}</div>
}
