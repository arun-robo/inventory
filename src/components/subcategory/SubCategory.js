import React, { useEffect, useState } from "react";
import ListItems from "../listitems/ListItems";
import ToggleButton from "../togglebutton/ToggleButton";
import s from "./styles.module.css";

export default function SubCategory({ subcategoryid, title, expand, availability }) {
  const [items, setItems] = useState(null);
  const [isExpanded, setIsExpanded] = useState(expand);

  useEffect(() => {
    fetch("http://localhost:8000/items?subcategoryid=" + subcategoryid)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        data.length && setItems(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const toggleAvailability = (s) =>{

    const data = {
      availability : s
    }

    fetch("http://localhost:8000/subcategories/"+subcategoryid,{
      method: "PATCH",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        console.log("sub category availability updated");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className={s.subCat}>
      <div className={s.heading}>
        <h3>{title}</h3>
        <div className={s.actions}>
          <p>Availability</p>
          <ToggleButton availability={availability} toggleAvailability={toggleAvailability} />
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
            return <ListItems key={item.id} item={item} />;
          })}
      </div>
    </div>
  );
}
