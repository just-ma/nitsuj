import React from "react";
import { Link } from "react-router-dom";
import "./InfoPage.scss";

export default function InfoPage() {
  return (
    <div className="info">
      <div className="info__content">info content</div>
      <Link className="info__back" to="/">
        {"<BACK"}
      </Link>
    </div>
  );
}
