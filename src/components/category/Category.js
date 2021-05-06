import React, { useEffect, useState } from "react";
import SubCategory from "../subcategory/SubCategory";
import ToggleButton from "../togglebutton/ToggleButton";
import s from "./styles.module.css";

export default function Category({ categoryid, title, expand, availability }) {

  const [subcategories, setSubCategories] = useState(null);
  const [isExpanded, setIsExpanded] = useState(expand);

  useEffect(() => {
    fetch("http://localhost:8000/subcategories?categoryid=" + categoryid, {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        data.length && setSubCategories(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const toggleAvailability = (s) =>{

    const data = {
      availability : s
    }

    fetch("http://localhost:8000/categories/"+categoryid,{
      method: "PATCH",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        console.log("category availability updated");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className={s.category}>
      <div className={s.heading}>
        <h2>{title}</h2>
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
        {subcategories &&
          subcategories.map((subcategory, index) => {
            return (
              <SubCategory
                key={subcategory.id}
                subcategoryid={subcategory.id}
                title={subcategory.title}
                availability={subcategory.availability}
                expand={index === 0 ? true : false}
              />
            );
          })}
      </div>
    </div>
  );
}
