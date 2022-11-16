import React from 'react';
import BarGroup from '../components/BarGroup/BarGroup';
import ChoosePicGroup from '../components/ChoosePicGroup/ChoosePicGroup';
import ChooseLevelGroup from '../components/ChooseLevelGroup/ChooseLevelGroup';
import TimerGroup6 from '../components/TimerGroup/TimerGroup6';
import PuzzleGroup from '../components/PuzzleGroup/PuzzleGroup';

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
  const [username, setUsername] = React.useState('Asmsaaa');
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
          username={username}
          setUsername={setUsername}
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
      <TimerGroup6 />
      <section className="PuzzleGroup">
        <PuzzleGroup
          pic1={pic1}
          pic2={pic2}
          pic3={pic3}
          easy={easy}
          middle={middle}
          hard={hard}
        />
      </section>
    </main>
  );
}

export default App;
