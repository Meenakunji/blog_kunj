import { Box, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { useSelector } from "react-redux";
import { API_BASE_URL } from "../../../constant/appConstants";
import fetcher from "../../../dataProvider";
import { MarkDownReactCode } from "../../common/MarkDownCode";
import AuthenticationComponent from "../auth";
import MetaProperties from "./Meta";
import { BlogActionBtn } from "./action";
import { BlogDetailsPageBanner } from "./banner";
import { BlogDetailsFooterSection } from "./footerSection";
import style from "./style";
import confetti from "canvas-confetti";


const CommentBlog = () => {
  const { particularBlogContent, userData, isLoggedIn } = useSelector((state) => state.user);
  const [isReading, setIsReading] = useState(false);
  const [readCountUpdated, setReadCountUpdated] = useState(false);
  const [open, setOpen] = useState(false);

  const [blogLikeCount, setBlogLikeCount] = useState(particularBlogContent?.blogLike || 0);
  const [speechUtterance, setSpeechUtterance] = useState(null);
  const [blogMarked, setBlogMarked] = useState("");

  // Check if the user has already visited this blog post
  useEffect(() => {
    const visited = localStorage.getItem(`visited_${particularBlogContent?._id}`);
    if (visited === "true") {
      setReadCountUpdated(true);
    }
  }, [particularBlogContent]);

  // Update the read count for unique users
  const { mutate: updateReadCount } = useMutation(
    (blogReadBody) =>
      fetcher.post(
        `${API_BASE_URL}/v1/blog/read-count/${particularBlogContent?._id}`,
        blogReadBody
      ),
    {
      onSuccess: () => {
        localStorage.setItem(`visited_${particularBlogContent?._id}`, "true");
        setReadCountUpdated(true);

        const visitedBlogs = JSON.parse(localStorage.getItem("visitedBlogs")) || {};
        visitedBlogs[particularBlogContent?._id] =
          (visitedBlogs[particularBlogContent?._id] || 0) + 1;
        localStorage.setItem("visitedBlogs", JSON.stringify(visitedBlogs));
      },
      onError: (error) => {
        alert(error?.response?.data?.message);
      },
    }
  );

  const handleRead = () => {
    // if (!readCountUpdated) {
    let blogReadBody = {
      blogId: particularBlogContent?._id,
    };
    updateReadCount(blogReadBody);
    // }
    const contentText = particularBlogContent?.description;
    const speechSynthesis = window.speechSynthesis;

    const speak = (text, voice) => {
      const newSpeechUtterance = new SpeechSynthesisUtterance(text);
      newSpeechUtterance.voice = voice;
      speechSynthesis.speak(newSpeechUtterance);
      setSpeechUtterance(newSpeechUtterance);
      return newSpeechUtterance;
    };

    if (speechSynthesis) {
      const voices = speechSynthesis.getVoices();

      // Filter out empty voice objects
      const validVoices = voices.filter((voice) => voice.name.trim() !== "");

      const startReading = () => {
        if (validVoices.length > 0) {
          const utterance = speak(contentText, validVoices[0]);
          setIsReading(true);
        } else {
          console.error("No valid voices found!");
        }
      };

      // Ensure valid voices are available before speaking
      if (validVoices.length > 0) {
        startReading();
      } else {
        // Wait for the voices to load
        speechSynthesis.onvoiceschanged = () => {
          const updatedVoices = speechSynthesis.getVoices();

          // Filter and update the valid voices array
          const updatedValidVoices = updatedVoices.filter((voice) => voice.name.trim() !== "");

          if (updatedValidVoices.length > 0) {
            startReading();
          }
        };
      }
    }
  };

  // user blog Mark or not
  const { mutate: getMarkedBlogContent } = useMutation(
    (BookMarkedObj) => fetcher.post(`${API_BASE_URL}/v1/blog/bookmark`, BookMarkedObj),
    {
      onSuccess: (resData) => {
        getMarkedBlogStatus();
        setBlogMarked(resData?.data?.isBookmarked);
      },
      onError: (error) => {
        alert(error?.response?.data?.message);
      },
    }
  );

  const handleMarkedBlog = () => {
    let BookMarkedObj = {
      userId: userData?._id,
      blogId: particularBlogContent?._id,
    };
    if (!isLoggedIn) {
      setOpen(true);
    } else {
      getMarkedBlogContent(BookMarkedObj);
    }
  };

  // user blog Mark or not
  const { mutate: getMarkedBlogStatus } = useMutation(
    () =>
      fetcher.get(
        `${API_BASE_URL}/v1/blog/bookmark/${userData?._id}/${
          particularBlogContent?._id || particularBlogContent?.blogID
        }`
      ),
    {
      onSuccess: (resData) => {
        setBlogMarked(resData?.data?.isBookmarked);
      },
      onError: (error) => {
        alert(error?.response?.data?.message);
      },
    }
  );

  useEffect(() => {
    if (isLoggedIn) {
      getMarkedBlogStatus();
    }
  }, [isLoggedIn]);

  // blog likeor not
  const { mutate: blogLikeCountAPI } = useMutation(
    (blogId) => fetcher.post(`${API_BASE_URL}/v1/blog/like/${blogId}`),
    {
      onSuccess: (resData) => {
        setBlogLikeCount(resData?.data?.blogLike);
        const emojiConfetti = () => {
          const emojis = ["🎉", "❤️", "✨", "🎈", "🔥"];
          const shootEmoji = (emoji) => {
            confetti({
              particleCount: 20,
              angle: Math.random() * 90 + 45, 
              spread: 70,
              origin: {
                x: Math.random(), 
                y: Math.random() * 0.5, 
              },
              scalar: 1.5, 
              shapes: ["circle"], 
              colors: ["transparent"], 
              drift: 0.05, 
              ticks: 200, 
            });
    
            // Render emoji overlay using DOM
            const emojiElement = document.createElement("div");
            emojiElement.textContent = emoji;
            emojiElement.style.position = "fixed";
            emojiElement.style.left = `${Math.random() * 100}vw`;
            emojiElement.style.top = `${Math.random() * 100}vh`;
            emojiElement.style.fontSize = "24px";
            emojiElement.style.transform = `translate(-50%, -50%) rotate(${Math.random() * 360}deg)`;
            emojiElement.style.animation = "float 2s ease-out";
            document.body.appendChild(emojiElement);
    
            setTimeout(() => {
              emojiElement.remove();
            }, 3000);
          };
    
          for (let i = 0; i < 5; i++) {
            const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
            shootEmoji(randomEmoji);
          }
        };
    
        emojiConfetti();
      },
      onError: (error) => {
        alert(error?.response?.data?.message);
      },
    }
  );

  const handleBlogLikeCount = () => {
    if (!isLoggedIn) {
      setOpen(true);
    } else {
      blogLikeCountAPI(particularBlogContent?._id);
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
      <Box sx={style.commentBlog}>
        {/* Blog Details Page Banner Section*/}
        <BlogDetailsPageBanner particularBlogContent={particularBlogContent} />

        <Box sx={style.commentSection}>
          <Container maxWidth="md">
            <Box sx={style.commentSectionBg}>
              <Box sx={style.bannerDetails}>
                <Typography variant="h1">{particularBlogContent?.blogTitle}</Typography>

                {/* Blog Details Page Action Btn*/}
                <BlogActionBtn
                  particularBlogContent={particularBlogContent}
                  handleBlogLikeCount={handleBlogLikeCount}
                  handleMarkedBlog={handleMarkedBlog}
                  blogMarked={blogMarked}
                  blogLikeCount={blogLikeCount}
                  handleRead={handleRead}
                  isReading={isReading}
                />

                <MarkDownReactCode description={particularBlogContent?.description} />
              </Box>
              {/* check if youtube video link have then this component reneder */}
              <Box sx={style.videoStyle}>
                {particularBlogContent?.description &&
                  particularBlogContent?.description.match(
                    /(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/
                  )?.length >= 5 && <MetaProperties meta={particularBlogContent?.description} />}
              </Box>

              {/* Blog Details Page SubTag Section */}
              <BlogDetailsFooterSection particularBlogContent={particularBlogContent} />
            </Box>
          </Container>
        </Box>
        <AuthenticationComponent
          callBackName={"uniqueCommunity"}
          open={open}
          handleModalClose={() => setOpen(false)}
        />
      </Box>
    </>
  );
};

export default CommentBlog;
