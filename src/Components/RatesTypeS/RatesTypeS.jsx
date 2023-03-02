import React from "react";
import style from "../../Styles/RatesType/RatesTypeS.module.css";
import img1 from "../../Images/RatesTypeS/Path 4 (1).png";
import img2 from "../../Images/RatesTypeS/Path 4.1.png";
import btc from "../../Images/RatesTypeS/bitcoin.png";
import Button1 from "../Buttons/Button1";
import botomH from "../../Images/RatesTypeS/Ñëîé 1 1 (1).png";
import indicator from "../../Images/Navbar/Indicator.png";
import wel from "../../Images/RatesTypeS/xy.png";

function RatesTypeS() {
  return (
    <>
      <div className={style.parent}>
        <img src={img1} alt="" />
        <div className={style.card}>
          <div className={style.cardHeader}>
            <div>
              <div>
                <p className={style.gradient}>OUR RATES</p>
              </div>
              <div>
                <p className={style.gradient}>OUR RESERVES</p>
              </div>
              <div>
                <p className={style.gradient}>LATEST EXCHANGES</p>
              </div>
            </div>
          </div>

          <hr style={{ width: "100%" }} />

          <div className={style.cardBodyP}>
            <div className={style.cardBody}>
              <div>
                <div>
                  <img src={btc} alt="bitcoin" />
                  <p>BTC</p>
                  <p>We Buy @ ₦350/$</p>
                </div>
                <div>
                  <img src={btc} alt="bitcoin" />
                  <p>BTC</p>
                  <p>We Buy @ ₦350/$</p>
                </div>
                <div>
                  <img src={btc} alt="bitcoin" />
                  <p>BTC</p>
                  <p>We Buy @ ₦350/$</p>
                </div>
              </div>
              <h1>Work Later</h1>
              {/* <div>
              <div>
                <img src={btc} alt="bitcoin" />
                <p>BTC</p>
                <p>We Buy @ ₦350/$</p>
              </div>
              <div>
                <img src={btc} alt="bitcoin" />
                <p>BTC</p>
                <p>We Buy @ ₦350/$</p>
              </div>
              <div>
                <img src={btc} alt="bitcoin" />
                <p>BTC</p>
                <p>We Buy @ ₦350/$</p>
              </div>
            </div> */}
              {/* <div>
              <div>
                <img src={btc} alt="bitcoin" />
                <p>BTC</p>
                <p>We Buy @ ₦350/$</p>
              </div>
              <div>
                <img src={btc} alt="bitcoin" />
                <p>BTC</p>
                <p>We Buy @ ₦350/$</p>
              </div>
              <div>
                <img src={btc} alt="bitcoin" />
                <p>BTC</p>
                <p>We Buy @ ₦350/$</p>
              </div>
            </div> */}
            </div>
          </div>
        </div>
        <img src={img2} alt="" />
      </div>
      <div className={style.headerBottomSideP}>
        <div>
          <img src={botomH} alt="" />
        </div>
        <div>
          <div>
            <img src={wel} alt="" />
            <img src={indicator} alt="" />
          </div>
          <p>
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
      </div>
    </>
  );
}

export default RatesTypeS;
