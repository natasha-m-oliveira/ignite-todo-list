import { ButtonHTMLAttributes, ReactNode } from "react";
import classNames from "classnames";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      className={classNames(
        "flex items-center gap-2 bg-blue-700 py-3 px-4 rounded-lg text-gray-100 leading-[140%] font-bold text-sm hover:bg-blue-500 transition-colors outline-none border-solid border-2 border-transparent",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
