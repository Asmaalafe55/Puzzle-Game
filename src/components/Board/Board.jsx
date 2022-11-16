import React, { useEffect } from "react";
import "./BoardStyle.css";

import {
  EasyBoardPic1,
  EasyBoardPic2,
  EasyBoardPic3,
} from "./EasyBoard/EasyBoard";
import {
  MiddleBoardPic1,
  MiddleBoardPic2,
  MiddleBoardPic3,
} from "./MiddleBoard/MiddleBoard";
import {
  HardBoardPic1,
  HardBoardPic2,
  HardBoardPic3,
} from "./HardBoard/HardBoard";
import EmptyBoard from "./EmptyBoard";

export default function Board(props) {
  const [choice1, setChoice1] = React.useState(null);
  const [choice2, setChoice2] = React.useState(null);
  const [board, setBoard] = React.useState([]);
  const [boardSolution, setBoardSolution] = React.useState([]);
  const [done, setDone] = React.useState(false);

  useEffect(() => {
    if (done) {
      alert("DONEEEEE");
    }
  }, [done]);

  useEffect(() => {
    if (choice1 !== null && choice2 !== null) {
      const newBoard = [...board];
      newBoard[choice1] = board[choice2];
      newBoard[choice2] = board[choice1];

      setBoard(newBoard);
      setChoice1(null);
      setChoice2(null);
    }
  }, [choice1, choice2]);

  useEffect(() => {
    console.log(1, { board });
    if (
      board.length &&
      board.every((img, index) => img === boardSolution[index])
    ) {
      setDone(true);
    }
  }, [board, boardSolution]);

  const boardProps = {
    choice1,
    setChoice1,
    choice2,
    setChoice2,
    board,
    setBoard,
    done,
    setDone,
    setBoardSolution,
  };

  if (props.level == 3 && props.pic1) {
    return <EasyBoardPic1 {...boardProps} />;
  } else if (props.level == 3 && props.pic2) {
    return <EasyBoardPic2 {...boardProps} />;
  } else if (props.level == 3 && props.pic3) {
    return <EasyBoardPic3 {...boardProps} />;
  } else if (props.level == 4 && props.pic1) {
    return <MiddleBoardPic1 {...boardProps} />;
  } else if (props.level == 4 && props.pic2) {
    return <MiddleBoardPic2 {...boardProps} />;
  } else if (props.level == 4 && props.pic3) {
    return <MiddleBoardPic3 {...boardProps} />;
  } else if (props.level == 5 && props.pic1) {
    return <HardBoardPic1 {...boardProps} />;
  } else if (props.level == 5 && props.pic2) {
    return <HardBoardPic2 {...boardProps} />;
  } else if (props.level == 5 && props.pic3) {
    return <HardBoardPic3 {...boardProps} />;
  } else {
    return <EmptyBoard />;
  }
}
