import React from "react";
import "./styles.css";

function ScreenDefHeader({ title, description }) {
  return (
    <div className="header">
      <h1 className="header__title">{title}</h1>
      <p className="header__description">{description}</p>
    </div>
  );
}

export default ScreenDefHeader;
