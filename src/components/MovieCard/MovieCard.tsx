import moment from "moment";
import { IFilm } from "swapi-ts";
import calendarImg from "../../assets/icons/calendar.svg";
import charDirectorImg from "../../assets/icons/char-director.svg";
import fileImageImg from "../../assets/icons/file-image.svg";
import Card from "../Card/Card";
import Icon from "../Icon/Icon";
import { truncateString } from "../../utils/truncateString";
import Skeleton from "../Skeleton/Skeleton";

export type MovieCardProps = {
  film?: IFilm;
  isLoading?: boolean;
  onClick?: () => void;
};

const MovieCard = ({
  film = {} as IFilm,
  isLoading,
  onClick,
}: MovieCardProps) => {
  return (
    <Card.Root
      onClick={onClick}
      className={
        isLoading
          ? "bg-[#F5F5F5]"
          : "cursor-pointer transition-all hover:bg-neutral-100 shadow-lg shadow-black/15"
      }
    >
      <Card.Header noBar={isLoading}>
        <Skeleton
          when={isLoading}
          fallback={
            <div
              className={`w-full h-[169px] bg-gradient-to-r to-[#0CA1DF77] from-[#FF840877] relative`}
            >
              <Icon
                src={fileImageImg}
                size="72px"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-50"
              />
            </div>
          }
          className="rounded-sm max-w-full h-[125px]"
        />
      </Card.Header>

      <Card.Body>
        <div className="relative h-full flex flex-col gap-1">
          <h1 className="text-[#009CDA] text-2xl">
            <Skeleton
              when={isLoading}
              fallback={film.title}
              className="rounded-sm max-w-[179px] h-[29px] md:max-w-[192px]"
            />
          </h1>

          <p className="font-normal font-roboto text-[#777777] text-xs">
            <Skeleton
              when={isLoading}
              fallback={truncateString(film.opening_crawl, 163)}
              className="rounded-sm max-w-[262px] h-[52px] md:max-w-[281px]"
            />
          </p>

          <div className="absolute w-full bottom-0 left-0 content-none">
            <Skeleton
              when={isLoading}
              fallback={
                <div className="flex flex-col flex-grow gap-1">
                  <div className="flex gap-2 items-center">
                    <Icon src={charDirectorImg} size="16px" />
                    <span className="font-ubuntu text-xs font-bold text-[#777777]">
                      {film.director}
                    </span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Icon src={calendarImg} size="16px" />
                    <span className="font-ubuntu text-xs font-bold text-[#777777]">
                      {moment(film.release_date).format("DD/MM/YYYY")}
                    </span>
                  </div>
                </div>
              }
              className="rounded-sm max-w-[122px] h-[48px] md:max-w-[131px]"
            />
          </div>
        </div>
      </Card.Body>
    </Card.Root>
  );
};

export default MovieCard;
