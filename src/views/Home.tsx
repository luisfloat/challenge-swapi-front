import { useInfiniteQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDebounce } from "react-use";
import type { IFilm, IPeople } from "swapi-ts";
import { shallow } from "zustand/shallow";
import searchImg from "../assets/icons/search.svg";
import starImg from "../assets/icons/star.svg";
import userFriendsImg from "../assets/icons/user-friends.svg";
import Carousel from "../components/Carousel/Carousel";
import Input from "../components/Form/Input";
import Hero from "../components/Hero/Hero";
import Icon from "../components/Icon/Icon";
import MovieCard from "../components/MovieCard/MovieCard";
import PeopleCard from "../components/PeopleCard/PeopleCard";
import Section from "../components/Section/Section";
import SkeletonGroup from "../components/Skeleton/SkeletonGroup";
import { useResultsQuery } from "../hooks/useResultsQuery";
import { useAppStore } from "../stores/appStore";
import { fetchResource } from "../utils/fetchResource";

const Home = () => {
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useAppStore(
    (state) => [state.searchQuery, state.setSearchQuery],
    shallow
  );
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState("");
  useDebounce(() => setDebouncedSearchQuery(searchQuery), 500, [searchQuery]);

  const isSearching = searchQuery.trim() !== "";

  const filmsResultsQuery = useResultsQuery({
    key: "films",
    searchQuery: debouncedSearchQuery,
    isSearching,
  });

  const peopleResultsQuery = useInfiniteQuery({
    queryKey: isSearching ? ["people", { search: searchQuery }] : ["people"],
    queryFn: ({ pageParam = "" }) =>
      fetchResource(
        isSearching
          ? `people/?search=${encodeURI(searchQuery)}`
          : `people/${pageParam}`
      ),
    getNextPageParam: (lastPage: { next: string }) => {
      if (lastPage.next) {
        const url = new URL(lastPage.next);
        return `?page=${url.searchParams.get("page")}`;
      }
      return undefined;
    },
  });

  const goBack = () => {
    setSearchQuery("");
  };

  const handleClickMovie = (film: IFilm) => {
    navigate("/film/" + film.url.split("/").filter(Boolean).pop());
  };

  const carouselItems = useMemo(() => {
    const carouselItems = (peopleResultsQuery.data?.pages?.reduce(
      (prev: Array<IFilm>, cur: any) => {
        return [...prev, ...cur.results];
      },
      []
    ) || []) as Array<IPeople | any>;

    if (carouselItems.length > 4) {
      carouselItems.push({ isLoading: true });
    }

    return carouselItems;
  }, [peopleResultsQuery.data?.pages]);

  return (
    <>
      <header>
        <Hero>
          <h1 className="text-center text-3xl md:text-5xl font-normal font-ubuntu text-transparent bg-clip-text bg-gradient-to-br from-[#FF5A56] to-[#FF9A42]">
            Star Wars movies
          </h1>

          <div className="relative w-full md:w-auto">
            <Input
              type="text"
              placeholder="Search movies or characters"
              className="w-full md:w-[514px]"
              isDark={true}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.currentTarget.value)}
            />
            <Icon
              src={searchImg}
              size="24px"
              className="absolute right-[1rem] bottom-[50%] translate-y-[50%]"
            />
          </div>
        </Hero>
      </header>

      <main className="px-4 py-8 flex flex-col gap-6 w-full">
        {isSearching && (
          <>
            <button
              className="w-fit font-roboto text-xs text-[#009CDA]"
              onClick={() => goBack()}
            >
              &lt;&lt; Back
            </button>

            <div>
              <h2 className="text-[#666666] text-xs font-normal h-[17px] mb-1">
                Search result
              </h2>
              <hr className="w-full border-[#CCCCCC]" />
            </div>
          </>
        )}

        <Section.Root>
          <Section.Header className="mb-2" icon={starImg} title="Movies" />

          <Section.Body>
            <Carousel
              itemsPerPage={3}
              showArrows={!filmsResultsQuery.isLoading}
              infinite={(filmsResultsQuery.data?.length || 0) > 1}
            >
              {SkeletonGroup({
                data: filmsResultsQuery.data,
                isLoading: filmsResultsQuery.isLoading,
                render: ({ data: film, isLoading }) => (
                  <MovieCard
                    film={film}
                    isLoading={isLoading}
                    onClick={() => handleClickMovie(film)}
                  />
                ),
                fallback: (
                  <div className="text-sm text-[#777777]">
                    No films found for "{debouncedSearchQuery}"
                  </div>
                ),
                length: 3,
              })}
            </Carousel>
          </Section.Body>
        </Section.Root>

        <Section.Root>
          <Section.Header
            className="mb-2"
            icon={userFriendsImg}
            title="Characters"
          />

          <Section.Body>
            <Carousel
              itemsPerPage={4}
              showArrows={!peopleResultsQuery.isLoading}
              infinite={false}
              pageLoadedAmount={peopleResultsQuery.data?.pages?.length}
              onEnd={() =>
                !peopleResultsQuery.isFetchingNextPage &&
                peopleResultsQuery.fetchNextPage()
              }
            >
              {SkeletonGroup({
                data: carouselItems,
                isLoading: peopleResultsQuery.isLoading,
                render: ({ data: people, isLoading }) => (
                  <PeopleCard
                    people={people}
                    isLoading={isLoading || people.isLoading}
                  />
                ),
                fallback: (
                  <div className="text-sm text-[#777777]">
                    No people found for "{debouncedSearchQuery}"
                  </div>
                ),
                length: 4,
              })}
            </Carousel>
          </Section.Body>
        </Section.Root>
      </main>
    </>
  );
};

export default Home;
