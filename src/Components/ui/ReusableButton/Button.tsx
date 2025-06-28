import type { ButtonHTMLAttributes, ReactNode } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  width?: "w-full" | "w-fit";
}

const Button = ({ children, className, width, ...rest }: IProps) => {
  return (
    <button
      className={`${className} ${width} cursor-pointer text-white px-2 py-1    rounded`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
