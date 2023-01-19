import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  cart: [],
  storages: [],
  allStorages: [],
  total: 0,
};

export const storageSlice = createSlice({
  name: "storages",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
      const total = state.cart.reduce(
        (currentTotal, item) => currentTotal + item.quantity * item.rental_rate,0);
      state.total = total
    },
    removeFromCart: (state, action) => {
      const filteredCart = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      state.cart = [...filteredCart];
      const total = state.cart.reduce(
        (currentTotal, item) => currentTotal + item.quantity * item.rental_rate,0);
      state.total = total
    },
    addToAllStorages: (state, action) => {
      state.allStorages = [...action.payload];
    },
    addToStorages: (state, action) => {
      state.storages = [...action.payload];
    },
    incrementCartItem: (state, action) => {
      const newProducts = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          item.quantity = item.quantity + 1;
        }
        return item;
      });
      state.cart = [...newProducts];
      const total = state.cart.reduce(
        (currentTotal, item) => currentTotal + item.quantity * item.rental_rate,0);
      state.total = total
    },
    decrementCartItem: (state, action) => {
      const newProducts = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          if (item.quantity !== 0) {
            item.quantity = item.quantity - 1;
          }
        }
        return item;
      });
      state.cart = [...newProducts];
      const total = state.cart.reduce(
        (currentTotal, item) => currentTotal + item.quantity * item.rental_rate,0);
      state.total = total
    },
    cartTotal: (state, action) => {
    },

    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
});

// Action creators are generated for each case reducer function
export const {
  addToCart,
  removeFromCart,
  addToStorages,
  addToAllStorages,
  incrementCartItem,
  decrementCartItem,
} = storageSlice.actions;

export default storageSlice.reducer;
