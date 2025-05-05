import {
  HStack,
  Image,
  List,
  ListItem,
  Text,
  SkeletonText,
  SkeletonCircle,
} from "@chakra-ui/react";
import useGenres from "./hooks/useGenres";
import getCroppedUrlImage from "../services/image-url";

const GenreList = () => {
  const { data, isLoading, errors } = useGenres();
  const skeletons = Array.from({ length: 15 });
  if (errors) return null;
  return (
    <List>
      {isLoading &&
        skeletons.map((_, index) => (
          <HStack spacing="4" align="center" paddingY="5px">
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
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
