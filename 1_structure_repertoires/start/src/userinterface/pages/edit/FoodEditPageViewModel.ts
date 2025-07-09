import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createFoodUseCase, getFoodByIdUseCase, updateFoodUseCase } from '@foodsapp/usecases/foods.usecase';
import { Food } from '@foodsapp/models/food.interface';
import { AppDispatch, RootState } from '@foodsapp/store';
import { useNavigate, useParams } from 'react-router-dom';
import { FoodEntity } from '@foodsapp/domain/entities/FoodEntity';

export function FoodEditPageViewModel() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { foodId } = useParams<{ foodId: string }>();
  const currentFood = useSelector((state: RootState) => state.foods.currentFood);
  const [food, setFood] = useState<Food>({} as Food);
  const isEditMode = !!foodId;

  // Load food data if in edit mode
  useEffect(() => {
    if (isEditMode) {
      dispatch(getFoodByIdUseCase(foodId));
    }
  }, [dispatch, foodId, isEditMode]);

  // Update local state when currentFood changes
  useEffect(() => {
    if (currentFood && isEditMode) {
      setFood(currentFood);
    }
  }, [currentFood, isEditMode]);

  const onChangeTitle = (title: string) => {
    setFood((prev: Food) => ({ ...prev, title }));
  };

  const checkValidFood = (food: Food) => {
    const foodEntity = new FoodEntity();
    return foodEntity.isValidTitle(food.title);
  };

  const onChangeDescription = (description: string) => {
    setFood((prev: Food) => ({ ...prev, description }));
  };

  const onChangeImage = (imageUrl: string) => {
    setFood((prev: Food) => ({
      ...prev,
      thumbnail: {
        url: imageUrl,
      },
    }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!checkValidFood(food)) {
      console.error("Title is invalid");
      return;
    }

    let res;
    if (isEditMode) {
      res = await dispatch(updateFoodUseCase(food));
    } else {
      res = await dispatch(createFoodUseCase(food));
    }

    if (res?.meta?.requestStatus === 'fulfilled') {
      navigate('/');
    }
  };

  return { onChangeTitle, onChangeDescription, onChangeImage, onSubmit, food, isEditMode };
}
