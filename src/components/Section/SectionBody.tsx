import { FC, ReactNode } from "react";

export type SectionBodyProps = {
  children?: ReactNode;
  className?: string;
};

const SectionBody: FC<SectionBodyProps> = ({ children, className }) => {
  return <div className={`w-full ${className}`}>{children}</div>;
};

export default SectionBody;
