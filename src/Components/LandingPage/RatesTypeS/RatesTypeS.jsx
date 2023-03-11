import style from "../../../Styles/LandingPage/RatesType/RatesTypeS.module.css";
import img1 from "../../../Images/LandingPage/RatesTypeS/Path 4 (1).png";
import img2 from "../../../Images/LandingPage/RatesTypeS/Path 4.1.png";
import btc from "../../../Images/LandingPage/RatesTypeS/bitcoin.png";
import Button1 from "../../Buttons/Button1";
import botomH from "../../../Images/LandingPage/RatesTypeS/Ñëîé 1 1 (1).png";
import indicator from "../../../Images/Navbar/Indicator.png";
import arrow from "../../../Images/LandingPage/RatesTypeS/Transfer.png";
import darrow from "../../../Images/LandingPage/RatesTypeS/Double transfer.png";
import eth from "../../../Images/LandingPage/RatesTypeS/Eth.png";
import bb from "../../../Images/LandingPage/RatesTypeS/bank-building.png";

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
                <div className={style.littelCard}>
                  <div>
                    <div>
                      <img src={btc} alt="bitcoin" />
                      <p>BTC</p>
                    </div>
                    <div>
                      <p>We Buy @ ₦350/$</p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <img src={btc} alt="bitcoin" />
                      <p>Bitcoin</p>
                    </div>
                    <p>NGN</p>
                  </div>
                  <div>
                    <div>
                      <p>
                        BitCoin BTC
                        <img src={arrow} alt="bitcoin" />
                      </p>
                    </div>
                    <p>Bank transfer NGN</p>
                  </div>
                </div>
                <div>
                  <div>
                    {/* <p>We Buy @ ₦350/$</p> */}
                  </div>
                  <div>
                    {/* <p>#3452030300303.24/$</p> */}
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
            <div className={style.cardBody}>
              <div>
                <div className={style.littelCard}>
                  <div>
                    <div>
                      <img src={eth} alt="bitcoin" />
                      <p>ETH</p>
                    </div>
                    <div>
                      <p>We Buy @ ₦350/$</p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <img src={bb} alt="bitcoin" />
                      <p>Bank Transfer</p>
                    </div>
                    <p>399.98 BTC</p>
                  </div>
                  <div>
                    <div>
                      <p>
                      1.16 BTC
                        <img src={darrow} alt="bitcoin" />
                      </p>
                    </div>
                    <p>696152299929.23 NGN</p>
                    {/* <p></p> */}
                  </div>
                </div>
                <div>
                  <div>
                    {/* <p>We Buy @ ₦350/$</p> */}
                  </div>
                  <div>
                  </div>
                  <div></div>
                </div>
              </div>
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
            <p className={style.gewc}>Great Experience with Coinbase</p>
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
