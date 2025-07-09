import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit';
import { FoodsRespository } from '@foodsapp/adapters/repositories/foods.repository';
import { RootState } from '@foodsapp/store';
import { Food } from '@foodsapp/models/food.interface';
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

interface FoodState {
  data: Food | null;
  isLoading: boolean;
  errors: {
    getFoodUseCaseErrorMessage: string;
    createFoodUseCaseErrorMessage: string;
    updateFoodUseCaseErrorMessage: string;
  };
}

const initialState: FoodState = {
  data: null,
  isLoading: false,
  errors: {
    getFoodUseCaseErrorMessage: '',
    createFoodUseCaseErrorMessage: '',
    updateFoodUseCaseErrorMessage: '',
  },
};

const foodSlice = createSlice({
  name: 'food',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getFoodUseCase.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getFoodUseCase.fulfilled, (state, action) => {
      state.data = action.payload || null;
      state.isLoading = false;
    });
    builder.addCase(getFoodUseCase.rejected, (state, action) => {
      state.isLoading = false;
      state.errors.getFoodUseCaseErrorMessage = action.error.message ?? 'unknown error';
    });

    builder.addCase(createFoodUseCase.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createFoodUseCase.fulfilled, (state) => {
      state.isLoading = false;
      // The food was created successfully
      // The component can dispatch getFoodUseCase to refresh if needed
    });
    builder.addCase(createFoodUseCase.rejected, (state, action) => {
      state.isLoading = false;
      state.errors.createFoodUseCaseErrorMessage = action.error.message ?? 'unknown error';
    });

    builder.addCase(updateFoodUseCase.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateFoodUseCase.fulfilled, (state) => {
      state.isLoading = false;
      // The food was updated successfully
      // The component can dispatch getFoodUseCase to refresh if needed
    });
    builder.addCase(updateFoodUseCase.rejected, (state, action) => {
      state.isLoading = false;
      state.errors.updateFoodUseCaseErrorMessage = action.error.message ?? 'unknown error';
    });
  },
});

export const foodReducer = foodSlice.reducer;

export const getFoodUseCase = createAsyncThunk(
  'food/getFood',
  async (id: string, { rejectWithValue }) => {
    try {
      const { data: food } = await FoodsRespository().getFoodById(id);
      return food;
    } catch (e) {
      const error = e as Error;
      return rejectWithValue(error);
    }
  },
  {
    condition: (_: string, { getState }) => {
      const { food } = getState() as RootState;
      if (food.isLoading) {
        return false;
      }
      return undefined;
    },
  }
);

const selectFoodState = (state: { food: FoodState }) => state.food;

export const selectFood = createSelector(selectFoodState, ({ data }) => data);

export const selectIsLoadingFood = createSelector(selectFoodState, ({ isLoading }) => isLoading);

export const createFoodUseCase = createAsyncThunk(
  'food/createFood',
  async (food: Food, { rejectWithValue }) => {
    try {
      const { data: createdFood } = await FoodsRespository().createFood(food);
      return createdFood;
    } catch (e) {
      const error = e as Error;
      return rejectWithValue(error);
    }
  }
);

export const updateFoodUseCase = createAsyncThunk(
  'food/updateFood',
  async (food: Food, { rejectWithValue }) => {
    try {
      const { data: updatedFood } = await FoodsRespository().updateFood(food);
      return updatedFood;
    } catch (e) {
      const error = e as Error;
      return rejectWithValue(error);
    }
  }
);

export const apiFood = createApi({
  reducerPath: 'foodApi',
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000'}),
  tagTypes: ['Food'],
  endpoints(build) {
    return {
      getFoodUseCase: build.query<Food, string>({
        query: (id) => `/foods/${id}`,
        providesTags: ['Food']
      })
    };
  }
});
