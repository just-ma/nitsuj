import React from "react";
import "./WiggleText.scss";

export default function WiggleText({ children }) {
  const arr = children.split("");
  const offset = Math.random() * 5;

  const getLeft = i => {
    return i * 12;
  };

  const getDelay = i => {
    return `${i * 0.2 - 20 + offset}s`;
  };

  return (
    <div>
      {arr.map((c, i) => (
        <div className="charContainer" style={{ left: getLeft(i) }}>
          <div className="char" style={{ animationDelay: getDelay(i) }}>
            {c}
          </div>
        </div>
      ))}
    </div>
  );
}
