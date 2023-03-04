import React from "react";
import Button1 from "../Buttons/Button1";
import style from "../../Styles/BlogContentPage/FormT.module.css";

function FormT() {
  return (
    <div className={style.P1}>
      <div>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
      </div>
      <div>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Your Comment"
        ></textarea>
      </div>
      <div>
        <Button1
          value="PUBLISH"
          color="white"
          bgColor="linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)"
        />
      </div>
    </div>
  );
}

export default FormT;
