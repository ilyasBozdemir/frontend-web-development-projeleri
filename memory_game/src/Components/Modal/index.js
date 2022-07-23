import {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { selectFiltereditems } from '../../redux/matchSlice';
import {removeAllMatchListState} from '../../redux/matchListSlice';
import {resetPoint} from '../../redux/pointSlice';
function Modal({status,setmodal,setItem_full_list}) {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(status);
  }, [status])
  const point = useSelector((state) => state.point.points);
  const reloadGame = () =>{
      setmodal(false);
      setItem_full_list(selectFiltereditems());
      dispatch(removeAllMatchListState());
      dispatch(resetPoint());
  }
  return (
    <div className={`modalcover ${status && 'display'}`}>
      <p className='modal'>Oyun bitti tebrikler</p>
      <p>Puanınız: {point}</p>
      <button className='glassBtn' onClick={reloadGame}>Yeni oyun</button>
      </div>
  )
}

export default Modal