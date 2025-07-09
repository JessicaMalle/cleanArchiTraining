import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createFoodUseCase } from '@foodsapp/usecases/foods.usecase';
import { Food } from '@foodsapp/models/food.interface';
import { AppDispatch } from '@foodsapp/store';
import { useNavigate } from 'react-router-dom';

export function FoodEditPageViewModel() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [food, setFood] = useState<Food>({} as Food);

  const onChangeTitle = (title: string) => {
    setFood((prev: Food) => ({ ...prev, title }));
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
    const res = await dispatch(createFoodUseCase(food));
    if (res?.meta?.requestStatus === 'fulfilled') {
      navigate('/');
    }
  };

  return { onChangeTitle, onChangeDescription, onChangeImage, onSubmit };
}
