import { SimpleGrid, Text, Box } from "@chakra-ui/react";
import useGames, { Platform } from "./hooks/useGames";
import GameCards from "./GameCards";
import GameCardSkeleton from "./GameCardSkeleton";
// import { Genre } from "./hooks/useGenres";
import EmptyState from "./EmptyState";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
  // selectedGenres: Genre | null;
  // selectPlatform: Platform | null;
}
const GameGrid = ({ gameQuery }: Props) => {
  const { data, errors, isLoading } = useGames(gameQuery);
  const skeletons = Array.from({ length: 15 });
  return (
    <>
      {errors && <Text>{errors}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={6}
        padding={5}
      >
        {isLoading ? (
          skeletons.map((_, index) => <GameCardSkeleton key={index} />)
        ) : data.length > 0 ? (
          data.map((game) => <GameCards key={game.id} game={game} />)
        ) : (
          <Box
            gridColumn="1 / -1"
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="200px"
            width="100%"
          >
            <EmptyState />
          </Box>
        )}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
