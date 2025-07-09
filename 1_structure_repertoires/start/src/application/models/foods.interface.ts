import { Food } from './food.interface';

export const ERROR_KEYS = [
  'getFoodsUseCaseErrorMessage',
  'getFoodByIdUseCaseErrorMessage',
  'createFoodUseCaseErrorMessage',
  'updateFoodUseCaseErrorMessage'
] as const;

export type FoodsState = {
  data: Food[];
  currentFood: Food | null;
  isLoading: boolean;
  errors: Record<(typeof ERROR_KEYS)[number], string>;
};
