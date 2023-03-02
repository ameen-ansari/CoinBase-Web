import React from "react";
import style from "../../Styles/Advitisment/Advitisment.module.css";
import ind from "../../Images/Navbar/Indicator.png";
import appleT from "../../Images/Advitisment/app-store-logo 1.png";
import playT from "../../Images/Advitisment/get-it-on-google-play-badge-png-google-play-badge-png-505 1 (1).png";
import img1 from "../../Images/Advitisment/X-1.png";
import img2 from "../../Images/Advitisment/X-2.png";
import img3 from "../../Images/Advitisment/Path 4.4.png";
import Button from "../Buttons/Button1";

function Advitisment() {
  return (
    <>
      <div className={style.parent}>
        <div>
          <p>Download our app</p>
          <img src={ind} alt="" />
        </div>
        <div>
          <p>
            Discover exclusive deals and discounts with our mobile experience.
          </p>
        </div>
        <div>
          <img src={appleT} alt="" />
          <img src={playT} alt="" />
        </div>
      </div>
      <div className={style.parent2}>
        <img src={img3} alt="" />
        <div>
          <img src={img1} alt="" />
          <img src={img2} alt="" />
        </div>
      </div>
      <div className={style.parent4}>
        <div>
          <p>Subscribe our newsletter</p>
          <img src={ind} alt="" />
        </div>
        <div>
          <p>
            Subscribe to our newsletter for daily/weekly update of our products
            and services.
          </p>
        </div>
        <div>
          <input type="text" placeholder="EMAIL" />
          <Button
            value="DISCOVER"
            bgColor="linear-gradient(178.18deg, #fd749b -13.56%, #281ac8 158.3%)"
            color="white"
          />
        </div>
      </div>
    </>
  );
}

export default Advitisment;
