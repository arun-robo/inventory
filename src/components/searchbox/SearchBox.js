import React from "react";
import searchIcon from "../../assets/Search.png";
import s from "./styles.module.css";

export default function SearchBox() {
  return (
    <div className={s.searchBox}>
      <div className={s.boxGroup}>
        <img src={searchIcon} alt="search-icon" />
        <input type="text" placeholder="Search by Item Name, SKU id…" />
        <span>x</span>
      </div>
      <button>Search</button>
    </div>
  );
}
