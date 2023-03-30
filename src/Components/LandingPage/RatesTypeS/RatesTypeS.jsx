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
        <div className={`${style.card}`}>
          <div className={style.cardHeader}>
            <div className="py-2">
              <div>
                <p className={style.gradient}>OUR RATES</p>
              </div>
              <div className={style.gradientType}>
                <p className={style.gradient}>OUR RESERVES</p>
              </div>
              <div className={style.gradientType}>
                <p className={style.gradient}>LATEST EXCHANGES</p>
              </div>
            </div>
          </div>
          <hr style={{ width: "100%" }}/>
          <div className=" mr-16 mt-2 flex justify-end items-end">
            <button>8 hours ago</button>
          </div>
          <div className={`${style.cardsParent} py-4 flex`}>
            {/* div1 */}
            <div
              style={{ flex: 1 }}
              className="flex flex-col gap-10 justify-center align-middle px-10"
            >
              <div className="flex justify-between items-center">
                <div className="flex gap-3">
                  <img src={btc} alt="" />
                  <p className="text-[14px] font-normal">BTC</p>
                </div>
                <div className="flex flex-col gap-5">
                  <p className="text-[14px] font-normal">
                    We Buy @{" "}
                    <span className="text-[14px] font-bold">₦350/$</span>
                  </p>
                  <p className="text-[14px] font-normal">
                    We Sell @{" "}
                    <span className="text-[14px] font-bold">₦350/$</span>
                  </p>
                </div>
              </div>
              <div className="flex justify-between  items-center">
                <div className="flex gap-3">
                  <img src={eth} alt="" />
                  <p className="text-[14px] font-normal">ETH</p>
                </div>
                <div className="flex flex-col  gap-5">
                  <p className="text-[14px] font-normal">
                    We Buy @{" "}
                    <span className="text-[14px] font-bold">₦350/$</span>
                  </p>
                  <p className="text-[14px] font-normal">
                    We Sell @{" "}
                    <span className="text-[14px] font-bold">₦350/$</span>
                  </p>
                </div>
              </div>
            </div>
            {/* div2 */}
            {/* <div className={style.cardHeader}> */}
            <div
              className={`${style.heading} py-2 flex justify-center items-center`}
            >
              <div className="py-2">
                <p className={style.gradient}>OUR RESERVES</p>
              </div>
              <hr style={{ width: "100%" }} />

              {/* </div> */}
            </div>
            <div
              style={{ flex: 1 }}
              className="flex flex-col gap-10 justify-center align-middle px-10"
            >
              <div className="flex justify-between items-start pt-10">
                <div className="flex gap-3 items-center">
                  <img src={bb} alt="" />
                  <p className="text-[14px] font-normal">Bank Transfer</p>
                </div>
                <div className="flex flex-col gap-4 items-end">
                  <p className="text-[14px] font-normal">NGN</p>
                  <p className="text-[14px] font-bold">#3452030300303.24/$</p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-3 items-center">
                  <img src={btc} alt="" />
                  <p className="text-[14px] font-normal">Bitcoin</p>
                </div>
                <p className="text-[14px] font-normal">
                  <span className="text-[14px] font-bold">399.98</span>
                  BTC
                </p>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-3 items-center">
                  <img src={eth} alt="" />
                  <p className="text-[14px] font-normal">Ethereum</p>
                </div>
                <p className="text-[14px] font-normal">
                  <span className="text-[14px] font-bold">1000.00</span> ETH
                </p>
              </div>
            </div>
            {/* div3 */}
            {/* <div className={style.cardHeader}> */}
            <div
              className={`${style.heading} py-10 flex justify-center items-center`}
            >
              <div className="py-2">
                <p className={style.gradient}>LATEST EXCHANGES</p>
              </div>
              <hr style={{ width: "100%" }} />
              {/* </div> */}
            </div>
            <div
              style={{ flex: 1 }}
              className="flex flex-col gap-5 justify-center align-middle px-10"
            >
              <div className="flex">
                <p className="text-[14px] font-normal">Bitcoin BTC</p>

                <img
                  className={style.arrows}
                  width={10}
                  height={10}
                  src={arrow}
                  alt=""
                />
                {/* <span>&rarr;</span> */}
                <p className="text-[14px] font-normal">Bank Transfer NGN</p>
              </div>
              <div className="flex">
                <p className="text-[14px] font-bold">
                  1.6<span className="text-[14px] font-normal">BTC</span>
                </p>
                <img
                  className={style.arrows}
                  width={10}
                  height={10}
                  src={darrow}
                  alt=""
                />
                <p className="text-[14px] font-bold">
                  696152299929.23
                  <span className="text-[14px] font-normal">NGN</span>
                </p>
              </div>
              <hr />
              <div className="flex">
                <p className="text-[14px] font-normal">Amazon Card</p>
                {/* <span>&rarr;</span> */}
                <img
                  className={style.arrows}
                  width={10}
                  height={10}
                  src={arrow}
                  alt=""
                />
                <p className="text-[14px] font-normal">Bank Transfer NGN</p>
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
