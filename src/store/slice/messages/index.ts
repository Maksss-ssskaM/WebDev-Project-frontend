import { createSlice } from "@reduxjs/toolkit";
import { getMessagesList } from "../../thunks/messages";

const initialState: any = {
  assets: [],
};

export const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMessagesList.fulfilled, (state, action) => {
      state.assets = action.payload;
    });
  },
});

export default messagesSlice.reducer;
