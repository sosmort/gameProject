import { Box, Heading, Image, Flex, Stack, Text } from "@chakra-ui/react";
import useGameDetails from "./hooks/useGameDetails";
import { Link, useParams } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import GameDetailsSkelton from "./GameDetailsSkelton";

const GameDetailPage = () => {
  // const flexDirection = useBreakpointValue({
  //   base: "column", // for <1024px
  //   lg: "row", // for >=1024px
  // });
  const { id } = useParams();
  console.log("Route param id:", id); // check if you actually get the ID

  if (!id) return <Text>Game ID not found</Text>;

  const { dataDetails: GameDetails, isLoading, errors } = useGameDetails(id!);

  // if (isLoading) return <GameCardSkeleton />;
  if (errors) return <Text>Failed to load game data</Text>;
  if (!GameDetails) return <GameDetailsSkelton />;
  return (
    <>
      <Box p={5}>
        {isLoading && !GameDetails ? (
          <GameDetailsSkelton />
        ) : (
          <Flex
            direction="column"
            gap={8}
            p={4}
            maxW="1200px"
            mx="auto"
            align="flex-start"
          >
            <Box position="relative" flex="1" w="100%">
              <Link to="/">
                <Button
                  position="absolute"
                  top={4}
                  left={4}
                  zIndex={2}
                  leftIcon={<ArrowBackIcon />}
                  colorScheme="whiteAlpha"
                  bg="rgba(37,37,37,.8)"
                  _hover={{ bg: "rgba(37,37,37,1)" }}
                  color="white"
                  size="sm"
                  p={5}
                  shadow="md"
                  backdropFilter="blur(6px)"
                >
                  Return
                </Button>
              </Link>
              <Image
                src={GameDetails.background_image}
                alt={GameDetails.name}
                objectFit="cover"
                borderRadius="lg"
                w="100%"
                maxH="600px"
              />
            </Box>{" "}
          </Flex>
        )}

        {/* Text */}
        <Stack flex="1" spacing={4} w="100%" maxW="1200px" mx="auto" my="3rem">
          <Heading size="2xl">{GameDetails.name}</Heading>
          <Box
            fontSize="md"
            lineHeight={2}
            dangerouslySetInnerHTML={{ __html: GameDetails.description }}
          ></Box>
        </Stack>
      </Box>
    </>
  );
};

export default GameDetailPage;
