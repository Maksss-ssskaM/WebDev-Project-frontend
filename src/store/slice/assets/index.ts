import { createSlice } from "@reduxjs/toolkit";
import { getPopularAssets } from "../../thunks/assets";

const initialState: any = {
    assets: [],
    popularAssets: [],
};
console.log(initialState);

export const assetSlice = createSlice({
    name: "assets",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getPopularAssets.fulfilled, (state, action) => {
            state.popularAssets.push(action.payload);
        });
    },
});

export default assetSlice.reducer;
