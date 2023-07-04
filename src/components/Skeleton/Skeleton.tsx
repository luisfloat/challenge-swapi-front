import { FC, ReactNode } from "react";
import "./style.css";

export type SkeletonProps = {
  when?: boolean;
  fallback?: ReactNode;
  className?: string;
};

const Skeleton: FC<SkeletonProps> = ({ when, fallback, className }) => {
  if (!when || when === undefined) {
    return <>{fallback}</> || null;
  }

  return <span className={`block skeleton w-full ${className}`} />;
};

export default Skeleton;
