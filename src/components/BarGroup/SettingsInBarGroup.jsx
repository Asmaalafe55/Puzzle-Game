import React from "react";
import SettingsWindow from "../popUp/SettingsWindow";

export default function SettingsInBarGroup(props) {
  const settingsIcon = props.settingsIcon;
  const setSettingsIcon = props.setSettingsIcon;
  const settingsClick = () => setSettingsIcon(!settingsIcon);

  return (
    <label htmlFor="idn" className="idn">
      <img
        src="/pic/settings-icon.png"
        onClick={() => {
          settingsClick();
        }}
      />
      {settingsIcon && <SettingsWindow props={props} />}
    </label>
  );
}
