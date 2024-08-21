import React, { useState } from "react";
import axios from "axios";
import './youtube.css';

const youtubeApiKey = import.meta.env.VITE_YOUTUBE_API_KEY;

const YouTubeSearch = () => {
    const [query, setQuery] = useState("");
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const handleSearch = async () => {
        try {
            const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
                params: {
                    part: 'snippet',
                    q: query,
                    type: 'video',
                    maxResults: 10,
                    key: youtubeApiKey, // Use the correct API key variable
                },
            });
            setVideos(response.data.items);
            setSelectedVideo(null);
        } catch (error) {
            console.error("Error fetching videos:", error);
        }
    };

    const handleVideoSelect = (video) => {
        setSelectedVideo(video);
    };

    return (
        <div className="youtube-search">
            <div className="search-bar">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search"
                />
                <button onClick={handleSearch}>Search</button>
            </div>

            {selectedVideo ? (
                <div className="video-player">
                    <iframe
                        width="100%"
                        height="500px"
                        src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={selectedVideo.snippet.title}
                    ></iframe>
                </div>
            ) : (
                <div className="video-list">
                    {videos.map((video) => (
                        <div
                            key={video.id.videoId}
                            className="video-item"
                            onClick={() => handleVideoSelect(video)}
                        >
                            <img
                                src={video.snippet.thumbnails.medium.url}
                                alt={video.snippet.title}
                                className="video-thumbnail"
                            />
                            <div className="video-details">
                                <h3 className="video-title">{video.snippet.title}</h3>
                                <p className="video-channel">{video.snippet.channelTitle}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default YouTubeSearch;
