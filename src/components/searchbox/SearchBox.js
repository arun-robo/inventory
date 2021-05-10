import React, { useState } from "react";
import { useDispatch } from "react-redux";
import searchIcon from "../../assets/Search.png";
import { setSearchParam } from "../../store/actions/searchAction";
import s from "./styles.module.css";

export default function SearchBox() {
  const [searchKey, setSearchKey] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setSearchKey(e.target.value);
  };

  const clearSearchParam = () => {
    setSearchKey("");
    dispatch(setSearchParam(null));
  }

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchKey !== "") {
      dispatch(setSearchParam(searchKey));
    }
  };

  return (
    <div className={s.searchBox}>
      <div className={s.boxGroup}>
        <img src={searchIcon} alt="search-icon" />
        <input
          type="text"
          placeholder="Search by Item Name, SKU id…"
          onChange={handleChange}
          value={searchKey}
        />
        <span onClick={clearSearchParam}>x</span>
      </div>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
