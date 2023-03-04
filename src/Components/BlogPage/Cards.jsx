import React from "react";
import style from "../../Styles/BlogPage/Cards.module.css";
import img from "../../Images/BlogP/friends-exchanging-gift-boxes-with-one-another_53876-43036-edit.png";
import img2 from "../../Images/BlogP/merry-christmas-card-with-golden-black-presents_1361-1777-edit.png";
import img3 from "../../Images/BlogP/401 1.png";
import Button from "../Buttons/Button1";

function Cards() {
  return (
    <div className={style.P1}>
      <div className={style.card}>
        <img src={img} alt="" />
        <div>
          <p>HOW TO SELL YOUR ITUNES GIFTCARD WITH US.</p>
          <p>19 JUNE, 2019 | BUSINESS</p>
          <p>
            Lorem ipsum dolor sit amet, magna habemus ius ad, qui minimum
            voluptaria in. Ad mei modus quodsi complectitur, postea verterem
            persecuti cu est, sea epicuri.
          </p>
          <Button
            value="Discover"
            color="white"
            bgColor="linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)"
          />
        </div>
      </div>
      <div className={style.card}>
        <img src={img2} alt="" />
        <div>
          <p>EXCHANGE 5 PRODUCTS & GET 1 FREE PRODUCT.</p>
          <p>19 JUNE, 2019 | BUSINESS</p>
          <p>
            Lorem ipsum dolor sit amet, magna habemus ius ad, qui minimum
            voluptaria in. Ad mei modus quodsi complectitur, postea verterem
            persecuti cu est, sea epicuri.
          </p>
          <Button
            value="Discover"
            color="white"
            bgColor="linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)"
          />
        </div>
      </div>
      <div className={style.card}>
        <img src={img3} alt="" />
        <div>
          <p>ETH TO NAIRA EXCHANGE RATE IS NOW #400 PER...</p>
          <p>19 JUNE, 2019 | BUSINESS</p>
          <p>
            Lorem ipsum dolor sit amet, magna habemus ius ad, qui minimum
            voluptaria in. Ad mei modus quodsi complectitur, postea verterem
            persecuti cu est, sea epicuri.
          </p>
          <Button
            value="Discover"
            color="white"
            bgColor="linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)"
          />
        </div>
      </div>
    </div>
  );
}

export default Cards;
