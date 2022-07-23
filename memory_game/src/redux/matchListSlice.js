import { createSlice,createEntityAdapter } from "@reduxjs/toolkit";

export const matchListAdaptor = createEntityAdapter(); 
export const matchListSelector = matchListAdaptor.getSelectors((state) => state.matchList);

const matchListSlice = createSlice({
  name: "matchList",
  initialState:matchListAdaptor.getInitialState(),
  reducers: {
    addMatchListState: matchListAdaptor.addOne,
    deleteMatchListState: matchListAdaptor.removeOne,
    removeAllMatchListState: matchListAdaptor.removeAll,
  },
});

export const { addMatchListState,deleteMatchListState,removeAllMatchListState } = matchListSlice.actions;
export default matchListSlice.reducer;