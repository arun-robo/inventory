import React, { useEffect, useRef, useState } from "react";
import s from "./styles.module.css";
import edit from "../../assets/edit.png";

export default function ListItems({ item }) {
  const [isEdit, setIsEdit] = useState(false);
  const [unlimited, setUnlimited] = useState(false);

  const stockRef = useRef(null);
  const errRef = useRef(null);

  useEffect(() => {
    stockRef.current.textContent = item.stocks;
  }, []);

  const handleEdit = () => {
    setIsEdit(true);
    stockRef.current.textContent = "";
  };

  const handleSave = () => {
    const stck = stockRef.current.textContent;
    console.log(stck, unlimited);
    if (!unlimited && stck === "") {
      errRef.current.textContent = "Please input fields";
    } else if (!unlimited && stck !== "") {
      setIsEdit(false);
    } else if (unlimited) {
      stockRef.current.textContent = "unlimited";
      setIsEdit(false);
    }
  };

  const handleStock = (e) => {
    console.log(e.target);
  };

  return (
    <ul className={s.itemrow}>
      <li>{item.item}</li>
      <li>{item.color}</li>
      <li>{item.options}</li>
      <li>{item.skuid}</li>
      <li
        contentEditable={isEdit}
        ref={stockRef}
        className={isEdit ? s.stocksField : ""}
      ></li>
      {isEdit ? (
        <li>
          <input
            type="checkbox"
            id="unlimited"
            onChange={() => setUnlimited(!unlimited)}
            checked={unlimited}
          />
          <label htmlFor="unlimited"> Unlimited</label>
          <span ref={errRef} className={s.errMsg}></span>
        </li>
      ) : (
        <li></li>
      )}

      <li>
        {!isEdit && <img src={edit} alt="edit-icon" onClick={handleEdit} />}
        {isEdit && <button onClick={handleSave}>Save</button>}
      </li>
    </ul>
  );
}
