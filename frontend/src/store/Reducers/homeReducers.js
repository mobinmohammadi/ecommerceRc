import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

export const get_category = createAsyncThunk(
  "product/get_category",
  async (_, { fulfillWithValue }) => {
    try {
      const { data } = await api.get("home/get-category");

      return fulfillWithValue(data);
    } catch (error) {
      console.log(error.response.data);
    }
  },
);

// End -------------------------------------

export const get_products = createAsyncThunk(
  "product/get_products",
  async (_, { fulfillWithValue }) => {
    try {
      const { data } = await api.get("home/get-products");
      console.log("data ==> ", data);

      return fulfillWithValue(data);
    } catch (error) {
      console.log(error.response.data);
    }
  },
);

// End -------------------------------------

const HomeReducer = createSlice({
  name: "home",
  initialState: {
    categorys: [],
    totalCategory: "",
    products: [],
    latest_Product: [],
    topRated_Product: [],
    discount_product: [],
    totalProducts: "",
    errorMessage: "",
    succussMessage: "",
  },

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(get_category.pending, (state) => {
        state.loader = true;
      })

      .addCase(get_category.fulfilled, (state, { payload }) => {
        state.loader = false;
        state.categorys = payload.categorys;
        state.totalCategory = payload.totalCategory;
      })
      .addCase(get_category.rejected, (state, { payload }) => {
        state.loader = false;
        state.errorMessage = payload.error;
      })
      // End -------------------------------------
      .addCase(get_products.pending, (state) => {
        state.loader = true;
      })

      .addCase(get_products.fulfilled, (state, { payload }) => {
        state.loader = false;
        state.products = payload.products;
        state.latest_Product = payload.latest_Product;
        state.topRated_Product = payload.topRated_Product;
        state.discount_product = payload.discount_product
        state.totalProducts = payload.totalProducts;
      })
      .addCase(get_products.rejected, (state, { payload }) => {
        state.loader = false;
        state.errorMessage = payload.error;
      });
  },
});

// export const { messageClear } = authReducer.actions;
export default HomeReducer.reducer;
