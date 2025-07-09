import { Box, Image } from '@chakra-ui/react';
import { container as DI } from '@foodsapp/di/ioc';
import { Food } from '@foodsapp/models/food.interface';
import { Card } from '../Card/Card';

interface FoodCardProps {
  food: Food;
}

export const FoodCard = ({ food }: FoodCardProps) => {
  const { bgColorTitleCard, colorTitleCard, handleMouseEnterCard, handleMouseLeaveCard } =
    DI.resolve('foodCard');

  return (
    <Card.Root
      flexDirection="row"
      overflow="hidden"
      width="48rem"
      height="16rem"
      onMouseEnter={handleMouseEnterCard}
      onMouseLeave={handleMouseLeaveCard}
      cursor="pointer"
      data-testid={`food-card-${food.id}`}
    >
      <Box position="relative" width="20rem" height="100%" bg="gray.400" overflow="hidden">
        <Image src={food?.thumbnail?.url} objectFit="cover" width="100%" height="100%" zIndex="1" />
      </Box>
      <Box flex="1">
        <Card.Body height="100%" bg={bgColorTitleCard} transition="background 0.15s">
          <Card.Title color={colorTitleCard} transition="color 0.15s" mb="2">
            {food?.title}
          </Card.Title>
          <Card.Description>{food?.description}</Card.Description>
        </Card.Body>
      </Box>
    </Card.Root>
  );
};
