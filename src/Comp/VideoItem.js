// components/VideoItem.js

import React from "react";

const VideoItem = ({ video }) => {
  return (
    <div className="video-item">
      <h2>{video.title}</h2>
      <p>{video.description}</p>
      {/* Add more video details if needed */}
    </div>
  );
};

export default VideoItem;
