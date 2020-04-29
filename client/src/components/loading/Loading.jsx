import React from "react";
import WiggleText from "../wiggleText/WiggleText";
import "./Loading.scss";

export default function Loading() {
  return (
    <div className="loading">
      <WiggleText>LOADING...</WiggleText>
    </div>
  );
}
