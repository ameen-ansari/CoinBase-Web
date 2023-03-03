import logo from "../../Images/Navbar/Logo.png";
import indicator from "../../Images/Navbar/Indicator.png";
import dropD from "../../Images/Navbar/Dropdown Button.png";
import style from "../../Styles/Navbar/Navbar.module.css";
import Button1 from "../Buttons/Button1";
import style1 from "../DropDown/Dropd.module.css";
import brg from "../../Images/Navbar/Group.png";
// import DropDown from "../DropDown/DropDown";

function Navbar() {
  return (
    <>
      <div className={style.NavbarP}>
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
          <div>
            <p>Home</p>
            <img src={indicator} alt="" />
          </div>
          {/* <DropDown /> */}
          <p>About Us</p>
          <p>Blogs</p>
          <p className="my-50">Contact Us</p>
          <p className={style1.dropdown}>
            <p>Dropdown</p>
            <ul className={`${style1.dropdownC}`}>
              <li>
                <p>Option 0110</p>
              </li>
              <li>
                <p>Option 0110</p>
              </li>
              <li>
                <p>Option 0110</p>
              </li>
            </ul>
          </p>
        </div>
        <div>
          <div>
            <p>Sell Bitcoin/ Giftcard</p>
            <img src={dropD} alt="" />
          </div>
          <Button1
            value="LOGIN"
            color="white"
            bgColor=" linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)"
          />
        </div>
      </div>
      <div className={style.resNP}>
        <div className={style.resN}>
          <div>
            <img src={logo} alt="" />
          </div>
          <div>
            <img src={brg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
