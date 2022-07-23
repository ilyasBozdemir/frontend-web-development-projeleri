import {useState} from "react";
import Card from "./Card";
import { selectFiltereditems } from '../../redux/matchSlice';
import Modal from "../Modal";



function Game() {
  const [modal, setmodal] = useState(false);
  console.log(selectFiltereditems());
  const [item_full_list, setItem_full_list] = useState(selectFiltereditems());
  //console.log(matchs);
 
   return (
    <div className="gameholder">
      <div className="cardholder">
        
        {item_full_list.map((item,index) => {

            return <Card key={item.uniq} setmodal={setmodal} item={item} index={index} statusTaken={item.status} />
        }
        )}
     
        
      </div>
      <Modal status={modal} setmodal={setmodal} setItem_full_list={setItem_full_list} />
    </div>
  );
}

export default Game;