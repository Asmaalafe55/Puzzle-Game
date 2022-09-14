import React from "react";
import {
  pic1EasyData,
  pic2EasyData,
  pic3EasyData,
} from "../../Data/EasyData/EasyLevelData.js";

function EasyBoardPic1(props) {
  return (
    <div>
      <div
        className="backgroundBoard"
        style={{
          backgroundColor: "#D36B00",
        }}
      ></div>
      <div className="boardEasy">
        {pic1EasyData.map((pic) => (
          <div className="PicCellEasy" key={pic}>
            <img className="imgStyleEasy" src={pic}></img>
          </div>
        ))}
      </div>
    </div>
  );
}
function EasyBoardPic2(props) {
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
            <img className="imgStyleEasy" src={pic}></img>
          </div>
        ))}
      </div>
    </div>
  );
}
function EasyBoardPic3(props) {
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
            <img className="imgStyleEasy" src={pic}></img>
          </div>
        ))}
      </div>
    </div>
  );
}
export default { EasyBoardPic1, EasyBoardPic2, EasyBoardPic3 };
