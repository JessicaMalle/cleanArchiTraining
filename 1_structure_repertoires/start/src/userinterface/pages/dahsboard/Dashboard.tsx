import { Container, Grid, Heading } from "@chakra-ui/react";
import { FoodCard } from "@foodsapp/components/FoodCard/FoodCard";
import { container as DI } from "@foodsapp/di/ioc";
import { Food } from "@foodsapp/models/food.interface";
import {FoodCardSkeleton} from "@foodsapp/components/FoodCard/FoodCardSkeleton.tsx";

const GAP = "2.1rem";

export const DashboardPage = () => {
  const { foods, isLoading } = DI.resolve("dashboard");
  return (
    <>
      <Container
        position="relative"
        bg="rgba(255, 182, 193, 0.9)"
        backdropFilter="blur(6px)"
        borderRadius="12px"
        margin={GAP}
        paddingY={`calc(${GAP} * 2)`}
        width={`calc(100% - ${GAP} * 2)`}
        minHeight={`calc(100vh - ${GAP} * 2)`}
        maxWidth="auto"
      >
        <Heading
          fontSize="4rem"
          color="black"
          textAlign="center"
          fontWeight="300"
          data-testid="title-page"
        >
          Découvrir
        </Heading>
        {isLoading ? (
          <Grid
            templateColumns="repeat(auto-fill, 48rem)"
            gap="2rem"
            justifyContent="center"
            maxWidth="175rem"
            paddingY="3.2rem"
            margin="auto"
          >
            {[...Array(5)].map((n, index: number) => (
              <FoodCardSkeleton key={`${n}-${index}`} />
            ))}
          </Grid>
        ) : (
          <Grid
            templateColumns="repeat(auto-fill, 48rem)"
            gap="2rem"
            justifyContent="center"
            maxWidth="175rem"
            paddingY="3.2rem"
            margin="auto"
          >
            {foods.map((food: Food, index: number) => (
              <FoodCard key={`${food.id}-${index}`} food={food} />
            ))}
          </Grid>
        )}
      </Container>
    </>
  );
};
