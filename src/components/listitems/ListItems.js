import React, { useEffect, useRef, useState } from "react";
import s from "./styles.module.css";
import edit from "../../assets/edit.png";

export default function ListItems({ item }) {
  const [stock, setstock] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [unlimited, setUnlimited] = useState(false);
  const errRef = useRef(null);

  useEffect(() => {
    const s = parseInt(item.stocks);

    if (isNaN(s)) {
      setstock(item.stocks);
      setUnlimited(true);
    } else {
      setstock(s);
    }
  }, []);

  const handleCheckbox = (e) => {
    setUnlimited(e.target.checked);
  };

  const stockChange = (e) => {
    setstock(e.target.value);
  };

  const handleEdit = () => {
    setIsEdit(true);
    setstock("");
  };

  const handleSave = () => {
    if (unlimited) {
      setstock("unlimited");
      submitChanges("unlimited");
    } else {
      if (stock === "") {
        errRef.current.textContent = "Please input fields";
      } else {
        
        submitChanges(stock);
      }
    }
  };

  const submitChanges = (stockData) => {
    const data = {
      stocks: stockData,
    };

    fetch("http://localhost:8000/items/" + item.id, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
    .then(()=>{
      setIsEdit(false);
    })
    .catch(err=>{
      console.log(err);
      errRef.current.textContent = "Some error occured";
    });
  };

  return (
    <div className={s.itemrow}>
      <p>{item.item}</p>
      <p>{item.color}</p>
      <p>{item.options}</p>
      <p>{item.skuid}</p>
      <input
        type="text"
        className={isEdit ? s.stocksField : ""}
        value={stock}
        onChange={stockChange}
        placeholder="Enter Value"
      />
      {isEdit && (
        <>
          <div className={s.unlimited}>
            <input
              type="checkbox"
              onChange={handleCheckbox}
              checked={unlimited}
            />
            <label htmlFor="unlimited"> Unlimited</label>
            <span ref={errRef} className={s.errMsg}></span>
          </div>
          <button className={s.savebtn} onClick={handleSave}>
            Save
          </button>
        </>
      )}
      {!isEdit && (
        <>
          <p></p>
          <img
            className={s.edit}
            src={edit}
            alt="edit-icon"
            onClick={handleEdit}
          />
        </>
      )}
    </div>
  );
}
