import { Heading, IconButton, Image, Stack, Text} from '@chakra-ui/react';
import { container as DI } from '@foodsapp/di/ioc';
import { Food } from '@foodsapp/models/food.interface';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import { Card, CardBody, CardFooter } from '@chakra-ui/react'

interface FoodCardProps {
  food: Food;
}

export const FoodCard = ({ food }: FoodCardProps) => {
  const { bgColorTitleCard, colorTitleCard, handleMouseEnterCard, handleMouseLeaveCard } =
    DI.resolve('foodCard');
  const navigate = useNavigate();

  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow='hidden'
      variant='outline'
      onMouseEnter={handleMouseEnterCard}
      onMouseLeave={handleMouseLeaveCard}
    >
      <Image
        objectFit='cover'
        maxW={{ base: '100%', sm: '200px' }}
        src={food.thumbnail.url}
        alt='Caffe Latte'
      />

      <Stack>
        <CardBody bg={bgColorTitleCard}>
          <Heading size='md' color={colorTitleCard}>{food.title}</Heading>

          <Text py='2'>
            {food.description}
          </Text>
        </CardBody>

        <CardFooter>
          <IconButton
            aria-label='Edit food'
            icon={<EditIcon />}
            onClick={() => navigate(`/edit/${food.id}`)}
          />
          <IconButton
            aria-label='Search database'
            icon={<DeleteIcon />}
          />
        </CardFooter>
      </Stack>
    </Card>
  );
};
