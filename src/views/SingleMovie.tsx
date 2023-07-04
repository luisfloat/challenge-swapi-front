import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import type { IFilm, IPeople } from "swapi-ts";
import commentsImg from "../assets/icons/comments.svg";
import userFriendsImg from "../assets/icons/user-friends.svg";
import BackHomeLink from "../components/BackHomeLink/BackHomeLink";
import Carousel from "../components/Carousel/Carousel";
import CommentSection from "../components/CommentSection/CommentSection";
import Hero from "../components/Hero/Hero";
import PeopleCard from "../components/PeopleCard/PeopleCard";
import Section from "../components/Section/Section";
import Skeleton from "../components/Skeleton/Skeleton";
import SkeletonGroup from "../components/Skeleton/SkeletonGroup";
import { fetchResource } from "../utils/fetchResource";
import aNewHopeImg from "../assets/images/a-new-hope-cover.png";

const SingleMovie = () => {
  const { id } = useParams();

  const filmQuery = useQuery<IFilm, Error>({
    queryKey: ["films", id],
    queryFn: () => fetchResource("films/" + id),
  });
  const peopleQuery = useQuery<IPeople[], Error>({
    queryKey: ["characters"],
    queryFn: async () => {
      const characterPromises = filmQuery.data?.characters?.map(
        (characterUrl) => fetch(characterUrl).then((res) => res.json())
      );
      return Promise.all(characterPromises as Promise<IPeople>[]);
    },
    enabled: filmQuery.data !== undefined,
  });

  return (
    <>
      <header>
        <Hero
          isLoading={filmQuery.isLoading}
          bgImg={id === "1" ? aNewHopeImg : undefined}
        >
          <h1 className="text-center text-5xl font-normal font-ubuntu text-white">
            {filmQuery.data?.title}
          </h1>
        </Hero>
      </header>

      <main className="px-4 py-2 flex flex-col gap-6 w-full">
        <BackHomeLink />

        <Section.Root>
          <Section.Body className="w-full max-w-[652px] mx-auto">
            <p className="text-[#777777] text-base font-roboto font-normal">
              <Skeleton
                when={filmQuery.isLoading}
                fallback={filmQuery.data?.opening_crawl}
                className="rounded-sm max-w-[652px] h-[132px]"
              />
            </p>
          </Section.Body>
        </Section.Root>

        <Section.Root>
          <Section.Header icon={userFriendsImg} title="Characters" />

          <Section.Body>
            <Carousel itemsPerPage={4} showArrows={!peopleQuery.isLoading}>
              {SkeletonGroup({
                data: peopleQuery.data,
                isLoading: peopleQuery.isLoading,
                render: (ctx) => (
                  <PeopleCard people={ctx.data} isLoading={ctx.isLoading} />
                ),
                fallback: (
                  <div className="text-sm text-[#777777]">
                    No people found for this movie
                  </div>
                ),
                length: 4,
              })}
            </Carousel>
          </Section.Body>
        </Section.Root>

        <Section.Root>
          <Section.Header icon={commentsImg} title="Reviews" />

          <Section.Body>
            <CommentSection filmId={id as string} />
          </Section.Body>
        </Section.Root>
      </main>
    </>
  );
};

export default SingleMovie;
