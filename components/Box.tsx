
import { FC } from "react";
import { twMerge } from "tailwind-merge";

interface BoxProps {
  children: React.ReactNode;
  className?: string;
}

const Box: FC<BoxProps> = ({
  children,
  className
}) => {
  return ( 
    <div
      className={twMerge(`
        bg-neutral-900
        rounder-lg
        h-fit
        w-full
      `, className)}
      // ! twMerge is used only to merge tailwind classes
      // enable the Box component for reusability, and merge with additionally classnames
      // tailwind-merge overrides conflicting classes and keeps everything else untouched.
    >
      {children}
    </div>
  );
}

export default Box;