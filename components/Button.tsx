import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps 
        extends React.ButtonHTMLAttributes<HTMLButtonElement> {};
// to get all the attributes by this method
// Instead of getting the props one by one

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  className,
  children,
  disabled,
  type = "button", // by default
  ...props
}, ref) => {
  return (
    <button
      type={type}
      className={twMerge(`
        w-full
        rounded-full
        bg-green-500
        border
        border-transparent
        px-3
        py-3
        disabled:cursor-not-allowed
        disabled:opacity-50
        text-black
        font-bold
        hover:opacity-75
        transition
      `,
        className // pass in the classname so we can append any classes later if required
      )}
      disabled={disabled}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  )
});

Button.displayName = "Button";
export default Button;