
import {
    Box,
    Button,
    Container,
    Grid,
    ListItem,
    Typography,
  } from "@mui/material";
  import React from "react";
import style from "./style";
import DoneIcon from "@mui/icons-material/Done";
import SwipeableTemporaryDrawer from "./comment";
  
  
  const CommentBlog = () => {
    return (
      <>
        <Box sx={style.commentBlog}>
          <Box sx={style.commentBg}>
            <img src="/images/home/commentBg.jpg" />
            <Container maxWidth="md">
              <Box sx={style.bannerBg}>
              <Box sx={style.profileImg}>
              <img src="/images/home/commentBg.jpg" />
            </Box>
            <Box sx={style.profileName}>
                        <Typography variant="h5">Farhan</Typography>
                        <Box sx={style.dFlex}>
                          <span>
                            <DoneIcon />
                          </span>
                          <Typography variant="body1">
                            {" "}
                            Verified writer
                          </Typography>
                        </Box>
                      </Box>
              </Box>
              </Container>
          </Box>

          <Box sx={style.commentSection}>
            <Container maxWidth="md">
              <Box sx={style.commentSectionBg}>
                <Box sx={style.bannerDetails}>
                  <Typography variant="h1">Cheap Airline Tickets Great Ways To Save</Typography>
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
                      <Box sx={style.commentChat} style={{gap: "15px"}}>
                        <Box sx={style.commentChatList}>
                          <img src="/images/home/saveremove.svg" alt="" />
                        </Box>
                        <Box sx={style.commentChatList}>
                          <img src="/images/home/playcircle.svg" alt="" />
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
                    <Typography variant="body1">It's important to note that the cryptocurrency market is highly speculative and volatile. Prices can fluctuate significantly, and success is not guaranteed. Ensure that you have a well-thought-out plan and legal compliance in place before launching a new cryptocurrency. Consulting with legal and financial professionals with experience in cryptocurrency is advisable.</Typography>
                   
                   <img src="/images/home/Base.jpg" alt="" style={{width: "100%"}} />
                    <Typography variant="body1">It's important to note that the cryptocurrency market is highly speculative and volatile. Prices can fluctuate significantly, and success is not guaranteed. Ensure that you have a well-thought-out plan and legal compliance in place before launching a new cryptocurrency. Consulting with legal and financial professionals with experience in cryptocurrency is advisable.</Typography>
                    <Typography variant="body1">It's important to note that the cryptocurrency market is highly speculative and volatile. Prices can fluctuate significantly, and success is not guaranteed. Ensure that you have a well-thought-out plan and legal compliance in place before launching a new cryptocurrency. Consulting with legal and financial professionals with experience in cryptocurrency is advisable.</Typography>
                    <Typography variant="body1">It's important to note that the cryptocurrency market is highly speculative and volatile. Prices can fluctuate significantly, and success is not guaranteed. Ensure that you have a well-thought-out plan and legal compliance in place before launching a new cryptocurrency. Consulting with legal and financial professionals with experience in cryptocurrency is advisable.</Typography>
                    <Box sx={style.contentImg}>
                      <img src="/images/home/Base.jpg" alt="" />
                    <img src="/images/home/Base.jpg" alt="" />
                    </Box>
                   
                  </Box>
                </Box>
                <Box sx={style.tagList}>
                  <Typography variant="h4">Vestibulum rhoncus</Typography>
                  <Typography variant="body1">02 July 2023</Typography>

                  <Box sx={style.buttonTag}>
                    <Button>Design</Button>
                    <Button>User Experience</Button>
                    <Button>User Interfaces</Button>
                    <Button>User Interfaces</Button>
                    <Button>User Interfaces</Button>

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
  