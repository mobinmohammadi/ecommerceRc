import { createSlice } from "@reduxjs/toolkit";

const HomeReducer = createSlice({
  name: "home",
  initialState: {
    category: [],
  },

  reducers: {},
  extraReducers: (builder) => {},
});

// export const { messageClear } = authReducer.actions;
export default HomeReducer.reducer;
