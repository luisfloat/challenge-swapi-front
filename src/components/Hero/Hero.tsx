import { ReactNode } from "react";
import cinemaImg from "../../assets/images/cinema.png";
import Skeleton from "../Skeleton/Skeleton";

export type HeroProps = {
  children: ReactNode;
  isLoading?: boolean;
  bgImg?: string;
};

const Hero = ({ children, isLoading, bgImg = cinemaImg }: HeroProps) => {
  return (
    <div className="bg-gray-800 w-full h-[226px]">
      <Skeleton
        when={isLoading}
        fallback={
          <div
            className="w-full bg-cover bg-center h-full px-4 py-12 flex flex-col items-center justify-center gap-5"
            style={{
              backgroundImage: `url(${bgImg})`,
            }}
          >
            {children}
          </div>
        }
        className="max-w-full h-full"
      />
    </div>
  );
};

export default Hero;
