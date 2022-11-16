import React from "react";
import UserWindow from "../popUp/UserWindow";

export default function UserInBarGroup(props) {
  const userIcon = props.userIcon;
  const setUserIcon = props.setUserIcon;
  const userClick = () => setUserIcon(!userIcon);
  return (
    <label htmlFor="idn" className="idn">
      <img
        src="/pic/user-icon.png"
        onClick={() => {
          userClick();
        }}
      />
      {userIcon && <UserWindow props={props} />}
    </label>
  );
}
