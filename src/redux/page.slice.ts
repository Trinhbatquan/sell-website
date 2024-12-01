import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { AccountTab, OrderStatus } from "../constants";
import { IProduct } from "../interfaces";

interface ICart extends IProduct {
  selectedQuantity: number;
  isSelected: boolean;
}
export interface PageState {
  account: AccountTab;
  loveListProduct: Array<number>;
  cardProduct: Array<ICart>;
  orderStatus: OrderStatus;
}

const initialState: PageState = {
  account: AccountTab.PersonalDataTab,
  loveListProduct: [],
  cardProduct: [],
  orderStatus: OrderStatus.ConfirmWaiting,
};

export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    handleChangeAccountTab: (state, action: PayloadAction<AccountTab>) => {
      state.account = action.payload;
    },
    handleChangeLoveListProduct: (
      state,
      action: PayloadAction<Array<number>>
    ) => {
      state.loveListProduct = action.payload;
    },
    handleChangeCardProduct: (state, action: PayloadAction<Array<ICart>>) => {
      state.cardProduct = action.payload;
    },
    handleChangeOrderStatus: (state, action: PayloadAction<OrderStatus>) => {
      state.orderStatus = action.payload;
    },
  },
});

export const {
  handleChangeAccountTab,
  handleChangeCardProduct,
  handleChangeLoveListProduct,
  handleChangeOrderStatus,
} = pageSlice.actions;

export const accountTabSelector = (state: RootState) => state.page.account;
export const loveListProductSelector = (state: RootState) =>
  state.page.loveListProduct;

export const cardProductSelector = (state: RootState) => state.page.cardProduct;
export const orderStatusSelector = (state: RootState) => state.page.orderStatus;

export default pageSlice.reducer;
