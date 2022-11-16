import React from "react";
import style from "./style.module.css";

export default function SettingsWindow(props) {
  return (
    <div className={style.settingsWindow}>
      <div>Settings</div>
      <div>
        Sound : on <br />
        Music : off <br />
        About us <br />
        Contact <br />
      </div>
    </div>
  );
}
