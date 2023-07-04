import { FC, ReactNode } from "react";

type SectionHeaderProps = {
  children?: ReactNode;
  className?: string;
  icon?: string;
  title?: string;
};

const SectionHeader: FC<SectionHeaderProps> = ({
  children,
  className,
  icon,
  title,
}) => {
  return (
    <div className={`flex gap-2 items-center ${className}`}>
      {children || (
        <>
          <img src={icon} className="w-[22px] h-[22px]" />
          <h2 className="text-xl text-[#666666]">{title}</h2>
        </>
      )}
    </div>
  );
};

export default SectionHeader;