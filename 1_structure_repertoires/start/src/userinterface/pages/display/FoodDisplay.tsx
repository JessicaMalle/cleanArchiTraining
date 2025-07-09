import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  Badge,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { container } from '@foodsapp/di/ioc.ts';

export const FoodDisplayPage = () => {
  const { food } = container.resolve('display');
  // Formatage de la date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(date);
  };

  if (!food) {
    return (
      <Box maxW="1200px" mx="auto" p={6} my={8}>
        <Text>Chargement...</Text>
      </Box>
    );
  }

  return (
    <Box
      maxW="1200px"
      mx="auto"
      p={6}
      borderRadius="lg"
      bg={useColorModeValue('rgba(255, 255, 255, 0.9)', 'rgba(0, 0, 0, 0.7)')}
      boxShadow="xl"
      my={8}
    >
      <VStack spacing={8} align="stretch">
        <Flex direction={{ base: 'column', md: 'row' }} gap={8}>
          <Box
            width={{ base: '100%', md: '40%' }}
            height={{ base: '300px', md: '400px' }}
            overflow="hidden"
            borderRadius="lg"
            boxShadow="md"
          >
            <Image
              src={food.thumbnail.url}
              alt={food.title}
              objectFit="cover"
              width="100%"
              height="100%"
              transition="transform 0.3s"
              _hover={{ transform: 'scale(1.05)' }}
            />
          </Box>

          <VStack
            align="flex-start"
            spacing={4}
            width={{ base: '100%', md: '60%' }}
            justify="center"
          >
            <Badge colorScheme="green" fontSize="0.9rem" px={3} py={1} borderRadius="full">
              {formatDate(food.createdAt)}
            </Badge>

            <Heading as="h1" size="2xl" fontFamily="heading" fontWeight="bold" color="primary.950">
              {food.title}
            </Heading>

            <Text fontSize="xl" fontFamily="body" lineHeight="tall" color="gray.700">
              {food.description}
            </Text>
          </VStack>
        </Flex>
      </VStack>
    </Box>
  );
};
