import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}
export const boxStyle = {
  width: "100%",
  borderRadius: 10,
  overflow: "hidden",
};

const useGames = () => useData<Game>("/games");

export default useGames;
