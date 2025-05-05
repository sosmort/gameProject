import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "./hooks/useGames";
import GameCards from "./GameCards";
import GameCardSkeleton from "./GameCardSkeleton";
import { Genre } from "./hooks/useGenres";

interface Props {
  selectedGenres: Genre | null;
}
const GameGrid = ({ selectedGenres }: Props) => {
  const { data, errors, isLoading } = useGames(selectedGenres);
  const skeletons = Array.from({ length: 15 });
  return (
    <>
      {errors && <Text>{errors}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={5}
        padding={5}
      >
        {isLoading &&
          skeletons.map((_, index) => <GameCardSkeleton key={index} />)}
        {data.map((game) => (
          <GameCards key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
