import React, { useState } from "react";
import s from "./styles.module.css";
import on from "../../assets/on.png";
import off from "../../assets/off.png";

export default function ToggleButton({ availability, toggleAvailability }) {
  const [isOn, setIsOn] = useState(availability);

  const handleToggle = () => {
    setIsOn(!isOn);
    toggleAvailability(!isOn);
  };

  return (
    <div className={s.holder} onClick={handleToggle}>
      <img src={isOn ? on : off} alt="on-icon" />
    </div>
  );
}
