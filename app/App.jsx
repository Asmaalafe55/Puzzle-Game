import React from "react";
import BarGroup from "../components/BarGroup/BarGroup";
import ChoosePicGroup from "../components/ChoosePicGroup/ChoosePicGroup";
import ChooseLevelGroup from "../components/ChooseLevelGroup/ChooseLevelGroup";

function App() {
  const [userIcon, setUserIcon] = React.useState(false);
  const [helpIcon, setHelpIcon] = React.useState(false);
  const [settingsIcon, setSettingsIcon] = React.useState(false);
  const [pic1, setPic1] = React.useState(false);
  const [pic2, setPic2] = React.useState(false);
  const [pic3, setPic3] = React.useState(false);
  const [easy, setEasy] = React.useState(false);
  const [middle, setMiddle] = React.useState(false);
  const [hard, setHard] = React.useState(false);
  return (
    <main>
      <section className="BarGroup">
        <BarGroup
          userIcon={userIcon}
          setUserIcon={setUserIcon}
          helpIcon={helpIcon}
          setHelpIcon={setHelpIcon}
          settingsIcon={settingsIcon}
          setSettingsIcon={setSettingsIcon}
        />
      </section>

      <section className="ChoosePicGroup">
        <ChoosePicGroup
          pic1={pic1}
          setPic1={setPic1}
          pic2={pic2}
          setPic2={setPic2}
          pic3={pic3}
          setPic3={setPic3}
        />
      </section>
      <section className="ChooseLevelGroup">
        <ChooseLevelGroup
          easy={easy}
          setEasy={setEasy}
          middle={middle}
          setMiddle={setMiddle}
          hard={hard}
          setHard={setHard}
        />
      </section>
      <section className="PuzzleGroup"></section>
    </main>
  );
}

export default App;