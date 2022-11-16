import React from "react";
import "./BoardStyle.css";

export default function EmptyBoard(props) {
  return (
    <div>
      <div
        className="backgroundBoard"
        style={{
          backgroundColor: "#F0F8FF",
          opacity: 0.5,
        }}
      >
        empty board
      </div>
    </div>
  );
}
