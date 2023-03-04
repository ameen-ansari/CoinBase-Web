import React from "react";
import style from "../../Styles/Header/BlogContentP.module.css";
import pathTYpe from "../../Images/Header/Path 4.png";

function BlogContentHeader() {
  return (
    <div className={`${style.Allparent}`}>
      <div className={`${style.parent} flex`}>
        <div>
          <p></p>
          <p>
            <span>ETH TO NAIRA EXCHANGE RATE IS NOW #400 PER Transactions</span>
          </p>
          <p>
          19 JUNE, 2019 | BUSINESS
          </p>
        </div>
      </div>
      <div>
        <img src={pathTYpe} alt="" />
      </div>
    </div>
  );
}

export default BlogContentHeader;
