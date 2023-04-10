import style from "../../../Styles/LandingPage/Blogs/Blogs.module.css";
import ind from "../../../Images/Navbar/Indicator.png";
import Button from "../../Buttons/Button1";
import img from "../../../Images/LandingPage/Blogs/Path 4.2.png";
import HC from "../../../Images/LandingPage/Blogs/Happy Customers.png";
import HC2 from "../../../Images/LandingPage/Blogs/Testimonial (1).svg";
import nimg from "../../../Images/LandingPage/RatesTypeS/Path 4 (1).png";

function Blogs() {
  return (
    <div className={style.parent}>
      <div>
        <div className={style.div1}>
          <p>Our Blog</p>
          <img src={ind} alt="" />
        </div>
        <p>Get to know the latest stuff via our blog post.</p>
        <div className={style.cardsP}>
          <div>
            <p>01 FEB, 2019 | TECHNOLOGY</p>
            <p>HOW TO SELL YOUR ITUNES GIFTCARD WITH US .</p>
            <p>
              Lorem ipsum dolor sit amet, magna habemus ius ad, qui minimum
              voluptaria in. Ad mei modus quodsi complectitur, postea...
            </p>
            <Button value="READ MORE" color="white" bgColor="#888888" />
          </div>
          <div>
            <p>01 FEB, 2019 | TECHNOLOGY</p>
            <p>ETH TO NAIRA EXCHANGE 
RATE IS NOW #400 PER...</p>
            <p>
              Lorem ipsum dolor sit amet, magna habemus ius ad, qui minimum
              voluptaria in. Ad mei modus quodsi complectitur, postea...
            </p>
            <Button
              value="READ MORE"
              color="white"
              bgColor="linear-gradient(178.18deg, #fd749b -13.56%, #281ac8 158.3%)"
            />
          </div>
          <div>
            <p>01 FEB, 2019 | TECHNOLOGY</p>
         
<p>EXCHANGE 5 PRODUCTS & 
GET 1 FREE PRODUCT.</p>
            <p>
              Lorem ipsum dolor sit amet, magna habemus ius ad, qui minimum
              voluptaria in. Ad mei modus quodsi complectitur, postea...
            </p>
            <Button value="READ MORE" color="white" bgColor="#888888" />
          </div>
        </div>
      </div>
      <div className={style.clientSecP}>
        <img src={nimg} alt="" />
        <div className={style.clientSecPChild}>
          <div>
            <p>10,000 Satisfied clients around the world</p>
            <img src={ind} alt="" />
            <p>
              Yeah! we’re proud with numbers. We’ve helped thousands of clients
              all around the world with our bespoke service. Hover ontop of them
              pic to view their testimonials.
            </p>
          </div>
          <div className="relative">
            <img src={HC} alt="" />
            <img className="absolute right-0 bottom-1/4 w-1/4 h-1/4" src={HC2} alt="" />
          </div>
        </div>
        <img src={img} alt="" />
      </div>
    </div>
  );
}

export default Blogs;
