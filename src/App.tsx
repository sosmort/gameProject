import { Flex, Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./components/hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./components/hooks/useGames";
import SortSelector from "./components/SortSeletor";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string | null;
}

const App = () => {
  // const [selectedGenres, setSelectedGenres] = useState<Genre | null>(null);
  // const [selectPlatform, seteSelectPlatform] = useState<Platform | null>(null);
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"  `,
          lg: `"nav nav""aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>

        <GridItem
          area="aside"
          display={{ base: "none", lg: "block" }}
          paddingX={5}
        >
          <GenreList
            selectedGenre={gameQuery.genre}
            OnSetSelectedGenres={(genre) =>
              setGameQuery({ ...gameQuery, genre })
            }
          />
        </GridItem>
        <GridItem area="main">
          <Flex gap={3} paddingX={5}>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              OnselectedPlatrform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
            <SortSelector
              sortOrder={gameQuery.sortOrder ?? ""}
              OnselectedSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            />
          </Flex>

          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
