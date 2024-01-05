import DoneIcon from "@mui/icons-material/Done";
import PauseCircleFilledIcon from "@mui/icons-material/PauseCircleFilled";
import { Box, Button, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import fetcher from "../../../dataProvider";
import SwipeableTemporaryDrawer from "./blogDetails";
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import style from "./style";
import { formatCount } from "../../../../utils/common";
import { API_BASE_URL } from "../../../constant/appConstants";
import remarkGfm from "remark-gfm";
import remark2rehype from "remark-rehype";
import ReactMarkdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import RemarkMathPlugin from "remark-math";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { light as SyntaxHighlighterStyle } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { useRouter } from "next/router";
import { setTagListName } from "../../../redux/slices/user";
import Image from "next/image";
import LikeImage from "../../../../public/images/home/like1.svg";
import UserBlogShareImage from "../../../../public/images/home/share.svg";
import UserBlogReadIcon from "../../../../public/images/home/playcircle.svg";
import MoreDetailsIcon from "../../../../public/images/home/dot.svg";
import MetaProperties from "./Meta";

const CommentBlog = () => {
  const { particularBlogContent } = useSelector((state) => state.user);
  const [isReading, setIsReading] = useState(false);
  const [readCountUpdated, setReadCountUpdated] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const [blogLikeCount, setBlogLikeCount] = useState(particularBlogContent?.blogLike || 0);
  const [speechUtterance, setSpeechUtterance] = useState(null);
  const [blogMarked, setBlogMarked] = useState(particularBlogContent?.isMarkedBlog);

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
    blogLikeCountAPI(particularBlogContent?._id);
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
          <Box sx={style.imageContainer}>
            <Image
              src="https://i.postimg.cc/h41XhrFF/comment-Bg.webp"
              alt="Baxkground image"
              width={1200}
              height={450}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "fill",
              }}
              priority
            />
          </Box>

          <Container maxWidth="md">
            <Box sx={style.bannerBg}>
              <Box sx={style.profileImg}>
                <Image
                  src={particularBlogContent?.userData?.[0]?.profilePic}
                  alt="user Profile"
                  width={40}
                  height={40}
                  style={{
                    borderRadius: "100px",
                    width: "40px",
                    height: "40px",
                    border: "1px solid #c3c3c3",
                    objectFit: "cover",
                  }}
                  priority
                />
              </Box>
              <Box sx={style.profileName}>
                <Typography variant="h5">{particularBlogContent?.userData?.[0]?.name}</Typography>
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
                <Typography variant="h1">{particularBlogContent?.blogTitle}</Typography>
                <Box sx={style.commentDetails}>
                  <Box sx={style.commentList}>
                    <Box sx={style.commentChat}>
                      <Box sx={style.commentChatList} onClick={() => handleBlogLikeCount()}>
                        <Image
                          src={LikeImage}
                          alt="like icon"
                          style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "cover",
                            cursor: "pointer",
                          }}
                          priority
                        />
                        <Typography variant="body1">{formatCount(blogLikeCount)}</Typography>
                      </Box>
                      <Box sx={style.commentChatList}>
                        <SwipeableTemporaryDrawer />
                        <Typography variant="body1">
                          {particularBlogContent?.result?.length}
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={style.commentChat} style={{ gap: "15px" }}>
                      <Box sx={style.commentChatList} onClick={() => handleMarkedBlog()}>
                        {blogMarked ? <BookmarkIcon /> : <BookmarkAddOutlinedIcon />}
                      </Box>
                      <Box sx={style.commentChatList} onClick={handleRead}>
                        {isReading ? (
                          <PauseCircleFilledIcon />
                        ) : (
                          <Image
                            src={UserBlogReadIcon}
                            alt="read blog player"
                            style={{
                              width: "100%",
                              height: "auto",
                              objectFit: "cover",
                              cursor: "pointer",
                            }}
                            priority
                          />
                        )}
                      </Box>
                      <Box sx={style.commentChatList}>
                        <Image
                          src={UserBlogShareImage}
                          alt="share icon"
                          style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "cover",
                            cursor: "pointer",
                          }}
                          priority
                        />
                      </Box>
                      <Box sx={style.commentChatList}>
                        <Image
                          src={MoreDetailsIcon}
                          alt="more detail icon"
                          style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "cover",
                            cursor: "pointer",
                          }}
                          priority
                        />
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box sx={style.detailsComment}>
                  <ReactMarkdown
                    remarkPlugins={[RemarkMathPlugin, remarkGfm]}
                    rehypePlugins={[rehypeKatex, remark2rehype]}
                    components={{
                      code({ node, inline, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || "");
                        return !inline && match ? (
                          <SyntaxHighlighter
                            {...props}
                            style={SyntaxHighlighterStyle}
                            language={match[1]}
                            PreTag="div"
                          >
                            {String(children).replace(/\n$/, "")}
                          </SyntaxHighlighter>
                        ) : (
                          <code {...props} className={className}>
                            {children}
                          </code>
                        );
                      },
                    }}
                  >
                    {particularBlogContent?.description}
                  </ReactMarkdown>
                </Box>
              </Box>
              <Box sx={style.videoStyle}>
                {particularBlogContent?.description &&
                  particularBlogContent?.description.match(
                    /(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/
                  )?.length >= 5 && <MetaProperties meta={particularBlogContent?.description} />}
              </Box>
              <Box sx={style.tagList}>
                <Typography variant="h4"> {particularBlogContent?.userData?.[0]?.name}</Typography>
                <Typography variant="body1">
                  {new Date(particularBlogContent?.createdAt).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </Typography>

                {/* Sub BlogTag */}
                <Box sx={style.buttonTag}>
                  {particularBlogContent?.blogSubTag?.map((item, index) => {
                    return (
                      <Button
                        key={index}
                        onClick={() => {
                          dispatch(setTagListName(item));
                          router.push(`/tag/${item}`);
                        }}
                      >
                        {item}
                      </Button>
                    );
                  })}
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
