import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  restaurant: null,
  dishes: [],
};

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    setRestaurant: (state, action) => {
      state.restaurant = action.payload;
    },
    setDishes: (state, action) => {
      state.dishes = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setRestaurant } = restaurantSlice.actions;

export const { setDishes } = restaurantSlice.actions;

export const selectRestaurant = (state) => state.restaurant.restaurant;

export const selectDishes = (state) => state.restaurant.dishes;

export default restaurantSlice.reducer;
