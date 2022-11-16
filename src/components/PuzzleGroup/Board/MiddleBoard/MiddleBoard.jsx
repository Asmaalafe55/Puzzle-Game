import React, { useEffect } from "react";

import {
  pic1MiddleData,
  pic2MiddleData,
  pic3MiddleData,
} from "../../Data/MiddleData/MiddleLevelData.js";

import {
  pic1MiddleSolution,
  pic2MiddleSolution,
  pic3MiddleSolution,
} from "../../Data/MiddleData/MiddleLevelData";

export function MiddleBoardPic1(props) {
  const choice1 = props.choice1;
  const setChoice1 = props.setChoice1;
  const choice2 = props.choice2;
  const setChoice2 = props.setChoice2;
  const board = props.board;
  const setBoard = props.setBoard;
  const setBoardSolution = props.setBoardSolution;

  useEffect(() => {
    setBoard(pic1MiddleData);
    setBoardSolution(pic1MiddleSolution);
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
      <div className="boardMiddle">
        {board.map((pic, index) => (
          <div className="PicCellMiddle" key={index}>
            <img
              className="imgStyleMiddle"
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

export function MiddleBoardPic2(props) {
  const choice1 = props.choice1;
  const setChoice1 = props.setChoice1;
  const choice2 = props.choice2;
  const setChoice2 = props.setChoice2;
  const board = props.board;
  const setBoard = props.setBoard;
  const setBoardSolution = props.setBoardSolution;

  useEffect(() => {
    setBoard(pic2MiddleData);
    setBoardSolution(pic2MiddleSolution);
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
      <div className="boardMiddle">
        {pic2MiddleData.map((pic) => (
          <div className="PicCellMiddle" key={pic}>
            <img
              className="imgStyleMiddle"
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

export function MiddleBoardPic3(props) {
  const choice1 = props.choice1;
  const setChoice1 = props.setChoice1;
  const choice2 = props.choice2;
  const setChoice2 = props.setChoice2;
  const board = props.board;
  const setBoard = props.setBoard;
  const setBoardSolution = props.setBoardSolution;

  useEffect(() => {
    setBoard(pic3MiddleData);
    setBoardSolution(pic3MiddleSolution);
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
      <div className="boardMiddle">
        {pic3MiddleData.map((pic) => (
          <div className="PicCellMiddle" key={pic}>
            <img
              className="imgStyleMiddle"
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
export default { MiddleBoardPic1, MiddleBoardPic2, MiddleBoardPic3 };
