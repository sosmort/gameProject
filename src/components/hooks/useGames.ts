import useData from "./useData";
import { Genre } from "./useGenres";

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

const useGames = (selectedGenres: Genre | null) =>
  useData<Game>("/games", { params: { genres: selectedGenres?.id } }, [
    selectedGenres?.id,
  ]);

export default useGames;
