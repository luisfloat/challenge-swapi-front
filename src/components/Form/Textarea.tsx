import { forwardRef, TextareaHTMLAttributes } from "react";
import { inputStyle } from "./style";

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (props, ref) => {
    return (
      <textarea
        ref={ref}
        {...props}
        className={`resize-none h-[121px] ${inputStyle}`}
      />
    );
  }
);

export default Textarea;
