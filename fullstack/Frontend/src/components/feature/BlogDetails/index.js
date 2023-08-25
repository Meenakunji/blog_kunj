import DoneIcon from "@mui/icons-material/Done";
import PauseCircleFilledIcon from "@mui/icons-material/PauseCircleFilled";
import { Box, Button, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { useSelector } from "react-redux";
import fetcher from "../../../dataProvider";
import SwipeableTemporaryDrawer from "./blogDetails";
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import style from "./style";

const CommentBlog = () => {
  const { particularBlogContent } = useSelector((state) => state.user);
  const [isReading, setIsReading] = useState(false);
  const [speechUtterance, setSpeechUtterance] = useState(null);
  const [blogMarked, setBlogMarked] = useState(
    particularBlogContent?.isMarkedBlog
  );

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

  // user blog Mark or not
  const { mutate: getMarkedBlogContent } = useMutation(
    (blogId) => fetcher.post(`http://localhost:3003/v1/blog/mark/${blogId}`),
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
      <Box sx={style.commentBlog}>
        <Box sx={style.commentBg}>
          <img src="/images/home/commentBg.jpg" />
          <Container maxWidth="md">
            <Box sx={style.bannerBg}>
              <Box sx={style.profileImg}>
                <img src={particularBlogContent?.userData?.[0]?.profilePic} />
              </Box>
              <Box sx={style.profileName}>
                <Typography variant="h5">
                  {particularBlogContent?.userData?.[0]?.name}
                </Typography>
                <Box sx={style.dFlex}>
                  <span>
                    <DoneIcon />
                  </span>
                  <Typography variant="body1"> Verified Blogger</Typography>
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>

        <Box sx={style.commentSection}>
          <Container maxWidth="md">
            <Box sx={style.commentSectionBg}>
              <Box sx={style.bannerDetails}>
                <Typography variant="h1">
                  {particularBlogContent?.blogTitle}
                </Typography>
                <Box sx={style.commentDetails}>
                  <Box sx={style.commentList}>
                    <Box sx={style.commentChat}>
                      <Box sx={style.commentChatList}>
                        <img src="/images/home/like1.svg" alt="" />
                        <Typography variant="body1">4.5K</Typography>
                      </Box>
                      <Box sx={style.commentChatList}>
                        <SwipeableTemporaryDrawer />
                        <Typography variant="body1">4.5K</Typography>
                      </Box>
                    </Box>
                    <Box sx={style.commentChat} style={{ gap: "15px" }}>
                      <Box
                        sx={style.commentChatList}
                        onClick={() => handleMarkedBlog()}
                      >
                        {blogMarked ? (
                          <BookmarkIcon />
                        ) : (
                          <BookmarkAddOutlinedIcon />
                        )}
                        {/* <img src="/images/home/saveremove.svg" alt="" /> */}
                      </Box>
                      <Box sx={style.commentChatList} onClick={handleRead}>
                        {isReading ? (
                          <PauseCircleFilledIcon />
                        ) : (
                          <img
                            src="/images/home/playcircle.svg"
                            alt="read blog player"
                          />
                        )}
                      </Box>
                      <Box sx={style.commentChatList}>
                        <img src="/images/home/share.svg" alt="" />
                      </Box>
                      <Box sx={style.commentChatList}>
                        <img src="/images/home/dot.svg" alt="" />
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box sx={style.detailsComment}>
                  <Typography variant="body1">
                    {particularBlogContent?.description}
                  </Typography>

                  <img
                    src={particularBlogContent?.image}
                    alt="blog image"
                    style={{ width: "100%" }}
                  />
                  <Typography variant="body1">
                    {particularBlogContent?.description}
                  </Typography>
                  {particularBlogContent?.codeSnippet && (
                    <Box sx={style.codeSection}>
                      <p>
                        <pre>
                          <code>{particularBlogContent?.codeSnippet}</code>
                        </pre>
                      </p>
                    </Box>
                  )}

                  {/* <Box sx={style.contentImg}>
                    <img src="/images/home/Base.jpg" alt="" />
                    <img src="/images/home/Base.jpg" alt="" />
                  </Box> */}
                </Box>
              </Box>
              <Box sx={style.tagList}>
                <Typography variant="h4">
                  {" "}
                  {particularBlogContent?.userData?.[0]?.name}
                </Typography>
                <Typography variant="body1">
                  {new Date(
                    particularBlogContent?.createdAt
                  ).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </Typography>

                <Box sx={style.buttonTag}>
                  <Button>Design</Button>
                  <Button>Education</Button>
                  <Button>Artist</Button>
                  <Button>Tech</Button>
                  <Button>Travel</Button>
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default CommentBlog;
