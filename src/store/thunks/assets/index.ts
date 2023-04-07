import { createAsyncThunk } from "@reduxjs/toolkit";
import { coinGeckoApi } from "../../../utils/axios";

export const getPopularAssets = createAsyncThunk(
    "coins/markets",
    async (data: string, { rejectWithValue }) => {
        try {
            const assets = await coinGeckoApi.get(
                `/coins/${data}/market_chart?vs_currency=usd&days=90`,
            );
            const singleAsset = await coinGeckoApi.get(
                `/coins/markets?vs_currency=usd&ids=${data}&order=market_cap_desc&per_page=100&page=1&sparkline=false`,
            );
            return {
                name: data,
                price_chart_data: assets.data.prices.slice(
                    // срез датасета цен
                    assets.data.prices.length - 30, // от старых
                    assets.data.prices.length - 1, // к новым
                ),
                singleAsset: singleAsset.data,
            };
        } catch (error: any) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    },
);
