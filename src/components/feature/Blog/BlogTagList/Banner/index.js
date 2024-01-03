import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { useSelector } from "react-redux";
import { API_BASE_URL } from "../../../../../constant/appConstants";
import fetcher from "../../../../../dataProvider";
import AuthenticationComponent from "../../../auth";
import style from "../../style";

export const TagBanner = ({ markedblogList }) => {
  const { tagListName, userData, isLoggedIn } = useSelector((state) => state.user);
  const [open, setOpen] = useState(false);
  const [followStatus, setFollowStatus] = useState(false);


  {/* follow & Unfollow  BlogTag Based on UserID*/}
  const { mutate: followBlogTag } = useMutation(
    (followBlogTagObj) => fetcher.post(`${API_BASE_URL}/v1/blog/follow-tag`, followBlogTagObj),
    {
      onSuccess: (data) => {
        setFollowStatus(!followStatus);
      },
      onError: (error) => {
        alert(error?.response?.data?.message);
      },
    }
  );

  const handleBlogTagFollow = () => {
    if (!isLoggedIn) {
      setOpen(true);
    } else {
      let followBlogTagObj = {
        userId: userData?._id,
        blogTag: tagListName,
      };
      followBlogTag(followBlogTagObj);
    }
  };

  {/* get BlogTag Following Status Based on UserID*/}
  const { mutate: fetchFollowStatus } = useMutation(
    () =>
      fetcher.get(
        `${API_BASE_URL}/v1/blog/check-follow-tag?userId=${userData?._id}&blogTag=${tagListName}`
      ),
    {
      onSuccess: (response) => {
        setFollowStatus(response?.data?.isFollowing);
      },
      onError: (error) => {
        alert(error?.response?.data?.message);
      },
    }
  );

  useEffect(() => {
    if (isLoggedIn) {
      fetchFollowStatus();
    }
  }, [isLoggedIn, userData.userId, tagListName]);

  return (
    <Box>
      <Box sx={style.bannerConatiner}>
        <Box sx={style.subConatiner}>
          <Box sx={style.bannerContent}>
            <Typography component="h2">{tagListName}</Typography>
            <Box sx={style.topicCSS}>Topic : {markedblogList?.length} Followers : 75K Stories</Box>
            <Box sx={style.followBtn}>
              <Button onClick={() => handleBlogTagFollow()}>
                {" "}
                {followStatus ? "Following" : "Follow"}
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <AuthenticationComponent
        callBackName={"uniqueCommunity"}
        open={open}
        handleModalClose={() => setOpen(false)}
      />
    </Box>
  );
};
