import { createSelector, createSlice } from "@reduxjs/toolkit";
import { selectSearchTerm } from "../search/searchSlice";

export const allThingsSlice = createSlice({
  name: "allThings",
  initialState: {
    things: [],
    isLoading: false,
    hasError: false,
  },
  reducers: {
    startGetThings: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    endGetThingsWithSuccess: (state, action) => {
      state.isLoading = false;
      state.hasError = false;
      state.things = action.payload;
    },
    endGetThingsWithError: (state) => {
      state.isLoading = false;
      state.hasError = true;
      state.things = [];
    },
  },
});

export const {
  startGetThings,
  endGetThingsWithSuccess,
  endGetThingsWithError,
} = allThingsSlice.actions;

export const selectAllThings = (state) => state.allThings.things;

export const selectFilteredAllThings = createSelector(
  selectAllThings,
  selectSearchTerm,
  (things, searchTerm) =>
    things.filter((thing) =>
      thing.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
);

export const loadThings = () => async (dispatch) => {
  dispatch(startGetThings());

  try {
    const data = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");
    const json = await data.json();
    dispatch(endGetThingsWithSuccess(json["results"]));
  } catch (_err) {
    dispatch(endGetThingsWithError());
  }
};

export default allThingsSlice.reducer;