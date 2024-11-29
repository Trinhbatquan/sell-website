import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { AccountTab } from "../constants";
import { IProduct } from "../interfaces";

export interface PageState {
  account: AccountTab;
  loveListProduct: Array<string>;
  cardProduct: Array<
    | IProduct
    | {
        selectedQuantity: number;
      }
  >;
}

const initialState: PageState = {
  account: AccountTab.PersonalDataTab,
  loveListProduct: [],
  cardProduct: [],
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
      action: PayloadAction<Array<string>>
    ) => {
      state.loveListProduct = action.payload;
    },
    handleChangeCardProduct: (
      state,
      action: PayloadAction<
        Array<
          | IProduct
          | {
              selectedQuantity: number;
            }
        >
      >
    ) => {
      state.cardProduct = action.payload;
    },
  },
});

export const {
  handleChangeAccountTab,
  handleChangeCardProduct,
  handleChangeLoveListProduct,
} = pageSlice.actions;

export const accountTabSelector = (state: RootState) => state.page.account;
export const loveListProductSelector = (state: RootState) =>
  state.page.loveListProduct;

export const cardProductSelector = (state: RootState) => state.page.cardProduct;

export default pageSlice.reducer;
