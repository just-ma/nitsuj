import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./Image.scss";

const Gallery = ({ images, onClick }) => {
  const imageClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="gallery" onClick={onClick}>
      <div className="gallery__column">
        {images.map((i) => (
          <img
            key={i}
            className="gallery__image"
            src={i}
            style={{ height: 0.85 * window.innerHeight }}
            onClick={imageClick}
            alt="close-up"
          />
        ))}
      </div>
    </div>
  );
};

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
      <div className="modal__background" />
      <Gallery images={images} onClick={onClick} />
      <div className="modal__back" onClick={onClick}>
        {"<BACK"}
      </div>
    </div>,
    rootRef.current
  );
};

export default function Image({ primary, secondary, remainder, zoom }) {
  const [hover, setHover] = useState(false);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    document.getElementsByTagName("BODY")[0].style.overflow = modal
      ? "hidden"
      : "scroll";
  }, [modal]);

  const onEnter = () => {
    if (secondary) setHover(true);
  };

  const onLeave = () => {
    if (secondary) setHover(false);
  };

  const onClick = () => {
    if (zoom) setModal(true);
  };

  let images = [primary];
  if (secondary) images.push(secondary);
  images.push(...remainder);

  return (
    <div
      className={"wrapper" + (zoom ? " -zoom" : "")}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onClick={onClick}
    >
      {hover ? (
        <img className="image -secondary" src={secondary} alt="secondary" />
      ) : (
        <img className="image -primary" src={primary} alt="primary" />
      )}
      {modal && <Modal setModal={setModal} images={images} />}
    </div>
  );
}
