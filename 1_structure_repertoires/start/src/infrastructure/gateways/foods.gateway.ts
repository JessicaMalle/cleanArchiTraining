import { Singleton } from '@foodsapp/infrastructure/helper/singleton';
import axios from 'axios';
import {Food} from "@foodsapp/models/food.interface.ts";

export class FoodsGateway extends Singleton {
  async getFoods() {
    try {
      const res = await axios.get('/fakeApi/getFoods');
      const data = res.data;
      return { data };
    } catch (e) {
      const error = e as Error;
      return { error };
    }
  }

  async createFood(food: Food) {
    try {
      const res = await axios.post('/fakeApi/createFood', food);
      const data = res.data;
      return { data };
    } catch (e) {
      const error = e as Error;
      return { error };
    }
  }
}
