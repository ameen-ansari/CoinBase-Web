import React from "react";
import style from "../../Styles/BlogPage/BlogPHeader.module.css";
import img from "../../Images/BlogP/IMG (2).png";
import pathTYpe from "../../Images/Header/Path 4.png";

function BlogPageHeader() {
  return (
    <div id="nav2" className={`${style.Allparent}`}>
      <div className={`${style.parent} flex`}>
        <div>
          <p>HOME/Blog</p>
          <p>
            <span>Stay updated, Never miss a post.</span>
          </p>
          <p>
            Get to know the latest stuff about our services via our blog post.
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
  );
}

export default BlogPageHeader;
