import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../../utils/axios";

export const getMessagesList = createAsyncThunk(
  "messages/get",
  (_, { rejectWithValue }) => {
    try {
      return instance.get("messages/get");
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  },
);
