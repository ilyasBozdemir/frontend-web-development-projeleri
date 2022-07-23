import { createSlice,createEntityAdapter } from "@reduxjs/toolkit";
import liste from "../Components/Game/item_list.json";
import {nanoid} from "@reduxjs/toolkit"

export const matchAdaptor = createEntityAdapter(); 
export const matchSelector = matchAdaptor.getSelectors((state) => state.match);

const matchSlice = createSlice({
  name: "match",
  initialState:matchAdaptor.getInitialState(),
  reducers: {
    addMatchState: matchAdaptor.addOne,
    deletematchState: matchAdaptor.removeOne,
    removeAllmatchState: matchAdaptor.removeAll,
  },
});
export const selectFiltereditems  = (state) =>{
      let yeniliste = [];
      let item_full_list =[];
      
        //console.log(liste);
        //console.log(Math.ceil(Math.random()*24));
        //console.log(yeniliste.includes(15));
        let i = 0;
        while(yeniliste.length<24 ){
          let generate = Math.floor(Math.random()*12) ;
    
          
          
          let includeArray = yeniliste.filter(item => item === generate);
         if(includeArray.length>2){
           console.log(includeArray);
         }
          if(includeArray.length<2){
            yeniliste.push(generate);
          }
          if(i === 300){
            break;
          }
          i++;
        }
      
        yeniliste.push(16);
        yeniliste.map((item,index) => {
          let newGen = {...liste[item]};
          newGen.uniq = nanoid()+ index;
          newGen.status = false;
          item_full_list.push(newGen);
        })
        return item_full_list;
}
export const { addMatchState,deletematchState,removeAllMatchState} = matchSlice.actions;
export default matchSlice.reducer;