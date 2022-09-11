import React from "react";
import UserInBarGroup from "./UserInBarGroup";
import HelpInBarGroup from "./HelpInBarGroup";
import SettingsInBarGroup from "./SettingsInBarGroup";

export default function BarGroup(props) {
  const userIcon = props.userIcon;
  const setUserIcon = props.setUserIcon;
  const helpIcon = props.helpIcon;
  const setHelpIcon = props.setHelpIcon;
  const settingsIcon = props.settingsIcon;
  const setSettingsIcon = props.setSettingsIcon;

  return (
    <label htmlFor="BarGroup1" className="BarGroup1">
      <div className="logo">
        {helpIcon && <h3>PUZZLE ME</h3>}
        <img src="./pic/logo-icon.png" />
      </div>
      <div className="userClick">
        <UserInBarGroup userIcon={userIcon} setUserIcon={setUserIcon} />
      </div>
      <label className="BarGroup1-2">
        <div className="helpClick">
          <HelpInBarGroup helpIcon={helpIcon} setHelpIcon={setHelpIcon} />
        </div>
        <div className="settingsClick">
          <SettingsInBarGroup
            settingsIcon={settingsIcon}
            setSettingsIcon={setSettingsIcon}
          />
        </div>
      </label>
    </label>
  );
}
