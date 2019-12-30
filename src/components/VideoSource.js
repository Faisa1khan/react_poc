import React, { useEffect, useMemo } from "react";
import Hls from "hls.js";

const VideoSource = ({ src, video, type }) => {
  useEffect(() => {
    const hls = new Hls();
    if (Hls.isSupported()) {
      hls.loadSource(src);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play();
      });
    }

    console.log("rerendering");

    return () => hls.destroy();
  }, [video, src]);

  return <source src={src} type={type || "application/x-mpegURL"} />;
};

export default VideoSource;
