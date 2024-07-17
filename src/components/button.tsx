import { ComponentProps, ReactNode } from "react";
import { tv, VariantProps } from 'tailwind-variants'

const buttonVariants = tv({
    base: 'rounded-lg px-5 font-medium flex items-center gap-2 justify-center',

    variants: {
        variant: {
            primary: 'bg-primary text-neutral-50 py-3 px-7',
            secundary: 'bg-transparent border-solid border-1 bg-neutral-800 text-neutral-50 py-3 px-7'
        },
    },

    defaultVariants: {
      variant: 'primary',
    }
})

interface ButtonProps extends ComponentProps<'button'>, VariantProps<typeof buttonVariants> {
    children: ReactNode
}

export function Button({children, variant, ...props}: ButtonProps) {
  return (
    <button {...props} className={buttonVariants({variant})}>
      {children}
    </button>
  );
}