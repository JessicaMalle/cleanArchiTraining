import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFoodByIdUseCase } from '@foodsapp/usecases/foods.usecase';
import { Food } from '@foodsapp/models/food.interface';
import { AppDispatch, RootState } from '@foodsapp/store';
import { useParams } from 'react-router-dom';

export function FoodDisplayPageViewModel() {
  const dispatch = useDispatch<AppDispatch>();
  const { foodId } = useParams<{ foodId: string }>();
  const currentFood = useSelector((state: RootState) => state.foods.currentFood);
  const [food, setFood] = useState<Food | null>(null);

  // Load food data
  useEffect(() => {
    if (foodId) {
      dispatch(getFoodByIdUseCase(foodId));
    }
  }, [dispatch, foodId]);

  // Update local state when currentFood changes
  useEffect(() => {
    if (currentFood) {
      setFood(currentFood);
    }
  }, [currentFood]);

  return { food };
}
