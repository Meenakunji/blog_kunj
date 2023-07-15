import BackHandIcon from "@mui/icons-material/BackHand";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import PauseCircleFilledIcon from "@mui/icons-material/PauseCircleFilled";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "../style";

export const BlogDetailComponent = () => {
  const { particularBlogContent } = useSelector((state) => state.user);

  const [isReading, setIsReading] = useState(false);
  const [speechUtterance, setSpeechUtterance] = useState(null);

  const handleRead = () => {
    const contentText = particularBlogContent?.description;

    const speechSynthesis = window.speechSynthesis;

    if (speechSynthesis) {
      if (isReading) {
        // If currently reading, pause the audio
        speechSynthesis.pause();
      } else {
        // If not reading, start or resume the audio
        if (speechSynthesis.paused && speechUtterance) {
          // Resume from pause
          speechSynthesis.resume();
        } else {
          // Start from the beginning
          const newSpeechUtterance = new SpeechSynthesisUtterance(contentText);
          // Set the voice and other speech options here (if needed)

          speechSynthesis.speak(newSpeechUtterance);
          setSpeechUtterance(newSpeechUtterance);
        }
      }
      setIsReading(!isReading);
    }
  };

  useEffect(() => {
    // Clean up the speechSynthesis when the component unmounts
    return () => {
      const speechSynthesis = window.speechSynthesis;
      if (speechSynthesis) {
        if (isReading) {
          speechSynthesis.pause();
        }
        if (speechUtterance) {
          speechSynthesis.cancel();
          setSpeechUtterance(null);
        }
      }
    };
  }, [isReading, speechUtterance]);

  return (
    <>
      <div className="container">
        <Box sx={styles.blogContainer}>
          <Box sx={styles.blogHeading}>
            <Typography variant="h1">
              {particularBlogContent?.blogTitle}
            </Typography>
          </Box>
          <Box sx={styles.profileBlogDetails}>
            <Box sx={styles.profileImg}>
              <img
                src={particularBlogContent?.userData?.[0]?.profilePic}
                alt="user image"
              />
            </Box>
            <Box sx={styles.profileImg}>
              <Box sx={styles.profileName}>
                <Typography variant="body1">
                  {particularBlogContent?.userData?.[0]?.name}
                </Typography>
                <Typography
                  variant="body1"
                  style={{ color: "#156D12", fontWeight: "600" }}
                >
                  Follow
                </Typography>
              </Box>
              <Box sx={styles.profileName}>
                <Typography variant="body1">16 min read</Typography>
                <Typography variant="body1">
                  {new Intl.DateTimeFormat("en", {
                    day: "numeric",
                    month: "long",
                  }).format(new Date(particularBlogContent?.createdAt))}
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box sx={styles.userDetails}>
            <Box sx={styles.userSection}>
              <Box sx={styles.userBlog}>
                <Typography variant="body1">
                  <BackHandIcon />
                  <span>199</span>
                </Typography>
                <Typography variant="body1">
                  <ChatBubbleOutlineIcon />
                  <span>199</span>
                </Typography>
              </Box>
              <Box sx={styles.userBlog}>
                <Typography variant="body1">
                  <BookmarkBorderIcon />
                </Typography>
                <Typography variant="body1" onClick={handleRead}>
                  {isReading ? (
                    <PauseCircleFilledIcon />
                  ) : (
                    <PlayCircleOutlineIcon />
                  )}
                  {isReading ? "Pause" : "Read Blog"}
                </Typography>
                <Typography variant="body1">
                  <ChatBubbleOutlineIcon />
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box sx={styles.blogDetails}>
            <Box sx={styles.blogImg}>
              <img src={particularBlogContent?.image} alt="blog image" />
            </Box>
            <Box sx={styles.blogContent}>
              <Typography variant="body1">
                {particularBlogContent?.description}
              </Typography>
            </Box>
          </Box>

          <Box sx={styles.codeSection}>
            <p>
              <pre>
                <code>{particularBlogContent?.codeSnippet}</code>
              </pre>
            </p>
          </Box>
        </Box>
      </div>
    </>
  );
};
