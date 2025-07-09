import { FoodsGateway } from "@foodsapp/infrastructure/gateways/foods.gateway";
import {Food} from "@foodsapp/models/food.interface.ts";

export function FoodsRespository() {
  return {
    async getFoods(): Promise<{ data: Food[]; error?: Error }> {
      const foodsGateway = FoodsGateway.getInstance();

      const { data, error } = await (foodsGateway as FoodsGateway).getFoods();
      console.log("gateway data", data);
      return { data, error };
    },

    async createFood(food: Food): Promise<{ data: boolean; error?: Error }> {
      const foodsGateway = FoodsGateway.getInstance();

      const { data, error } = await (foodsGateway as FoodsGateway).createFood(food);
      console.log("created food data", data);
      return { data, error };
    },
  };
}
