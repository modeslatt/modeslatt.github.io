import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { Link, type LinkProps } from 'react-router-dom'

const baseClasses =
  'inline-flex items-center gap-2 border px-4 py-2 text-sm transition-colors focus-visible:outline-1 focus-visible:outline-term-green'

const variantClasses = {
  primary: 'border-term-green text-term-green hover:bg-term-green hover:text-term-bg',
  ghost: 'border-term-border text-term-gray hover:border-term-border-strong hover:text-term-white',
}

type Variant = keyof typeof variantClasses

interface LinkButtonProps extends LinkProps {
  variant?: Variant
  children: ReactNode
}

export function LinkButton({ variant = 'ghost', children, className = '', ...props }: LinkButtonProps) {
  return (
    <Link className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </Link>
  )
}

interface AnchorButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant
  children: ReactNode
}

export function AnchorButton({ variant = 'ghost', children, className = '', ...props }: AnchorButtonProps) {
  return (
    <a className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </a>
  )
}
