import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import { boxStyle } from "./hooks/useGames";

const GameCardSkeleton = () => {
  return (
    <>
      <Card style={boxStyle}>
        <Skeleton height="200px" />
        <CardBody>
          <SkeletonText />
        </CardBody>
      </Card>
    </>
  );
};

export default GameCardSkeleton;
