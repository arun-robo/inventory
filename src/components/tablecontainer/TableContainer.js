import React, { useEffect, useState } from "react";
import Category from "../category/Category";
import SearchBox from "../searchbox/SearchBox";
import s from "./styles.module.css";

export default function TableContainer() {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/categories")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setCategories(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={s.tableContainer}>
      <SearchBox />
      <ul className={s.columnName}>
        <li>ITEM NAME</li>
        <li>COLOR</li>
        <li>OPTIONS</li>
        <li>SKU ID</li>
        <li>STOCKS</li>
        <li></li>
        <li>ACTIONS</li>
      </ul>
      {categories &&
        categories.map((category, index) => {
          return (
            <Category
              key={category.catid}
              category={category}
              expand={index === 0 ? true : false}
            />
          );
        })}
    </div>
  );
}
