import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./Image.scss";

const Modal = ({ setModal, images }) => {
  const rootRef = useRef(document.createElement("div"));

  useEffect(() => {
    const parent = document.querySelector("#root");
    parent.appendChild(rootRef.current);
    return function removeEl() {
      rootRef.current.remove();
    };
  }, []);

  const onClick = (e) => {
    setModal(false);
    e.stopPropagation();
  };

  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal__background" onClick={onClick}/>
      <img className="modal__primary" src={images[0]} />
    </div>,
    rootRef.current
  );
};

export default function Image({ primary, secondary, remainder }) {
  const [hover, setHover] = useState(false);
  const [modal, setModal] = useState(false);

  const onEnter = () => {
    if (secondary) setHover(true);
  };

  const onLeave = () => {
    if (secondary) setHover(false);
  };

  const onClick = () => {
    setModal(true);
  };

  return (
    <div
      className="wrapper"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onClick={onClick}
    >
      {hover ? (
        <img className="image -secondary" src={secondary} alt="primary" />
      ) : (
        <img className="image -primary" src={primary} alt="secondary" />
      )}
      {modal && <Modal setModal={setModal} images={[primary]} />}
    </div>
  );
}
