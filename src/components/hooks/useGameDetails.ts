// hooks/useGame.ts
import useData from "./useData";
// import { Game } from "./useGames";
import { GameDetails } from "../GameCards";
const useGameDetails = (id: number | string) =>
  useData<GameDetails>(`/games/${id}`);

export default useGameDetails;
