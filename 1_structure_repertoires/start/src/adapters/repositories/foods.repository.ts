import { FoodsGateway } from '@foodsapp/infrastructure/gateways/foods.gateway';
import { Food } from '@foodsapp/models/food.interface.ts';

export function FoodsRespository() {
  return {
    async getFoods(): Promise<{ data: Food[]; error?: Error }> {
      const foodsGateway = FoodsGateway.getInstance();

      const { data, error } = await (foodsGateway as FoodsGateway).getFoods();
      return { data, error };
    },

    async getFoodById(id: string): Promise<{ data: Food; error?: Error }> {
      const foodsGateway = FoodsGateway.getInstance();

      const { data, error } = await (foodsGateway as FoodsGateway).getFoodById(id);
      return { data, error };
    },

    async createFood(food: Food): Promise<{ data: boolean; error?: Error }> {
      const foodsGateway = FoodsGateway.getInstance();

      const { data, error } = await (foodsGateway as FoodsGateway).createFood(food);
      console.log('created food data', data);
      return { data, error };
    },

    async updateFood(food: Food): Promise<{ data: boolean; error?: Error }> {
      const foodsGateway = FoodsGateway.getInstance();

      const { data, error } = await (foodsGateway as FoodsGateway).updateFood(food);
      console.log('updated food data', data);
      return { data, error };
    },
  };
}
