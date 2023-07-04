import { ReactNode } from "react";

export type SectionRootProps = {
  children?: ReactNode;
};

const SectionRoot = ({ children }: SectionRootProps) => {
  return <section className="flex flex-col gap-4 w-full">{children}</section>;
};

export default SectionRoot;
