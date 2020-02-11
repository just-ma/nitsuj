import React from "react";
import WiggleText from "../wiggleText/WiggleText";
import "./GridItem.scss";

const SizeButton = ({ title }) => {
  return <div className="sizeButton">{title}</div>;
};

export default function GridItem() {
  return (
    <div className="gridItem">
      <div className="gridItem__left">
        <WiggleText>BLUE CHINA</WiggleText>
        <span className="price">$25</span>
      </div>
      <div className="gridItem__right">
        <div className="gridItem__sizes">
          <SizeButton title="S" />
          <SizeButton title="M" />
          <SizeButton title="L" />
          <SizeButton title="XL" />
        </div>
      </div>
    </div>
  );
}
