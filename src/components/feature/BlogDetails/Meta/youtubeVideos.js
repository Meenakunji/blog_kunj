import { Box } from "@mui/system";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import React from 'react';

export default function YouTubeComponent({ meta, isMobile = false }) {
  let width = "480px";
  let height = "360px";
  if (isMobile) {
    width = "270px";
    height = "202.5px";
  }
  const [videoUrl, setVideoUrl] = useState("");
  const [isSongPlaying, setIsSongPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [bannerImage, setBannerImage] = useState("");

  useEffect(() => {
    const extractYouTubeUrl = (meta) => {
      const youtubeRegex =
        /(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

      const matches = meta?.match(youtubeRegex);

      if (matches && matches.length >= 5) {
        const youtubeUrl = matches[0]; // Entire matched YouTube URL
        const videoId = matches[4]; // Extracted video ID
        setBannerImage(videoId);
        setVideoUrl(youtubeUrl);
        return { youtubeUrl, videoId };
      } else {
        return null; // Or handle this case as needed
      }
    };

    if (meta) {
      extractYouTubeUrl(meta);
    }
  }, [meta]);

  // console.log("Video link ===>>", videoUrl, meta);

  return (
    <>
      {videoUrl && (isSongPlaying || isLoaded) ? (
        <ReactPlayer
          onReady={() => {
            setIsLoaded(true);
          }}
          width={width}
          height={height}
          controls
          url={videoUrl}
          playing={isSongPlaying}
          onPause={() => {
            setIsSongPlaying(false);
          }}
          onPlay={() => {
            setIsSongPlaying(true);
          }}
        />
      ) : (
        <Box style={{ position: "relative" }}>
          <div
            style={{
              width: width,
              height: height,
              background: `url(https://img.youtube.com/vi/${bannerImage}/hqdefault.jpg)`,
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              marginTop: "5px",
              backgroundSize: "contain",
            }}
          >
            <Box
              component="img"
              src={"/images/about/YoutubeIcon.png"}
              alt="youTube video img"
              sx={{
                cursor: "pointer",
                position: "relative",
                marignTop: "200px",
                width: isMobile ? "75px" : "100px",
                height: isMobile ? "45px" : "90px",
                borderRadius: "0px !important",
                background: "rgba(0,0,0,0.3)",
                padding: "10px",
                borderRadius: "15px",
              }}
              onClick={() => {
                setIsSongPlaying(true);
              }}
            />
          </div>
        </Box>
      )}
    </>
  );
}
