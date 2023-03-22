import React from "react";
import style from "../../Styles/Footer/Footer.module.css";
import logo from "../../Images/Footer/Logo (1).svg";
import google from "../../Images/Footer/Google+.png";
import ins from "../../Images/Footer/Instagram.png";
import fb from "../../Images/Footer/Facebook.png";
import twi from "../../Images/Footer/Twitter.png";

function Footer() {
  return (
    <div className={style.parent}>
      <div>
        <img src={logo} alt="" />
        <p style={{fontSize:14}}>
          Fusce ut elit aliquet, fermentum leo vel, tempus nunc. Fusce eu
          rhoncus augue. Fusce vel metus pharetra, fermentum
        </p>
        <div>
          <img className="cursor-pointer" src={google} alt="" />
          <img className="cursor-pointer" src={fb} alt="" />
          <img className="cursor-pointer" src={twi} alt="" />
          <img className="cursor-pointer" src={ins} alt="" />
        </div>
      </div>

      <div>
        <p>CoinBase Links</p>
        <p className="cursor-pointer">Home</p>
        <p className="cursor-pointer">About Us</p>
        <p className="cursor-pointer">Blog</p>
        <p className="cursor-pointer">Sell</p>
        <p className="cursor-pointer">Contact Us</p>
      </div>
      <div>
        <p>Contact Us</p>
        <p className="cursor-pointer">+923091755617</p>
        <p className="cursor-pointer">ameen55668@gmail.com</p>
        <p className="cursor-pointer">Address goes here</p>
        <p className="cursor-pointer">Download Our App</p>
      </div>
      <div>
        <p>CoinBase Instagram</p>
        <div>
          <div></div>
          <div className="flex justify-center align-middle text-white text-[40px]">+</div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      <p className={style.copyR}>© 2019 Designed by Cr8tiv_yemmy</p>
      <div className={style.FooterDivs}>
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
      </div>
    </div>
  );
}

export default Footer;
