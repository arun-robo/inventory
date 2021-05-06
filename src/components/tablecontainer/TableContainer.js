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
      <div className={s.columnName}>
        <p>ITEM NAME</p>
        <p>COLOR</p>
        <p>OPTIONS</p>
        <p>SKU ID</p>
        <p>STOCKS</p>
        <p></p>
        <p>ACTIONS</p>
      </div>
      {categories &&
        categories.map((category, index) => {
          return (
            <Category
              key={category.id}
              categoryid={category.id}
              title={category.title}
              availability={category.availability}
              expand={index === 0 ? true : false}
            />
          );
        })}
    </div>
  );
}
