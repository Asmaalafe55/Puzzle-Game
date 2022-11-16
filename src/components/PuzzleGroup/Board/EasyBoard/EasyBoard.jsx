import React, { useEffect } from "react";

import {
  pic1EasyData,
  pic2EasyData,
  pic3EasyData,
} from "../../Data/EasyData/EasyLevelData.js";

import {
  pic1EasySolution,
  pic2EasySolution,
  pic3EasySolution,
} from "../../Data/EasyData/EasyLevelData";

export function EasyBoardPic1(props) {
  const choice1 = props.choice1;
  const setChoice1 = props.setChoice1;
  const choice2 = props.choice2;
  const setChoice2 = props.setChoice2;
  const board = props.board;
  const setBoard = props.setBoard;
  const setBoardSolution = props.setBoardSolution;

  useEffect(() => {
    setBoard(pic1EasyData);
    setBoardSolution(pic1EasySolution);
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
      <div className="boardEasy">
        {board.map((pic, index) => (
          <div className="PicCellEasy" key={index}>
            <img
              className="imgStyleEasy"
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

export function EasyBoardPic2(props) {
  const choice1 = props.choice1;
  const setChoice1 = props.setChoice1;
  const choice2 = props.choice2;
  const setChoice2 = props.setChoice2;
  const board = props.board;
  const setBoard = props.setBoard;
  const setBoardSolution = props.setBoardSolution;

  useEffect(() => {
    setBoard(pic2EasyData);
    setBoardSolution(pic2EasySolution);
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
      <div className="boardEasy">
        {pic2EasyData.map((pic) => (
          <div className="PicCellEasy" key={pic}>
            <img
              className="imgStyleEasy"
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

export function EasyBoardPic3(props) {
  const choice1 = props.choice1;
  const setChoice1 = props.setChoice1;
  const choice2 = props.choice2;
  const setChoice2 = props.setChoice2;
  const board = props.board;
  const setBoard = props.setBoard;
  const setBoardSolution = props.setBoardSolution;

  useEffect(() => {
    setBoard(pic3EasyData);
    setBoardSolution(pic3EasySolution);
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
      <div className="boardEasy">
        {pic3EasyData.map((pic) => (
          <div className="PicCellEasy" key={pic}>
            <img
              className="imgStyleEasy"
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
export default { EasyBoardPic1, EasyBoardPic2, EasyBoardPic3 };
