import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./components/hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";

const App = () => {
  const [selectedGenres, setSelectedGenres] = useState<Genre | null>(null);
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
            selectedGenre={selectedGenres}
            OnSetSelectedGenres={(genre) => setSelectedGenres(genre)}
          />
        </GridItem>
        <GridItem area="main">
          <PlatformSelector />
          <GameGrid selectedGenres={selectedGenres} />
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
