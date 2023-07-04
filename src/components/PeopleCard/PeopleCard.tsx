import { useQuery } from "@tanstack/react-query";
import { IPeople, IPlanet } from "swapi-ts";
import mapMarkerAltImg from "../../assets/icons/map-marker-alt.svg";
import userCircleImg from "../../assets/icons/user-circle.svg";
import Icon from "../Icon/Icon";
import Skeleton from "../Skeleton/Skeleton";

export type CharacterCardProps = {
  people?: IPeople;
  isLoading?: boolean;
};

const PeopleCard = ({
  people = {} as IPeople,
  isLoading,
}: CharacterCardProps) => {
  const planetQuery = useQuery<IPlanet, Error>({
    queryKey: ["planet", people.homeworld],
    queryFn: () => fetch(people.homeworld as string).then((res) => res.json()),
    enabled: people.homeworld !== undefined,
  });

  return (
    <div className="min-h-[204px] bg-[#F5F5F5] px-4 py-4 rounded flex flex-col gap-3 items-center shadow-lg shadow-black/25">
      <Skeleton
        when={isLoading}
        fallback={<Icon src={userCircleImg} size="83px" />}
        className="rounded-full max-w-[84px] h-[84px]"
      />

      <Skeleton
        when={isLoading}
        fallback={
          <div className="flex flex-col items-center w-full font-ubuntu font-normal text-[#0CA1DF] text-xl">
            {people.name}
          </div>
        }
        className="rounded-sm max-w-[129px] h-[32px]"
      />

      <Skeleton
        when={isLoading || planetQuery.isLoading}
        fallback={
          <div className="flex flex-col gap-0 items-center justify-center">
            <Icon src={mapMarkerAltImg} size="14px" />
            <span className="text-sm font-ubuntu text-[#666] overflow-hidden w-20 flex flex-col items-center">
              {planetQuery.data?.name}
            </span>
          </div>
        }
        className="rounded-sm max-w-[129px] h-[23px]"
      />
    </div>
  );
};

export default PeopleCard;
