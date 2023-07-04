export type IconProps = {
  src: string;
  size?: string;
  className?: string;
};

const Icon = ({ src, size = "21px", className }: IconProps) => {
  return (
    <img
      src={src}
      className={`!w-[${size}] !h-[${size}] ${className}`}
      onDragStart={(e) => e.preventDefault()}
    />
  );
};

export default Icon;
