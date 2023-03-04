import React from "react";
import style from "../../Styles/BlogPage/More.module.css";
import Button1 from "../Buttons/Button1";

function More() {
  return (
    <div className={style.P1}>
      <div>
        <Button1
          color="white"
          bgColor="linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)"
          value="01"
        />
        <Button1
          color="black"
          bgColor="white"
          value="02"
        />
        <Button1
          color="black"
          bgColor="white"
          value="03"
        />
        <Button1
          color="black"
          bgColor="white"
          value="..."
        />
        <Button1
          color="black"
          bgColor="white"
          value="Next"
        />
      </div>
    </div>
  );
}

export default More;
