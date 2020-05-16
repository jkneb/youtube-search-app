import React, { useState, useEffect } from "react";
import ky from "ky";

const CHANNEL_SEARCH_URL =
  "https://www.googleapis.com/youtube/v3/search?key=AIzaSyC3h4fJ37abhmYBajewQvSOsDgu1gts9No&channelId=UCQk2obZh_nup31Y73Yke3Mg&part=snippet,id&order=date&maxResults=50";

const Home = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await ky.get(CHANNEL_SEARCH_URL).json();
        console.log(response);
        setVideos(response.items);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <>
      <h1>Clash of Jed</h1>

      <div className="video-list">
        {videos.length ? (
          videos.map(({ id, snippet }) => (
            <div className="video" data-id={id.videoId} key={id.videoId}>
              <img className="video-img" src={snippet.thumbnails.high.url} />
              <h3 className="video-title">{snippet.title}</h3>
              <p className="video-desc">{snippet.description}</p>
            </div>
          ))
        ) : (
          <p>No videos to display.</p>
        )}
      </div>
    </>
  );
};

export default Home;
