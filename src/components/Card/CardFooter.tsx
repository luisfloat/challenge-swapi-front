import { FC, HTMLAttributes } from "react";

export type CardFooterProps = HTMLAttributes<HTMLDivElement> & {
  className?: string;
};

const CardFooter: FC<CardFooterProps> = ({ children, className, ...props }) => {
  return (
    <div {...props} className={`${className}`}>
      {children}
    </div>
  );
};

export default CardFooter;
