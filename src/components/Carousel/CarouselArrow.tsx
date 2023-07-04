import { FC, RefObject } from "react";
import { createPortal } from "react-dom";
import leftBtnImg from "../../assets/icons/left-btn.svg";
import rightBtnImg from "../../assets/icons/right-btn.svg";
import Icon from "../Icon/Icon";

export type CarouselArrowProps = {
  carouselRef: RefObject<HTMLElement>;
  direction: "left" | "right";
  onClick?: () => void;
};

const CarouselArrow: FC<CarouselArrowProps> = ({
  carouselRef,
  direction,
  onClick,
}) => {
  const arrowClassName =
    direction === "left" ? "left-[-10px]" : "right-[-10px]";
  const iconSrc = direction === "left" ? leftBtnImg : rightBtnImg;

  return (
    carouselRef.current &&
    createPortal(
      <button
        onClick={onClick}
        className={`absolute top-[50%] translate-y-[-50%] ${arrowClassName} bottom-0 z-10 hover:opacity-90`}
        type="button"
        aria-label={`${direction} slide / item`}
      >
        <Icon src={iconSrc} size="51px" className="!w-[51px] !h-[51px]" />
      </button>,
      carouselRef.current
    )
  );
};

export default CarouselArrow;
