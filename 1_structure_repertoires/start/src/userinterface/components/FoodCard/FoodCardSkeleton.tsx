// FoodCardSkeleton.tsx
import {Box, Skeleton, Card, CardBody} from '@chakra-ui/react';

export const FoodCardSkeleton = () => {
  return (
    <Card direction="row" overflow="hidden" width="48rem" height="16rem" cursor="wait">
      <Box position="relative" width="20rem" height="100%" bg="gray.200" overflow="hidden">
        <Skeleton height="100%" width="100%"/>
      </Box>
      <Box flex="1">
        <CardBody height="100%" bg="white">
          <Skeleton height="3rem" width="80%" mb="2"/>
          <Skeleton height="6rem" width="100%"/>
        </CardBody>
      </Box>
    </Card>
  );
};
