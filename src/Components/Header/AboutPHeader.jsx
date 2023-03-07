import style from "../../Styles/Header/AboutPHeader.module.css";
import pathTYpe from "../../Images/Header/Path 4.png";
import img from "../../Images/Header/IMG (1).png";
import indicator from "../../Images/Navbar/Indicator.png";
import CliImg from "../../Images/Header/Layer 2.png";
import img2 from "../../Images/Header/medal.png";
import img4 from "../../Images/Header/support.png";
import img3 from "../../Images/Header/customer-review.png";
import img1 from "../../Images/Header/Quality.png";

function AboutPHeader() {
  return (
    <>
      <div id="nav2" className={`${style.Allparent}`}>
        <div className={`${style.parent} flex`}>
          <div>
            <p>HOME/About Us</p>
            <p>
              <span>Great service, Professional support</span>
            </p>
            <p>
              CoinBase is a platform for trading your bitcoin and giftcard at
              the best rate, why not give us a trial.
            </p>
          </div>
          <div>
            <img src={img} alt="" />
          </div>
        </div>
        <div>
          <img src={pathTYpe} alt="" />
        </div>
      </div>
      <div className={style.P2}>
        <div>
          <p className={style.wel}>
            “Morbi sagittis ultricies ex, a tempus lorem suscipit non. Donec
            semper leo ut lobortis condimentum. Orci varius natoque penatibus et
            magnis”
          </p>
          <img src={indicator} alt="" />
          <p>Ramon Ridwan • CEO CoinBase</p>
        </div>
      </div>
      <div className={style.P3}>
        <div>
          <img src={CliImg} alt="" />
          <div>
            <p>About CoinBase</p>
            <img src={indicator} alt="" />
          </div>
          <p>
            CoinBase is an online site and a p2admin platform that allows users
            to buy, sell and/ or exchange digital and fiat assets safely. Owned
            and managed by CoinBase Business Services established and
            Incoperated in Nigeria.
          </p>
          <div>
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutPHeader;
