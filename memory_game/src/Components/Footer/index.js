import React from "react";

function Footer() {
  let newDate = new Date();


  return (
    <p className="footer">
     &copy; {newDate.getFullYear()} Memory Card - React-Redux App - ilyas bozdemir
    </p>
  );
}

export default Footer;