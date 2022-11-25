import { InputHTMLAttributes } from "react";
import classNames from "classnames";

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {}

export function InputText({ className, ...rest }: InputTextProps) {
  return (
    <input
      className={classNames(
        "bg-gray-500 py-3 px-4 rounded-lg placeholder:text-gray-300 text-gray-100 leading-[140%] outline-none border-solid border-2 border-gray-700 focus:border-purple-700",
        className
      )}
      {...rest}
    />
  );
}
