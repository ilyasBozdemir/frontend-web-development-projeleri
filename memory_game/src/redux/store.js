import { configureStore } from "@reduxjs/toolkit";
import matchSlice from "./matchSlice";
import matchListSlice from "./matchListSlice";
import pointSlice from "./pointSlice";

export const store = configureStore({
  reducer: {
        match: matchSlice,
        matchList: matchListSlice,
        point:pointSlice,
},
});