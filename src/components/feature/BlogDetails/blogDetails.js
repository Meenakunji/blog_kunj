import CloseIcon from "@mui/icons-material/Close";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { useSelector } from "react-redux";
import { API_BASE_URL } from "../../../constant/appConstants";
import fetcher from "../../../dataProvider";
import AuthenticationComponent from "../auth";
import style from "./style";

export default function TemporaryDrawer() {
  const [text, setText] = useState("");
  const [textareaHeight, setTextareaHeight] = useState("auto");
  const [commentMsglist, setCommentMsgList] = useState([]);
  const { particularBlogContent, userData, isLoggedIn } = useSelector((state) => state.user);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Function to adjust the textarea height based on its content
    const adjustTextareaHeight = () => {
      const textarea = document.getElementById("autoHeightTextarea");
      textarea.style.height = "auto"; // Reset height
      textarea.style.height = `${textarea.scrollHeight}px`; // Set new height based on content
    };

    // Attach the adjustTextareaHeight function to the input event of the textarea
    const textarea = document.getElementById("autoHeightTextarea");
    textarea.addEventListener("input", adjustTextareaHeight);

    // Initial adjustment when component mounts
    adjustTextareaHeight();

    // Clean up the event listener when component unmounts
    return () => {
      textarea.removeEventListener("input", adjustTextareaHeight);
    };
  }, []);

  // Event handler to update the text state
  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  // create blog Comment
  const { mutate: createBlogComments } = useMutation(
    (commentMsg) =>
      fetcher.post(`${API_BASE_URL}/v1/blog/comments/${particularBlogContent?._id}`, commentMsg),
    {
      onSuccess: (resData) => {
        setText("");
        getCommentMessageList();
      },
      onError: (error) => {
        alert(error?.response?.data?.message);
      },
    }
  );

  const handleCreateBlogComment = (e) => {
    const requestBodyCommentMsg = {
      blogId: particularBlogContent?._id,
      userName: userData?.name,
      email: userData?.email,
      message: text,
      createdAt: new Date().toISOString(),
      type: "comment",
    };
    if (!isLoggedIn) {
      setOpen(true);
    } else {
      createBlogComments(requestBodyCommentMsg);
    }
  };

  // get comment messageList
  const { mutate: getCommentMessageList } = useMutation(
    () => fetcher.get(`${API_BASE_URL}/v1/blog/comments/${particularBlogContent?._id}`),
    {
      onSuccess: (resData) => {
        setCommentMsgList(resData?.data);
      },
      onError: (error) => {
        alert(error?.response?.data?.message);
      },
    }
  );

  useEffect(() => {
    if (particularBlogContent) {
      getCommentMessageList();
    }
  }, [particularBlogContent]);

  // blog CommentDeletehandle
  const { mutate: deleteBlogCommentMsg } = useMutation(
    ({ type, commentId }) =>
      fetcher.delete(`${API_BASE_URL}/v1/blog/comments/${commentId}?type=${type}`),
    {
      onSuccess: (resData) => {
        getCommentMessageList();
      },
      onError: (error) => {
        alert(error?.response?.data?.message);
      },
    }
  );

  const handleBlogCommentDelete = (data) => {
    deleteBlogCommentMsg({ type: data?.type, commentId: data?._id });
  };

  console.log("commentMsglist", commentMsglist, commentMsglist?.length);

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 340 }}
      role="presentation"
      // onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box sx={style.messageSection}>
        <Typography variant="h1">Responses</Typography>
        <CloseIcon onClick={toggleDrawer(anchor, false)} />
      </Box>
      <Box sx={style.commentChatBox}>
        <Box sx={style.profileComment}>
          <img src={userData?.profilePic} style={{ width: "40px" }} alt="user Profile" />
          <Typography variant="h3"> {userData?.name}</Typography>
        </Box>
        {/* {isContentVisible && ( */}
        <textarea
          id="autoHeightTextarea"
          value={text}
          onChange={handleTextChange}
          style={{ height: textareaHeight }}
          placeholder="What are your thoughts?"
        />
        {/* )} */}
        <Box sx={style.bottomSection}>
          {/* <Box sx={style.LeftBottom}>
            <Button>B</Button>
            <Button>
              <FormatItalicIcon />
            </Button>
          </Box> */}
          <Box sx={style.rightBottom}>
            <Button onClick={toggleDrawer(anchor, false)}>Cancel</Button>
            <Button sx={style.respond} onClick={(e) => handleCreateBlogComment(e)}>
              Respond
            </Button>
          </Box>
        </Box>
      </Box>
      {commentMsglist?.length > 0 &&
        commentMsglist?.map((item, index) => {
          return (
            <Box key={index}>
              <Box sx={style.replySection}>
                <Box sx={style.replyLeftProfile}>
                  <Image
                    src={item?.result?.[0]?.profilePic}
                    alt="Profile Pic icon"
                    width={40}
                    height={40}
                    style={{
                      borderRadius: "100px",
                      border: "1px solid #c3c3c3",
                      objectFit: "cover",
                    }}
                    priority
                  />
                  <Box sx={style.profileReply}>
                    <Typography variant="h5">{item?.userName}</Typography>
                    <Typography variant="body1">
                      {(new Date() - new Date(item?.createdAt)) / (1000 * 60 * 60 * 24) > 1
                        ? `${Math.floor(
                            (new Date() - new Date(item?.createdAt)) / (1000 * 60 * 60 * 24)
                          )} days ago`
                        : "Today"}
                    </Typography>
                  </Box>
                </Box>
                <Box sx={style.replyRightProfile}>
                  <Box sx={style.delete} onClick={() => handleBlogCommentDelete(item)}>
                    {" "}
                    <DeleteOutlinedIcon />{" "}
                  </Box>
                </Box>
              </Box>
              <Box sx={style.replySectionComment}>
                <Typography variant="body1">{item?.message}</Typography>

                <Box sx={style.replySectionBottom}>
                  <Box sx={style.replySectionBottomLeft}>
                    <Typography variant="body1">
                      <svg width="24" height="24" viewBox="0 0 24 24" aria-label="clap">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.37.83L12 3.28l.63-2.45h-1.26zM13.92 3.95l1.52-2.1-1.18-.4-.34 2.5zM8.59 1.84l1.52 2.11-.34-2.5-1.18.4zM18.52 18.92a4.23 4.23 0 0 1-2.62 1.33l.41-.37c2.39-2.4 2.86-4.95 1.4-7.63l-.91-1.6-.8-1.67c-.25-.56-.19-.98.21-1.29a.7.7 0 0 1 .55-.13c.28.05.54.23.72.5l2.37 4.16c.97 1.62 1.14 4.23-1.33 6.7zm-11-.44l-4.15-4.15a.83.83 0 0 1 1.17-1.17l2.16 2.16a.37.37 0 0 0 .51-.52l-2.15-2.16L3.6 11.2a.83.83 0 0 1 1.17-1.17l3.43 3.44a.36.36 0 0 0 .52 0 .36.36 0 0 0 0-.52L5.29 9.51l-.97-.97a.83.83 0 0 1 0-1.16.84.84 0 0 1 1.17 0l.97.97 3.44 3.43a.36.36 0 0 0 .51 0 .37.37 0 0 0 0-.52L6.98 7.83a.82.82 0 0 1-.18-.9.82.82 0 0 1 .76-.51c.22 0 .43.09.58.24l5.8 5.79a.37.37 0 0 0 .58-.42L13.4 9.67c-.26-.56-.2-.98.2-1.29a.7.7 0 0 1 .55-.13c.28.05.55.23.73.5l2.2 3.86c1.3 2.38.87 4.59-1.29 6.75a4.65 4.65 0 0 1-4.19 1.37 7.73 7.73 0 0 1-4.07-2.25zm3.23-12.5l2.12 2.11c-.41.5-.47 1.17-.13 1.9l.22.46-3.52-3.53a.81.81 0 0 1-.1-.36c0-.23.09-.43.24-.59a.85.85 0 0 1 1.17 0zm7.36 1.7a1.86 1.86 0 0 0-1.23-.84 1.44 1.44 0 0 0-1.12.27c-.3.24-.5.55-.58.89-.25-.25-.57-.4-.91-.47-.28-.04-.56 0-.82.1l-2.18-2.18a1.56 1.56 0 0 0-2.2 0c-.2.2-.33.44-.4.7a1.56 1.56 0 0 0-2.63.75 1.6 1.6 0 0 0-2.23-.04 1.56 1.56 0 0 0 0 2.2c-.24.1-.5.24-.72.45a1.56 1.56 0 0 0 0 2.2l.52.52a1.56 1.56 0 0 0-.75 2.61L7 19a8.46 8.46 0 0 0 4.48 2.45 5.18 5.18 0 0 0 3.36-.5 4.89 4.89 0 0 0 4.2-1.51c2.75-2.77 2.54-5.74 1.43-7.59L18.1 7.68z"
                        ></path>
                      </svg>{" "}
                      0
                    </Typography>
                    <Typography variant="body1">
                      <svg width="29" height="29" className="mg q anq" aria-label="responses">
                        <path d="M21.27 20.06a9.04 9.04 0 0 0 2.75-6.68C24.02 8.21 19.67 4 14.1 4S4 8.21 4 13.38c0 5.18 4.53 9.39 10.1 9.39 1 0 2-.14 2.95-.41.28.25.6.49.92.7a7.46 7.46 0 0 0 4.19 1.3c.27 0 .5-.13.6-.35a.63.63 0 0 0-.05-.65 8.08 8.08 0 0 1-1.29-2.58 5.42 5.42 0 0 1-.15-.75zm-3.85 1.32l-.08-.28-.4.12a9.72 9.72 0 0 1-2.84.43c-4.96 0-9-3.71-9-8.27 0-4.55 4.04-8.26 9-8.26 4.95 0 8.77 3.71 8.77 8.27 0 2.25-.75 4.35-2.5 5.92l-.24.21v.32a5.59 5.59 0 0 0 .21 1.29c.19.7.49 1.4.89 2.08a6.43 6.43 0 0 1-2.67-1.06c-.34-.22-.88-.48-1.16-.74z"></path>
                      </svg>
                      reply
                    </Typography>
                  </Box>
                  <Box sx={style.replyRight}>
                    <Typography variant="h5">Reply</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          );
        })}
    </Box>
  );

  return (
    <Box>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <span onClick={toggleDrawer(anchor, true)}>
            <img src="/images/home/saveremove.svg" alt="save and remove icon" />
          </span>
          <Typography variant="body1">{commentMsglist?.length}</Typography>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            variant={"persistent"}
            PaperProps={{
              sx: {
                boxShadow: "rgba(0, 0, 0, 0.15) 0px 4px 12px",
                borderLeft: "0",
                padding: "25px",
                // background:"rgb(237 249 255)",
              },
            }}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
      <AuthenticationComponent
        callBackName={"uniqueCommunity"}
        open={open}
        handleModalClose={() => setOpen(false)}
      />
    </Box>
  );
}
