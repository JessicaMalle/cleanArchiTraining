import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {createFoodUseCase} from "@foodsapp/usecases/foods.usecase";
import {Food} from "@foodsapp/models/food.interface";
import { AppDispatch } from "@foodsapp/store";

export function FoodEditPageViewModel() {
	const dispatch = useDispatch<AppDispatch>();
	const [food, setFood] = useState<Food>({} as Food);

	const onChangeTitle = (title: string) => {
		setFood((prev: Food) => ({...prev, title}))
	}

	const onSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		dispatch(createFoodUseCase(food));
	}

	return {onChangeTitle, onSubmit};
}
