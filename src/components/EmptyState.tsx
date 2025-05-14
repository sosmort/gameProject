import { Box, Heading, Text, Button, Image } from "@chakra-ui/react";

const EmptyState = () => {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Image
        src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
        alt="No Data"
        maxW="200px"
        mx="auto"
        mb={6}
      />
      <Heading as="h2" size="xl" mb={2}>
        No Results Found
      </Heading>
      <Text color="gray.500" mb={6}>
        Try another filter to find what you're looking for.
      </Text>
      <Button colorScheme="teal" onClick={() => window.location.reload()}>
        Refresh
      </Button>
    </Box>
  );
};

export default EmptyState;
