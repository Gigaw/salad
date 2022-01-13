import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../../store/actions/modal";
import "./styles.css";

function Modal() {
  const { isActive, info } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(closeModal());
  };
  return (
    <div
      className={isActive ? "modal modal--active" : "modal"}
      onClick={handleClick}
    >
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <p className="modal__title">{info.title}</p>
        <p className="modal__text">{info.text}</p>
        <button className="modal__button" onClick={handleClick}>
          OK
        </button>
      </div>
    </div>
  );
}

export default Modal;
