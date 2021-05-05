import React, { useEffect, useState } from "react";
import SubCategory from "../subcategory/SubCategory";
import ToggleButton from "../togglebutton/ToggleButton";
import s from "./styles.module.css";

export default function Category({ category, expand }) {
  const [subcategories, setSubCategories] = useState(null);
  const [isExpanded, setIsExpanded] = useState(expand);

  useEffect(() => {
    fetch("http://localhost:8000/sub-cat/")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data[category.catid]) {
          // console.log("subcat exists",data[category.catid]);
          setSubCategories(data[category.catid]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={s.category}>
      <div className={s.heading}>
        <h2>{category.title}</h2>
        <div className={s.actions}>
          <p>Availability</p>
          <ToggleButton />
          <span
            className={isExpanded ? s.blueColor : ""}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "-" : "+"}
          </span>
        </div>
      </div>
      <div className={isExpanded ? "" : s.collapse}>
        {subcategories &&
          subcategories.map((subcategory, index) => {
            return (
              <SubCategory
                key={subcategory.subcatid}
                subcategory={subcategory}
                expand={index === 0 ? true : false}
              />
            );
          })}
      </div>
    </div>
  );
}
