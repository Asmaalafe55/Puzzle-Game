import React from "react";

export default function ChooseLevelGroup(props) {
  const easy = props.easy;
  const setEasy = props.setEasy;
  const middle = props.middle;
  const setMiddle = props.setMiddle;
  const hard = props.hard;
  const setHard = props.setHard;

  // const [isEasyActive, setIsEastActive] = React.useState(false);
  // const [isMiddleActive, setIsMiddletActive] = React.useState(false);
  // const [isHardActive, setIsHardActive] = React.useState(false);

  const handleEasyClick = () => {
    setEasy(!easy);
    setMiddle(false);
    setHard(false);
  };
  const handleMiddleClick = () => {
    setEasy(false);
    setMiddle(!middle);
    setHard(false);
  };
  const handleHardClick = () => {
    setEasy(false);
    setMiddle(false);
    setHard(!hard);
  };

  const divEasyStyle = {
    backgroundColor: easy ? "#42032C" : null,
    color: easy ? "#D36B00" : null,
  };
  const divMiddleStyle = {
    backgroundColor: middle ? "#42032C" : null,
    color: middle ? "#D36B00" : null,
  };
  const divHardStyle = {
    backgroundColor: hard ? "#42032C" : null,
    color: hard ? "#D36B00" : null,
  };

  return (
    <div className="chooseLevelWithLevels">
      <div className="ChooseLevel">Choose Level</div>
      <div className="levels">
        <div
          className="easyLevel"
          style={divEasyStyle}
          onClick={handleEasyClick}
        >
          Easy
        </div>

        <div
          className="middleLevel"
          style={divMiddleStyle}
          onClick={handleMiddleClick}
        >
          Middle
        </div>

        <div
          className="hardLevel"
          style={divHardStyle}
          onClick={handleHardClick}
        >
          Hard
        </div>
      </div>
    </div>
  );
}
