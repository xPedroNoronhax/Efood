import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MenuItem } from "../../pages/Home";

type CartState = {
  items: MenuItem[];
  isOpen: boolean;
  total: number;
};

const initialState: CartState = {
  items: [],
  isOpen: false,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<MenuItem>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        alert(`O item "${action.payload.nome}" já está no carrinho.`);
      } else {
        state.items.push(action.payload);
        state.total = state.items.reduce((acc, item) => acc + item.preco, 0);
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.total = state.items.reduce((acc, item) => acc + item.preco, 0);
    },
    open: (state) => {
      state.isOpen = true;
    },
    close: (state) => {
      state.isOpen = false;
    },
  },
});

export const { add, remove, open, close } = cartSlice.actions;
export default cartSlice.reducer;
