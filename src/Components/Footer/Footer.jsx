import React from "react";
import style from "../../Styles/Footer/Footer.module.css";
import logo from "../../Images/Footer/Logo (1).png";
import google from "../../Images/Footer/Google+.png";
import ins from "../../Images/Footer/Instagram.png";
import fb from "../../Images/Footer/Facebook.png";
import twi from "../../Images/Footer/Twitter.png";

function Footer() {
  return (
    <div className={style.parent}>
      <div>
        <img src={logo} alt="" />
        <p>
          Fusce ut elit aliquet, fermentum leo vel, tempus nunc. Fusce eu
          rhoncus augue. Fusce vel metus pharetra, fermentum
        </p>
        <div>
          <img src={google} alt="" />
          <img src={fb} alt="" />
          <img src={twi} alt="" />
          <img src={ins} alt="" />
        </div>
      </div>
      <div>
        <p>CoinBase Links</p>
        <p>Home</p>
        <p>About Us</p>
        <p>Blog</p>
        <p>Sell</p>
        <p>Contact Us</p>
      </div>
      <div>
        <p>Contact Us</p>
        <p>+923091755617</p>
        <p>ameen55668@gmail.com</p>
        <p>Address goes here</p>
        <p>Download Our App</p>
      </div>
      <div>
        <p>CoinBase Instagram</p>
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <p className={style.copyR}>© 2019  Designed by Cr8tiv_yemmy</p>
    </div>
  );
}

export default Footer;
