import { FC, HTMLAttributes } from "react";

export type CardHeaderProps = HTMLAttributes<HTMLDivElement> & {
  noBar?: boolean;
};

const CardHeader: FC<CardHeaderProps> = ({ children, noBar, ...props }) => {
  return (
    <div {...props} className="flex flex-col">
      {children}
      {!noBar && (
        <div className="w-full h-[6px] bg-gradient-to-br from-[#FF5A56] to-[#FF9A42]"></div>
      )}
    </div>
  );
};

export default CardHeader;
