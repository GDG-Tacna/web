import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-lg font-medium cursor-pointer',
          'transition-all duration-300 ease-out',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gdg-blue focus-visible:ring-offset-2',
          'disabled:pointer-events-none disabled:opacity-50',
          'transform active:scale-95',
          {
            'bg-gdg-blue text-white hover:bg-gdg-blue-dark shadow-sm hover:shadow-md hover:-translate-y-0.5':
              variant === 'primary',
            'bg-neutral-200 text-neutral-900 hover:bg-neutral-300 shadow-sm hover:shadow-md hover:-translate-y-0.5':
              variant === 'secondary',
            'border-2 border-gdg-blue text-gdg-blue hover:bg-gdg-blue hover:text-white shadow-sm hover:shadow-md hover:-translate-y-0.5':
              variant === 'outline',
            'hover:bg-neutral-100 hover:shadow-sm': variant === 'ghost',
            'px-3 py-1.5 text-sm': size === 'sm',
            'px-4 py-2 text-base': size === 'md',
            'px-6 py-3 text-lg': size === 'lg',
          },
          className
        )}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'
