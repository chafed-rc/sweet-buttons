import { cn } from "../../utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import React, { ComponentProps, forwardRef } from "react";

const buttonStyles = cva(
  [
    "rounded-md",
    "font-semibold",
    "focus:outline-none",
    "disabled:cursor-not-allowed",
    "disabled:opacity-50",
    "transition-colors ease-in-out duration-200",
    "active:scale-95 transition duration-200",
  ],
  {
    variants: {
      variant: {
        solid: "",
        ghost: "bg-transparent",
        outline: "border-2 border-solid",
        shadow: "shadow-xl",
        link: "bg-transparent",
        soft: ""
      },
      colorscheme: {
        primary: "text-white",
        error: "text-white",
        warning:  'text-#333',
        confirm: 'text-white',
        violet: "text-white",
      },
      size: {
        sm: "px-2 py-1 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg"
      },
      shape: {
        none: "rounded-none",
        pill: "rounded-full",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
      },
    },
    defaultVariants: {
      variant: "solid",
      colorscheme: "primary",
      size: "md",
      shape: 'md'
    },
    compoundVariants: [
      {
        variant: "solid",
        colorscheme: "primary",
        className: "bg-blue-500 hover:bg-blue-600"
      },
      {
        variant: "solid",
        colorscheme: "warning",
        className: "bg-yellow-400 hover:bg-yellow-500"
      },
      {
        variant: "solid",
        colorscheme: "error",
        className: "bg-error-500 hover:bg-error-600"
      },
      {
        variant: "solid",
        colorscheme: "confirm",
        className: "bg-confirm-500 hover:bg-confirm-600"
      },
      {
        variant: "solid",
        colorscheme: "violet",
        className: "bg-violet-500 hover:bg-violet-600"
      },
      {
        variant: "ghost",
        colorscheme: "primary",
        className: "text-primary-500 hover:bg-primary-200"
      },
      {
        variant: "ghost",
        colorscheme: "error",
        className: "text-error-500 hover:bg-error-200"
      },
      {
        variant: "ghost",
        colorscheme: "warning",
        className: "text-warning-500 hover:bg-warning-200"
      },
      {
        variant: "ghost",
        colorscheme: "confirm",
        className: "text-confirm-500 hover:bg-confirm-200"
      },
      {
        variant: "ghost",
        colorscheme: "violet",
        className: "text-violet-500 hover:bg-violet-200"
      },
      {
        variant: "outline",
        colorscheme: "primary",
        className: "text-primary-500 border-primary-500 hover:bg-primary-200"
      },
      {
        variant: "outline",
        colorscheme: "error",
        className: "text-error-500 border-error-500 hover:bg-error-200"
      },
      {
        variant: "outline",
        colorscheme: "warning",
        className: "text-warning-500 border-warning-500 hover:bg-warning-200"
      },
      {
        variant: "outline",
        colorscheme: "confirm",
        className: "text-confirm-500 border-confirm-500 hover:bg-confirm-200"
      },
      {
        variant: "outline",
        colorscheme: "violet",
        className: "text-violet-500 border-violet-500 hover:bg-violet-200"
      },
      {
        variant: "shadow",
        colorscheme: "primary",
        className: " bg-primary-500 hover:bg-primary-600"
      },
      {
        variant: "shadow",
        colorscheme: "error",
        className: " bg-error-500 hover:bg-error-600"
      },
      {
        variant: "shadow",
        colorscheme: "warning",
        className: " bg-warning-500 hover:bg-warning-600"
      },
      {
        variant: "shadow",
        colorscheme: "confirm",
        className: " bg-confirm-500 hover:bg-confirm-600"
      },
      {
        variant: "shadow",
        colorscheme: "violet",
        className: " bg-violet-500 hover:bg-violet-600"
      },
      {
        variant: "link",
        colorscheme: "primary",
        className: "text-primary-500 hover:underline"
      },
      {
        variant: "link",
        colorscheme: "error",
        className: "text-error-500 hover:underline"
      },
      {
        variant: "link",
        colorscheme: "warning",
        className: "text-warning-500 hover:underline"
      },
      {
        variant: "link",
        colorscheme: "confirm",
        className: "text-confirm-500 hover:underline"
      },
      {
        variant: "link",
        colorscheme: "violet",
        className: "text-violet-500 hover:underline"
      },
      {
        variant: "soft",
        colorscheme: "primary",
        className: " text-primary-500 bg-primary-200 hover:opacity-80"
      },
      {
        variant: "soft",
        colorscheme: "error",
        className: "text-error-500 bg-error-200 hover:opacity-80"
      },
      {
        variant: "soft",
        colorscheme: "warning",
        className: "text-warning-500 bg-warning-200 hover:opacity-80"
      },
      {
        variant: "soft",
        colorscheme: "confirm",
        className: "text-confirm-500 bg-confirm-200 hover:opacity-80"
      },
      {
        variant: "soft",
        colorscheme: "violet",
        className: "text-violet-500 bg-violet-200 hover:opacity-80"
      },
    ]
  },
)


type ButtonProps = ComponentProps<"button"> & VariantProps<typeof buttonStyles> & {
  _isDisabled?: boolean;
  ariaLabel?: string;
}

 const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ ariaLabel, shape, size, variant, colorscheme, className, onClick, _isDisabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonStyles({ shape, size, variant, colorscheme, className }))}
        onClick={onClick}
        disabled={_isDisabled}
        aria-label={ariaLabel}
        {...props}
      />
    );
  }
);

export default Button;
