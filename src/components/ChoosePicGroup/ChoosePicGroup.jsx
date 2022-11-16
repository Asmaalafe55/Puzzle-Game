import React from "react";

var imgsArray = new Array();
imgsArray[0] = new Image();
imgsArray[0].src = "./pic/pic1.jpg";
imgsArray[1] = new Image();
imgsArray[1].src = "./pic/pic2.jpg";
imgsArray[2] = new Image();
imgsArray[2].src = "./pic/pic3.jpg";

export default function ChoosePicGroup(props) {
  const pic1 = props.pic1;
  const setPic1 = props.setPic1;
  const pic1Click = () => {
     setPic1(!pic1)
     setPic2(false)
     setPic3(false)
    };
  const pic2 = props.pic2;
  const setPic2 = props.setPic2;
  const pic2Click = () => {
    setPic2(!pic2)
    setPic1(false)
    setPic3(false)
  };
  const pic3 = props.pic3;
  const setPic3 = props.setPic3;
  const pic3Click = () => {
    setPic3(!pic3)
    setPic1(false)
    setPic2(false)
  };
  return (
    <div className="choosePicWithPics">
      <div className="ChoosePicture">Choose picture</div>
      <label>
          <div className="backgroundPic1"
          style={{
            backgroundColor: pic1 ? '#42032C' : '#D36B00' 
          }}
          onClick={() => {
            pic1Click();
          }}
          >
          </div>
      </label>
      <label>
        <img className="pic1"
          src="/pic/pic1.jpg"
          onClick={() => {
            pic1Click();
          }}
        />
      </label>
      <div className="backgroundPic2"
          style={{
            backgroundColor: pic2 ? '#42032C' : '#D36B00' 
          }}
          onClick={() => {
            pic2Click();
          }}
          >
          </div>
      <label>
        <img className="pic2"
          src="/pic/pic2.jpg"
          onClick={() => {
            pic2Click();
          }}
        />
      </label>
      <div className="backgroundPic3"
          style={{
            backgroundColor: pic3 ? '#42032C' : '#D36B00' 
          }}
          onClick={() => {
            pic3Click();
          }}
          >
      </div>
      <label>
        <img className="pic3"
          src="/pic/pic3.jpg"
          onClick={() => {
            pic3Click();
          }}
        />
      </label>
      </div>
  );
}
