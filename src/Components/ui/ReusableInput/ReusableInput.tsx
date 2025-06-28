import type { InputHTMLAttributes } from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface IProps extends InputHTMLAttributes<HTMLInputElement> {}

const ReusableInput = ({ ...rest }: IProps) => {
  return (
    <input
      className="w-full border rounded-md p-2 border-gray-300 focus:border-indigo-500 focus:outline-none
       focus:ring-1 focus:ring-indigo-600 shadow-md
      "
      {...rest}
    />
  );
};

export default ReusableInput;
