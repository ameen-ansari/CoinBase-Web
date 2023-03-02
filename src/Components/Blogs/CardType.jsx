import style from "../../Styles/Blogs/CardType.module.css";
import ind from "../../Images/Navbar/Indicator.png";
import img from "../../Images/Blogs/Gift cards.jpg";
import gbT from "../../Images/Blogs/Path 4.2.png";
import btc from "../../Images/Blogs/bitcoin (1).png";

function CardType() {
  return (
    <div className={style.parent}>
      <div className={style.cardC}>
        <div className={style.card}>
          <div>
            <p>Trade from anywhere</p>
            <img src={ind} alt="" />
          </div>
          <div>
            <div>
              <img src={btc} alt="" />
              <p>Bitcoin</p>
            </div>
            <div>
              <img src={img} alt="" />
              <p>Gift Cards</p>
            </div>
          </div>
        </div>
      </div>
      <img src={gbT} alt="" />
    </div>
  );
}

export default CardType;
