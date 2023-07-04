import { forwardRef, InputHTMLAttributes } from "react";
import { inputDarkStyle, inputLightStyle, inputStyle } from "./style";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  isDark?: boolean;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, isDark, ...props }, ref) => {
    const themeStyle = isDark ? inputDarkStyle : inputLightStyle;

    return (
      <input
        {...props}
        ref={ref}
        className={`${inputStyle} ${themeStyle} ${className}`}
      />
    );
  }
);

export default Input;
