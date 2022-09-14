import React from "react";
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

  const boardProps = {
    choice1,
    setChoice1,
    choice2,
    setChoice2,
    board,
    setBoard,
  };

  if (props.level == 3 && props.pic1) {
    return <EasyBoardPic1 {...boardProps} />;
  } else if (props.level == 3 && props.pic2) {
    return <EasyBoardPic2 />;
  } else if (props.level == 3 && props.pic3) {
    return <EasyBoardPic3 />;
  } else if (props.level == 4 && props.pic1) {
    return <MiddleBoardPic1 />;
  } else if (props.level == 4 && props.pic2) {
    return <MiddleBoardPic2 />;
  } else if (props.level == 4 && props.pic3) {
    return <MiddleBoardPic3 />;
  } else if (props.level == 5 && props.pic1) {
    return <HardBoardPic1 />;
  } else if (props.level == 5 && props.pic2) {
    return <HardBoardPic2 />;
  } else if (props.level == 5 && props.pic3) {
    return <HardBoardPic3 />;
  } else {
    return <EmptyBoard />;
  }
}
