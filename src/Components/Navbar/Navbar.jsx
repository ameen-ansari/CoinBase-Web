import logo from "../../Images/Navbar/Logo.svg";
// import indicator from "../../Images/Navbar/Indicator.png";
import style from "../../Styles/Navbar/Navbar.module.css";
import Button1 from "../Buttons/Button1";
import style1 from "../DropDown/Dropd.module.css";
import brg from "../../Images/Navbar/Group.svg";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  let pushSlash = () => {
    navigate("/");
    let offC = document.getElementById("offC");
    offC.style.bottom = "100%";
    offC.style.transition = "0.5s";
  };
  let pushAbout = () => {
    navigate("/about");
    let offC = document.getElementById("offC");
    offC.style.bottom = "100%";
    offC.style.transition = "0.5s";
  };
  let pushBlogs = () => {
    navigate("/blogs");
    let offC = document.getElementById("offC");
    offC.style.bottom = "100%";
    offC.style.transition = "0.5s";
  };
  let pushBlogsC = () => {
    navigate("/blogcontent");
    let offC = document.getElementById("offC");
    offC.style.bottom = "100%";
    offC.style.transition = "0.5s";
  };
  let showOffC = () => {
    let offC = document.getElementById("offC");
    offC.style.bottom = "0%";
    offC.style.transition = "0.5s";
  };
  let removeOffC = () => {
    let offC = document.getElementById("offC");
    offC.style.bottom = "100%";
    offC.style.transition = "0.5s";
  };
  return (
    <>
      <div className={style.NavbarP}>
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
          <div className={style.home}>
            <p onClick={pushSlash}>Home</p>
            {/* <img src={indicator} alt="" /> */}
          </div>
          <p onClick={pushAbout}>About Us</p>
          <p onClick={pushBlogs}>Blogs</p>
          <p className={`${style1.dropdown} ${style.dropdown}`}>
            <p>More</p>
            <ul className={`${style1.dropdownC}`}>
              <li>
                <p onClick={pushSlash}>Home</p>
              </li>
              <li>
                <p onClick={pushAbout}>About</p>
              </li>
              <li>
                <p onClick={pushBlogs}>Blogs</p>
              </li>
              <li>
                <p onClick={pushBlogsC}>Contact Us</p>
              </li>
            </ul>
          </p>
          <p onClick={pushBlogsC}>Contact Us</p>
        </div>
        <div>
          <div>
            <p>Sell Bitcoin/ Giftcard&#9660;</p>
          </div>
          <Button1
            value="LOGIN"
            color="white"
            bgColor="linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)"
          />
        </div>
      </div>
      <div className={style.resNP}>
        <div className={style.resN}>
          <div>
            <img src={logo} alt="" />
          </div>
          <div>
            <img id="brg" onClick={showOffC} src={brg} alt="" />
          </div>
        </div>
      </div>
      <div id="offC" className={style.offcanvas}>
        <div>
          <p className={style.cencel} onClick={removeOffC}>X</p>
          <p onClick={pushSlash}>Home</p>
          <p onClick={pushAbout}>About</p>
          <p onClick={pushBlogs}>Blogs</p>
          <p onClick={pushBlogsC}>Contact Us</p>
          <Button1
            value="LogIn"
            color="white"
            bgColor="linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)"
          />
        </div>
      </div>
    </>
  );
}

export default Navbar;
