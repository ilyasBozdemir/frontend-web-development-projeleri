import { createSlice } from "@reduxjs/toolkit";

export const pointSlice = createSlice({
  name: "point",
  initialState: {
    points: 100,
  },
  reducers: {
   decrasePoint:(state,action) => {
      state.points = state.points - 10 ;
   },
   increasePoint:(state,action)=> {
      state.points = state.points + 50 ;
   },
   resetPoint:(state,action) => {
      state.points = 100;
   }
  },
});

export const { decrasePoint,increasePoint,resetPoint } = pointSlice.actions;

export default pointSlice.reducer;