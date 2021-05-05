import React, { useEffect, useState } from "react";
import ListItems from "../listitems/ListItems";
import ToggleButton from "../togglebutton/ToggleButton";
import s from "./styles.module.css";

export default function SubCategory({ subcategory, expand }) {
  const [items, setItems] = useState(null);
  const [isExpanded, setIsExpanded] = useState(expand);

  useEffect(() => {
    fetch("http://localhost:8000/items/")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        if (data[subcategory.subcatid]) {
          setItems(data[subcategory.subcatid]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={s.subCat}>
      <div className={s.heading}>
        <h3>{subcategory.name}</h3>
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
        {items &&
          items.map((item) => {
            return <ListItems key={item.itemid} item={item} />;
          })}
      </div>
    </div>
  );
}
