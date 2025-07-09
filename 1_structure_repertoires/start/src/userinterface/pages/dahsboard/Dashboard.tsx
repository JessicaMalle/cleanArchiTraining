import { Grid } from "@chakra-ui/react";
import { FoodCard } from "@foodsapp/components/FoodCard/FoodCard";
import { container as DI } from "@foodsapp/di/ioc";
import { Food } from "@foodsapp/models/food.interface";
import {FoodCardSkeleton} from "@foodsapp/components/FoodCard/FoodCardSkeleton.tsx";
import PageWrapper from "@foodsapp/components/PageWrapper/pageWrapper.tsx";


export const DashboardPage = () => {
  const { foods, isLoading } = DI.resolve("dashboard");
  return (
    <PageWrapper title="Découvrir">
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
    </PageWrapper>
  );
};
