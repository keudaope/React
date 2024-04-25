import React from "react";
import videoImg from "../assets/monkey.mp4";
const Video = () => {
  const videoRef = React.useRef(null);
  function enter() {
    videoRef.current.play();
  }
  function leave() {
    videoRef.current.pause();
  }
  return (
    <video
      ref={videoRef}
      src={videoImg}
      onMouseEnter={enter}
      onMouseLeave={leave}
      muted="muted"
    ></video>
  );
};

export default Video;
