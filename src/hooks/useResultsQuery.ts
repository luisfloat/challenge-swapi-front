import { useQuery } from "@tanstack/react-query";
import { fetchResource } from "../utils/fetchResource";

export type UseResultsQueryOptions = {
  key: string;
  searchQuery: string;
  isSearching: boolean;
};

export const useResultsQuery = <T extends { results: Array<any> }>({
  key,
  searchQuery,
  isSearching,
}: UseResultsQueryOptions) => {
  return useQuery<T["results"], Error>({
    queryKey: isSearching ? [key, { search: searchQuery }] : [key],
    queryFn: () =>
      fetchResource<T>(
        isSearching ? `${key}/?search=${encodeURI(searchQuery)}` : `${key}/`
      ).then((res) => res.results),
  });
};
