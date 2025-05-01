import { Card, CardBody, Image, Heading, HStack } from "@chakra-ui/react";
import { Game } from "./hooks/useGames";
import PlatformIcons from "./PlatformIcons";
import CriticScore from "./CriticScore";
import getCroppedUrlImage from "../services/image-url";
interface Props {
  game: Game;
}
const GameCards = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={getCroppedUrlImage(game.background_image || "")} />
      <CardBody>
        <Heading fontSize="2xl">{game.name} </Heading>
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
