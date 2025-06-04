import { Box, Flex, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameDetailsSkelton = () => {
  return (
    <Flex
      direction="column"
      gap={8}
      p={4}
      maxW="1200px"
      mx="auto"
      align="flex-start"
    >
      <Box w="100%">
        <Skeleton
          //   height={{ lg: "600px", md: "400px", sm: "250px" }}
          height={{ base: "250px", md: "400px", lg: "600px" }}
          borderRadius="lg"
        />
        <SkeletonText mt="4" noOfLines={3} spacing="4" skeletonHeight="4" />
      </Box>
    </Flex>
  );
};

export default GameDetailsSkelton;
