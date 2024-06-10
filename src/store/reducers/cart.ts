import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MenuItem } from "../../pages/Home";

type CartState = {
  items: MenuItem[];
  isOpen: boolean;
  total: number;
  deliveryStep: boolean;
  paymentStep: boolean;
  conclusionStep: boolean;
};

const initialState: CartState = {
  items: [],
  isOpen: true,
  total: 0,
  deliveryStep: false,
  paymentStep: false,
  conclusionStep: false,
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
    showCart: (state) => {
      state.isOpen = true;
      state.deliveryStep = false;
      state.paymentStep = false;
      state.conclusionStep = false;
    },
    showDeliveryForm: (state) => {
      state.isOpen = false;
      state.deliveryStep = true;
      state.paymentStep = false;
      state.conclusionStep = false;
    },
    showPaymentForm: (state) => {
      state.isOpen = false;
      state.deliveryStep = false;
      state.paymentStep = true;
      state.conclusionStep = false;
    },
    showConclusion: (state) => {
      state.isOpen = false;
      state.deliveryStep = false;
      state.paymentStep = false;
      state.conclusionStep = true;
    },
  },
});

export const {
  add,
  remove,
  open,
  close,
  showCart,
  showDeliveryForm,
  showPaymentForm,
  showConclusion,
} = cartSlice.actions;
export default cartSlice.reducer;
