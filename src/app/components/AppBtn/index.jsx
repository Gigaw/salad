import React from "react";
import "./styles.css";

function AppBtn({ text, addClass, onClick }) {
  return (
    <button className={"app-button " + addClass} type="button" onClick={onClick}>
      {text}
    </button>
  );
}

export default AppBtn;
