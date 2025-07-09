// FoodCardSkeleton.tsx
import { Box, Skeleton } from "@chakra-ui/react";
import { Card } from "../Card/Card";

export const FoodCardSkeleton = () => {
  return (
    <Card.Root
      flexDirection="row"
      overflow="hidden"
      width="48rem"
      height="16rem"
      cursor="wait"
    >
      <Box position="relative" width="20rem" height="100%" bg="gray.200" overflow="hidden">
        <Skeleton height="100%" width="100%" />
      </Box>
      <Box flex="1">
        <Card.Body height="100%" bg="white">
          <Skeleton height="3rem" width="80%" mb="2" />
          <Skeleton height="6rem" width="100%" />
        </Card.Body>
      </Box>
    </Card.Root>
  );
};
