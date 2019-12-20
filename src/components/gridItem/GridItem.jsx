import React from "react";
import WiggleText from "../wiggleText/WiggleText";
import "./GridItem.scss";

export default function GridItem() {
  return (
    <div className="listItem">
      <div className="listItem__left">
        <WiggleText>BLUE CHINA</WiggleText>
        <span className="price">$25</span>
      </div>
      <div className="listItem__right">

      </div>
    </div>
  );
}
