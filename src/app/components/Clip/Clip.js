import React, { lazy, Suspense, useEffect, useRef } from "react";
import MuxVideo from "@mux/mux-video-react";

function Clip({ playbackId, key }) {
  const videoRef = useRef(null);

  const handleTimeUpdate = () => {
    console.log(videoRef.current.currentTime);
  };

  useEffect(() => {
    console.log(videoRef.current);
  }, [videoRef]);

  // return <div className="h-auto">{playbackId}</div>;
  return (
    <MuxVideo
      playbackId={playbackId}
      ref={videoRef}
      onTimeUpdate={handleTimeUpdate}
      autoPlay
      key={key}
    />
  );
}

export default Clip;
