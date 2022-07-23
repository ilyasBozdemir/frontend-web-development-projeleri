import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrasePoint,increasePoint } from "../../redux/pointSlice";
import {
  addMatchState,
  deletematchState,
  matchSelector,
} from "../../redux/matchSlice";
import {
  addMatchListState,
  matchListSelector,
} from "../../redux/matchListSlice";

function Card({ item, statusTaken, index,setmodal }) {
  const white =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Solid_white.svg/2048px-Solid_white.svg.png";
  const dispatch = useDispatch();
  const matchs = useSelector(matchSelector.selectAll);
  const matchsList = useSelector(matchListSelector.selectAll);
  const matchsListTotal = useSelector(matchListSelector.selectIds);
  const matchsTotal = useSelector(matchSelector.selectTotal);
  const [status, setstatus] = useState(false);
  useEffect(() => {
      let fetch1 = matchs.filter((matched1) => matched1.id === item.id);
      //console.log(fetch1)
    if (matchs.length > 1 && fetch1.length>0 ) {
     
        let fetch2 = matchsList.filter((matched) => matched.id === item.id);
        if (fetch2.length > 0) {
          //console.log(fetch);
        } else {
            const animasyon = () => {
                  setstatus(false);
                };
                setTimeout(animasyon, 1000);
                const resim_degis2 = () => {
                  setresim(white);
                };
          setTimeout(resim_degis2, 1200);
          dispatch(deletematchState(item.id));
          dispatch(deletematchState(matchs[0].id));
        }
       
    }
   // console.log(matchsListTotal.length);
    if(matchsListTotal.length === 12){

          setstatus(true);
          const resim_degis = () => {
                setresim(item.item_img);
          };
          setTimeout(resim_degis, 50);
    }
    if(matchsListTotal.length === 12){

      setmodal(true);
      }
  }, [matchs,matchsListTotal]);

  const [resim, setresim] = useState(white);

  const turn = () => {
    //console.log(matchsTotal);
    if (!status) {
      if (matchsTotal === 0) {
        //eğer hiç birşey yoksa bura çalışacak
        const resim_degis1 = () => {
          setresim(item.item_img);
        };
        setTimeout(resim_degis1, 1);
        dispatch(addMatchState({ id: item.id, uniq: item.uniq }));
        setstatus(true);
      } else {
        console.log(matchs[0].id, item.id);
        if (matchs[0].id === item.id) {
          // eğer elde tutulan ile şimdikinin idsi eşitse
          setstatus(true);
          const resim_degis = () => {
            setresim(item.item_img);
          };
          setTimeout(resim_degis, 50);
          dispatch(addMatchState({ id: item.id, uniq: item.uniq }));
          dispatch(deletematchState(item.id));
          dispatch(addMatchListState({ id: matchs[0].id }));
          dispatch(deletematchState(matchs[0].id));
          dispatch(increasePoint());
        } else {
          //eğer elde tutulan ile şimdikinin idsi eşit değilse
          setstatus(true);
          const resim_degis1 = () => {
            setresim(item.item_img);
          };
          setTimeout(resim_degis1, 200);

          const animasyon = () => {
            setstatus(false);
          };
          setTimeout(animasyon, 1000);
          const resim_degis2 = () => {
            setresim(white);
          };
          setTimeout(resim_degis2, 1200);
          dispatch(addMatchState({ id: item.id, uniq: item.uniq }));
         //dispatch(deletematchState(matchs[0].id));
        dispatch(decrasePoint());
        }
      }
    } else {
      setstatus(false);
      const resim_degis = () => {
        setresim(white);
      };
      setTimeout(resim_degis, 220);
      dispatch(deletematchState(item.id));
    }
  };
  return (
    <div onClick={turn} className="card">
      <img
        className={`front ${status && "toBack"}`}
        src={resim}
        alt={item.item_name}
      />
    </div>
  );
}

export default Card;