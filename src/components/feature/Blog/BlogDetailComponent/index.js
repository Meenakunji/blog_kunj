import BackHandIcon from "@mui/icons-material/BackHand";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import PauseCircleFilledIcon from "@mui/icons-material/PauseCircleFilled";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { useSelector } from "react-redux";
import fetcher from "../../../../dataProvider";
import styles from "../style";
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";
import BlogReplyPanel from "../../../common/comment/CommentSection";
import { API_BASE_URL } from "../../../../constant/appConstants";

const BlogDetailComponent = () => {
  const { particularBlogContent } = useSelector((state) => state.user);
  const [isReading, setIsReading] = useState(false);
  const [speechUtterance, setSpeechUtterance] = useState(null);
  const [userFollowBlog, setUserFollowBlog] = useState(false);
  const [blogMarked, setBlogMarked] = useState(
    particularBlogContent?.isMarkedBlog
  );
  const [isReplyPanelOpen, setIsReplyPanelOpen] = useState(false);

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

  // marked blog
  const { mutate: BlogUserFollow } = useMutation(
    (BlogUserId) =>
      fetcher.post(`${API_BASE_URL}/v1/user/follow/${BlogUserId}`),
    {
      onSuccess: (resData) => {
        setUserFollowBlog(resData?.data?.isFollowing);
      },
      onError: (error) => {
        alert(error?.response?.data?.message);
      },
    }
  );

  const handleBlogUserFollow = (id) => {
    BlogUserFollow(id);
  };

  // user blog Mark or not
  const { mutate: getMarkedBlogContent } = useMutation(
    (blogId) => fetcher.post(`${API_BASE_URL}/v1/blog/mark/${blogId}`),
    {
      onSuccess: (resData) => {
        setBlogMarked(resData?.data?.isMarkedBlog);
      },
      onError: (error) => {
        alert(error?.response?.data?.message);
      },
    }
  );

  const handleMarkedBlog = () => {
    getMarkedBlogContent(particularBlogContent?._id);
  };

  const handleOpenReplyPanel = () => {
    setIsReplyPanelOpen(true);
    // Scroll to the chat reply panel
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  const handleCloseReplyPanel = () => {
    setIsReplyPanelOpen(false);
  };

  // blog delete
  // user blog Mark or not
  const { mutate: deletBlogContent } = useMutation(
    (blogId) => fetcher.post(`${API_BASE_URL}/v1/blog/delete/${blogId}`),
    {
      onSuccess: (resData) => {
        console.log("response delete blog", resData);
      },
      onError: (error) => {
        alert(error?.response?.data?.message);
      },
    }
  );

  const handleBlogDelete = () => {
    deletBlogContent(particularBlogContent?._id);
  };

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
                <Typography variant="h5">
                  {particularBlogContent?.userData?.[0]?.name}
                </Typography>
                <Typography
                  variant="h5"
                  style={{
                    color: "#156D12",
                    cursor: "pointer",
                  }}
                  onClick={() =>
                    handleBlogUserFollow(
                      particularBlogContent?.userData?.[0]?._id
                    )
                  }
                >
                  {/* Follow */}
                  {userFollowBlog === true ? "Unfollow" : "Follow"}
                </Typography>
              </Box>
              <Box sx={styles.profileName}>
                <Typography variant="h5">16 min read</Typography>
                <Typography variant="h5">
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
                <Typography variant="body1" onClick={handleOpenReplyPanel}>
                  <ChatBubbleOutlineIcon />
                  <span>199</span>
                </Typography>
              </Box>
              <Box sx={styles.userBlog}>
                <Typography variant="body1" onClick={() => handleMarkedBlog()}>
                  {blogMarked ? (
                    <BookmarkBorderIcon />
                  ) : (
                    <BookmarkAddOutlinedIcon />
                  )}
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
                  <img
                    src="/images/about/share.svg"
                    alt="share icon"
                    width={17}
                  />
                </Typography>
                <Typography variant="body1" onClick={() => handleBlogDelete()}>
                  <img
                    src="/images/about/more-horizontal.svg"
                    alt="more"
                    aria-label="More icon"
                  />
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
        {isReplyPanelOpen && (
          <BlogReplyPanel
            isOpen={isReplyPanelOpen}
            onClose={handleCloseReplyPanel}
          />
        )}
      </div>
    </>
  );
};

export default BlogDetailComponent;
