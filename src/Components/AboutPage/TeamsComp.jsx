import style from "../../Styles/AboutPage/TeamsComp.module.css";
import React from "react";
import ind from "../../Images/Navbar/Indicator.png";
import tree from "../../Images/TeamsComp/Tree.png";

function TeamsComp() {
  return (
    <>
      <div className={style.P1}>
        <div>
          <p>Our history</p>
          <img src={ind} alt="" />
        </div>
        <div className={style.CardP}>
          <div>
            <div>
              <p>May 2010</p>
              <p>
                sollicitudin rhoncus, rhoncus eget sem. Curabitur aliquam tellus
                eu nisl suscipit, at vestibulum ex rutrum. Nulla facilisi. Cras
                ullamcorper pellentesque orci, nec vestibulum nibh.uspendisse
              </p>
            </div>
            <div></div>
          </div>
          <div>
            <div>
              <p>May 2015</p>
              <p>
                sollicitudin rhoncus, rhoncus eget sem. Curabitur aliquam tellus
                eu nisl suscipit, at vestibulum ex rutrum. Nulla facilisi. Cras
                ullamcorper pellentesque orci, nec vestibulum nibh.uspendisse
              </p>
            </div>
            <div></div>
          </div>
          <div>
            <div>
              <p>May 2020</p>
              <p>
                sollicitudin rhoncus, rhoncus eget sem. Curabitur aliquam tellus
                eu nisl suscipit, at vestibulum ex rutrum. Nulla facilisi. Cras
                ullamcorper pellentesque orci, nec vestibulum nibh.uspendisse
              </p>
            </div>
            <div></div>
          </div>
          <img className={style.tree} src={tree} alt="" />
        </div>
      </div>
      <div className={style.P2}>
        <div>
          <p>Meet the team</p>
          <img src={ind} alt="" />
        </div>
        <p>
          Meet the team that makes the process of this system fast and painless
          as possible to provide you with good result
        </p>
        <div className={style.CardInTeam}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default TeamsComp;
