import { HTMLAttributes, PropsWithChildren } from "react";

export type CardRootProps = HTMLAttributes<HTMLDivElement> & {
  className: string;
};

const CardRoot = ({
  children,
  className,
  ...props
}: PropsWithChildren<CardRootProps>) => {
  return (
    <div
      {...props}
      className={`!h-[401px] !flex flex-col gap-2 border-1 border-gray-50 rounded shadow-md ${className}`}
    >
      {children}
    </div>
  );
};

export default CardRoot;
