import { Card, CardBody, Image, Heading, HStack, Flex } from "@chakra-ui/react";
import { Game, boxStyle } from "./hooks/useGames";
import PlatformIcons from "./PlatformIcons";
import CriticScore from "./CriticScore";
import getCroppedUrlImage from "../services/image-url";
import nullImage from "../assets/no-image-placeholder.webp";
import Emojis from "./Emojis";
interface Props {
  game: Game;
}
const GameCards = ({ game }: Props) => {
  return (
    <Card style={boxStyle}>
      <Image
        src={
          getCroppedUrlImage(game.background_image || "")
            ? getCroppedUrlImage(game.background_image || "")
            : nullImage
        }
      />
      <CardBody as={Flex} flexDirection="column" justifyContent="space-between">
        <Heading fontSize="2xl">
          {game.name} <Emojis rating={game.rating_top} />{" "}
        </Heading>
        <HStack justifyContent="space-between">
          <PlatformIcons
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCards;
