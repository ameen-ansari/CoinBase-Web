import React, { useState } from "react";
import style from "./Dropd.module.css";

export default function DropDown() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className={style.par}>
      <p className={style.dropdown} onClick={toggleDropdown}>
        <p>More </p>
        <ul className={`${style.dropdownC} ${showDropdown ? "show" : ""}`}>
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
  );
}
