import React, { useState } from 'react'
import s from "./styles.module.css";
import on from "../../assets/on.png";
import off from "../../assets/off.png";

export default function ToggleButton() {

    const [isOn, setIsOn] = useState(true)

    return (
        <div className={s.holder} onClick={()=>setIsOn(!isOn)}>
           <img src={isOn?on:off} alt="on-icon" />
        </div>
    )
}
