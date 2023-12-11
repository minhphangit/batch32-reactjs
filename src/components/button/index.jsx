import React from "react";
import "./button.css";
export default function Button({ icon, name, classes, class_ic }) {
  return (
    <button className={`btn ${classes}`}>
      <span className={`ic ${class_ic}`}>{icon}</span>
      {name}
    </button>
  );
}
