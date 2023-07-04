export const API_BASEURL = 'https://swapi.bry.com.br/api/';

export async function fetchResource<T>(resource: string): Promise<T> {
  return fetch(API_BASEURL + resource).then((res) => res.json());
}
