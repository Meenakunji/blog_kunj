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
        // Set the visited flag to true in local storage once the count is updated
        localStorage.setItem(`visited_${particularBlogContent?._id}`, "true");
        setReadCountUpdated(true);

        // Increment read count for this blog
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
      return newSpeechUtterance; // Return the utterance for logging purposes
    };

    if (speechSynthesis) {
      const voices = speechSynthesis.getVoices();
      // console.log("Voices:", voices); // Log the voices array

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
        `${API_BASE_URL}/v1/blog/bookmark/${userData?._id}/${particularBlogContent?._id}`
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
