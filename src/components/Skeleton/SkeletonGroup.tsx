import { Fragment, ReactElement, ReactNode } from "react";

export type SkeletonGroupProps = {
  data?: any;
  isLoading?: boolean;
  render: (ctx: {
    data: SkeletonGroupProps["data"];
    isLoading: SkeletonGroupProps["isLoading"];
  }) => ReactElement;
  fallback?: ReactNode;
  length: number;
};

const SkeletonGroup: (props: SkeletonGroupProps) => ReactElement[] = ({
  data,
  isLoading,
  render,
  fallback,
  length = 3,
}) => {
  if (isLoading) {
    return Array.from({ length }, (_, i) => (
      <Fragment key={i}>{render({ data: {}, isLoading })}</Fragment>
    ));
  }

  if (data.length) {
    return data.map((data, i: number) => (
      <Fragment key={i}>{render({ data, isLoading })}</Fragment>
    ));
  }

  return <>{fallback}</> || null;
};

export default SkeletonGroup;
