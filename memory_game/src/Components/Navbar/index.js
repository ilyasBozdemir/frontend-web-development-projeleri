import React from "react";
import { useSelector } from "react-redux";

function Navbar() {
  const point = useSelector((state) => state.point.points);
 // console.log(point);
  return (
    <div className="navbar">
      <p>Memory Card Game</p>
      <p>Puanınız : {point}</p>
    </div>
  );
}

export default Navbar;