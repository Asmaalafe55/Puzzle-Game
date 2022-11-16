import React from "react";
import Board from "./Board";
import EmptyBoard from "./EmptyBoard";

export default function HardLevelPuzzle(props) {
  const [level, setLevel] = React.useState(5);
  const pic1 = props.pic1;
  const pic2 = props.pic2;
  const pic3 = props.pic3;
  if (pic1) {
    return <Board level={level} pic1={pic1} />;
  } else if (pic2) {
    return <Board level={level} pic2={pic2} />;
  } else if (pic3) {
    return <Board level={level} pic3={pic3} />;
  } else return <EmptyBoard />;
}
