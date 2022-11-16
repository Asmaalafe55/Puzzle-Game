import React from "react";
import style from "./style.module.css";
export default function HelpWindow(props) {
  return (
    <div className={style.helpWindow}>
      <div>Instructions</div>
      <div>
        First of all, you need to choose any picture, then to choose which level
        you want to play, then you are ready to play!
      </div>
    </div>
  );
}
