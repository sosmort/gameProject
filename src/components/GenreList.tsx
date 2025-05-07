import {
  HStack,
  Image,
  List,
  ListItem,
  SkeletonText,
  SkeletonCircle,
  Button,
} from "@chakra-ui/react";
import useGenres, { Genre } from "./hooks/useGenres";
import getCroppedUrlImage from "../services/image-url";

interface Props {
  OnSetSelectedGenres: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
const GenreList = ({ selectedGenre, OnSetSelectedGenres }: Props) => {
  const { data, isLoading, errors } = useGenres();
  const skeletons = Array.from({ length: 15 });
  if (errors) return null;
  return (
    <List>
      {isLoading &&
        skeletons.map((_, index) => (
          <HStack key={index} spacing="4" align="center" paddingY="5px">
            <SkeletonCircle size="10" />
            <SkeletonText noOfLines={2} spacing="4" width="80%" />
          </HStack>
        ))}
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px "
              borderRadius={8}
              src={getCroppedUrlImage(genre.image_background)}
            />
            <Button
              fontWeight={genre.id === selectedGenre?.id ? "bold" : ""}
              variant={genre.id !== selectedGenre?.id ? "ghost" : undefined}
              onClick={() => OnSetSelectedGenres(genre)}
              fontSize="lg"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
