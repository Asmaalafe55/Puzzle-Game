import React, { useEffect } from "react";

import {
  pic1HardData,
  pic2HardData,
  pic3HardData,
} from "../../Data/HardData/HardLevelData.js";

import {
  pic1HardSolution,
  pic2HardSolution,
  pic3HardSolution,
} from "../../Data/HardData/HardLevelData";

export function HardBoardPic1(props) {
  const choice1 = props.choice1;
  const setChoice1 = props.setChoice1;
  const choice2 = props.choice2;
  const setChoice2 = props.setChoice2;
  const board = props.board;
  const setBoard = props.setBoard;
  const setBoardSolution = props.setBoardSolution;

  useEffect(() => {
    setBoard(pic1HardData);
    setBoardSolution(pic1HardSolution);
  }, []);

  console.log({ board });

  return (
    <div>
      <div
        className="backgroundBoard"
        style={{
          backgroundColor: "#D36B00",
        }}
      ></div>
      <div className="boardHard">
        {board.map((pic, index) => (
          <div className="PicCellHard" key={index}>
            <img
              className="imgStyleHard"
              onClick={() => {
                if (choice1 === null) {
                  setChoice1(index);
                } else if (choice2 === null) {
                  setChoice2(index);
                }
              }}
              src={pic}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export function HardBoardPic2(props) {
  const choice1 = props.choice1;
  const setChoice1 = props.setChoice1;
  const choice2 = props.choice2;
  const setChoice2 = props.setChoice2;
  const board = props.board;
  const setBoard = props.setBoard;
  const setBoardSolution = props.setBoardSolution;

  useEffect(() => {
    setBoard(pic2HardData);
    setBoardSolution(pic2HardSolution);
  }, []);

  console.log({ board });

  return (
    <div>
      <div
        className="backgroundBoard"
        style={{
          backgroundColor: "#D36B00",
        }}
      ></div>
      <div className="boardHard">
        {pic2HardData.map((pic) => (
          <div className="PicCellHard" key={pic}>
            <img
              className="imgStyleHard"
              onClick={() => {
                if (choice1 === null) {
                  setChoice1(index);
                } else if (choice2 === null) {
                  setChoice2(index);
                }
              }}
              src={pic}
            ></img>
          </div>
        ))}
      </div>
    </div>
  );
}

export function HardBoardPic3(props) {
  const choice1 = props.choice1;
  const setChoice1 = props.setChoice1;
  const choice2 = props.choice2;
  const setChoice2 = props.setChoice2;
  const board = props.board;
  const setBoard = props.setBoard;
  const setBoardSolution = props.setBoardSolution;

  useEffect(() => {
    setBoard(pic3HardData);
    setBoardSolution(pic3HardSolution);
  }, []);

  console.log({ board });

  return (
    <div>
      <div
        className="backgroundBoard"
        style={{
          backgroundColor: "#D36B00",
        }}
      ></div>
      <div className="boardHard">
        {pic3HardData.map((pic) => (
          <div className="PicCellHard" key={pic}>
            <img
              className="imgStyleHard"
              onClick={() => {
                if (choice1 === null) {
                  setChoice1(index);
                } else if (choice2 === null) {
                  setChoice2(index);
                }
              }}
              src={pic}
            ></img>
          </div>
        ))}
      </div>
    </div>
  );
}
export default { HardBoardPic1, HardBoardPic2, HardBoardPic3 };
