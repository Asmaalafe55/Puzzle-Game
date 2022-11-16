import React from "react";
import EasyLevelPuzzle from "./Board/EasyLevelPuzzle";
import MiddleLevelPuzzle from "./Board/MiddleLevelPuzzle";
import HardLevelPuzzle from "./Board/HardLevelPuzzle";
import EmptyBoard from "./Board/EmptyBoard";

export default function PuzzleGroup(props) {
  const pic1 = props.pic1;
  const pic2 = props.pic2;
  const pic3 = props.pic3;
  const easy = props.easy;
  const middle = props.middle;
  const hard = props.hard;
  if (easy) {
    return <EasyLevelPuzzle pic1={pic1} pic2={pic2} pic3={pic3} />;
  } else if (middle) {
    return <MiddleLevelPuzzle pic1={pic1} pic2={pic2} pic3={pic3} />;
  } else if (hard) {
    return <HardLevelPuzzle pic1={pic1} pic2={pic2} pic3={pic3} />;
  } else return <EmptyBoard />;
}
