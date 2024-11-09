import React, { useState, useEffect } from "react";
import VideoList from "./VideoList";
import SearchBar from "./SearchBar";

const Netflix = () => {
  const [videos, setVideos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Fetch video data from an API
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      // Fetch video data from an API endpoint
      const response = await fetch("https://api.example.com/videos");
      const data = await response.json();
      setVideos(data);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  const filteredVideos = videos.filter((video) =>
    video.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Video List App</h1>
      <SearchBar onSearch={handleSearch} />
      <VideoList videos={filteredVideos} />
    </div>
  );
};

export default Netflix;
