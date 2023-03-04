import React from "react";
import style from '../../Styles/AboutPage/Form.module.css'
import ind from '../../Images/Navbar/Indicator.png'
import Button from '../Buttons/Button1'

function Form() {
  return (
    <div className={style.parent4}>
      <div>
        <p>Subscribe our newsletter</p>
        <img src={ind} alt="" />
      </div>
      <div>
        <p>
          Subscribe to our newsletter for daily/weekly update of our products
          and services.
        </p>
      </div>
      <div>
        <input type="text" placeholder="ameen55668@gmail.com" />
        <Button
          value="DISCOVER"
          bgColor="linear-gradient(178.18deg, #fd749b -13.56%, #281ac8 158.3%)"
          color="white"
        />
      </div>
    </div>
  );
}

export default Form;
