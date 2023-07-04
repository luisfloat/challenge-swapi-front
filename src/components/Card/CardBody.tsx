import { FC, HTMLAttributes } from "react";

export type CardBodyProps = HTMLAttributes<HTMLDivElement> & {
  className?: string;
};

const CardBody: FC<CardBodyProps> = ({ children, className, ...props }) => {
  return (
    <div {...props} className={`p-4 !h-full !flex flex-col gap-2 ${className}`}>
      {children}
    </div>
  );
};

export default CardBody;
