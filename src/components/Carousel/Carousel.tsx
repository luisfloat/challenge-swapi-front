import { FC, ReactChild, useRef } from "react";
import CarouselPrimitive, { CarouselInternalState } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useMedia } from "react-use";
import CarouselArrow from "./CarouselArrow";

export type CarouselProps = {
  children?: ReactChild[];
  itemsPerPage: number;
  showArrows?: boolean;
  infinite?: boolean;
  pageLoadedAmount?: number;
  itemsPerFetch?: number;
  onEnd?: () => void;
};

const Carousel: FC<CarouselProps> = ({
  children,
  itemsPerPage = 1,
  showArrows,
  infinite = true,
  onEnd,
  pageLoadedAmount = 0,
  itemsPerFetch = 10,
}) => {
  const carouselRef = useRef(null);

  type ArrowProps = { onClick?: () => void };
  const LeftArrow: FC<ArrowProps> = ({ onClick }) => (
    <CarouselArrow
      carouselRef={carouselRef}
      direction="left"
      onClick={onClick}
    />
  );
  const RightArrow: FC<ArrowProps> = ({ onClick }) => (
    <CarouselArrow
      carouselRef={carouselRef}
      direction="right"
      onClick={onClick}
    />
  );

  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: itemsPerPage,
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464,
      },
      items: 2,
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0,
      },
      items: 1,
      partialVisibilityGutter: 30,
    },
  };
  const isWide = useMedia("(min-width: 1024px)");

  const handleChange = (_, state: CarouselInternalState) => {
    const lastItemOnPage = itemsPerFetch * pageLoadedAmount - state.slidesToShow + 1;

    if (state.currentSlide === lastItemOnPage) {
      onEnd?.();
    }
  };

  return (
    <div ref={carouselRef} className="relative">
      <CarouselPrimitive
        className="-mx-4 !overflow-visible"
        itemClass="px-4"
        arrows={showArrows}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        responsive={responsive}
        infinite={infinite}
        swipeable={showArrows}
        draggable={showArrows}
        customLeftArrow={<LeftArrow />}
        customRightArrow={<RightArrow />}
        partialVisible={!isWide}
        afterChange={handleChange}
        renderButtonGroupOutside={false}
      >
        {children}
      </CarouselPrimitive>
    </div>
  );
};

export default Carousel;
