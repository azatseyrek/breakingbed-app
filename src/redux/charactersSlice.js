import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const char_limit = 12;

export const fetchCharacters = createAsyncThunk(
  "characters/fetchCharacters",
  async () => {
    const res = await axios(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}/characters?limit=${char_limit}`
    );
    return res.data;
  }
);

export const chractersSlice = createSlice({
  name: "characters",

  initialState: {
    items: [],
    isLoading : false,
    error : ""
  },

  reducers: {},
  extraReducers: {
    [fetchCharacters.pending]: (state, action) => {
        state.isLoading = true;
    },

    [fetchCharacters.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.isLoading= false;
    },

    [fetchCharacters.rejected]: (state, action) => {
      state.isLoading= false;
      state.error = action.error.message;
    }
  },
});

export default chractersSlice.reducer;
