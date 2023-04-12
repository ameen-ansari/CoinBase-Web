import React from "react";
import style from "../../Styles/BlogContentPage/BlogContentP.module.css";
import pathTYpe from "../../Images/Header/Path 4.png";
import BGTYpe from "../../Images/BlogContent/BG (1).svg";

function BlogContentHeader() {
  return (
    <div id="nav2" className={`${style.Allparent} xl:pb-24`}>
      <div className={`${style.parent} flex justify-center items-center text-center mx-auto relative z-10 w-[80%]`}>
        <div>
          <p></p>
          <p>
            <span className="text-[18px] leading-[22px] font-bold md:text-[32px] text-[#FFFFFF] md:leading-[45px] ">ETH TO NAIRA EXCHANGE RATE IS NOW #400 PER Transactions</span>
          </p>
          <p className="font-normal text-[10px] text-[#FFFFFF] leading-[20px]">19 JUNE, 2019 | BUSINESS</p>
        </div>
      </div>
      <img className="w-[100%] absolute top-0 left-0 z-0" style={{zIndex:-10}} src={BGTYpe} alt="" />
      <img className="w-[100%] absolute bottom-[-3%] left-0" style={{zIndex:-10}} src={pathTYpe} alt="" />
    </div>
  );
}

export default BlogContentHeader;
