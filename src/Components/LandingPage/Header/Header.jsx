import React from "react";
import style from '../../../Styles/LandingPage/Header/Header.module.css'
import img from "../../../Images/Header/IMG.png";
import pathTYpe from "../../../Images/Header/Path 4.png";
import Button1 from "../../Buttons/Button1";
import botomH from "../../../Images/Header/Layer 2.png";
import indicator from "../../../Images/Navbar/Indicator.png";
import img1 from "../../../Images/LandingPage/RatesTypeS/Path 4 (1).png";

function Header() {
  return (
    <>
    <div className={style.dropD}>
      <p>Sell Bitcoin</p>
      <p>Sell Giftcard</p>
    </div>
      <div id="nav2" className={`${style.Allparent}`}>
        <div className={`${style.parent} flex`}>
          <div>
            <p  className='xl:w-[85%]'>
              We provide easy solution to exchange your
              <span> Bitcoin/ GiftCard for money</span>
            </p>
            <p className='xl:w-[80%]'>
              CoinBase is a platform for trading your bitcoin and giftcard at
              the best rate, why not give us a trial.
            </p>
            <div>
              <p className="cursor-pointe ">GET STARTED</p>
            </div>
          </div>
          <div>
            <img src={img} alt="" />
          </div>
        </div>
        <div>
          <img src={pathTYpe} alt="" />
        </div>
      </div>
      <div className={style.headerBottomSideP}>
        <div>
          <img src={botomH} alt="" />
        </div>
        <div>
          <div>
            <p className={style.wel}>Welcome to Coinbase</p>
            <img src={indicator} alt="" />
          </div>
          <p className='pb-[1rem]'>
            We have the best rates . Simply start your exchange right now. Sign
            up for our Affiliate program and earn commission from each exchange.
            The earnings are credited in your account instantly and can be
            withdrawn right away. Also note some exchange directions are hidden
            for unregistered user. To ensure to have access to all our exchange
            directions and benefits kindly sign up and verify your identity.
          </p>
          <Button1
            value="Discover"
            color="white"
            bgColor="linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)"
          />
        </div>
        {/* <img src={img1} className="absolute bottom-[-50%] w-[100%] left-0" alt="" /> */}
      </div>
    </>
  );
}

export default Header;
