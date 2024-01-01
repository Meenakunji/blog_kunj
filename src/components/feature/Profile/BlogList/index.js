import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import fetcher from "../../../../dataProvider";
import style from "../../Home/style";
import { API_BASE_URL } from "../../../../constant/appConstants";
import { setParticularBlogContent } from "../../../../redux/slices/user";
import { createSlug } from "../../../../../utils/common";

export const BlogList = () => {
  const [userBlogList, setUserBlogList] = useState([]);
  const router = useRouter();
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.user);

  // create New ArtistEntery
  const { mutate: getMarkedBlogList } = useMutation(
    () => fetcher.get(`${API_BASE_URL}/v1/blog/user-blog-list?userId=${userData?._id}`),
    {
      onSuccess: ({ data }) => {
        setUserBlogList(data);
      },
      onError: (error) => {
        alert(error?.response?.data?.message);
      },
    }
  );

  // call API
  useEffect(() => {
    getMarkedBlogList();
  }, []);

  const handleBlogContentListPage = (item) => {
    dispatch(setParticularBlogContent(item));
    const urlSlug = createSlug(item?.userData?.[0]?.name, item?.blogTitle);
    router.push(`/${urlSlug}`);
  };

  return (
    <>
      {userBlogList.length === 0 ? (
        <Typography component="p">No blogs found.</Typography>
      ) : (
        userBlogList.map((item, index) => (
          <div className="col-md-12 mt-4" key={index}>
            <Box sx={style.cardBox}>
              <Box sx={style.mediaCard} key={index}>
                {/* <Box sx={style.chip}>{item?.blogTag}</Box> */}
                <div
                  className="row"
                  onClick={() => handleBlogContentListPage(item)}
                  style={{ cursor: "pointer" }}
                >
                  <div className="col-md-4">
                    <Box component="img" src={item?.image} />
                  </div>
                  <div className="col-md-8">
                    <Typography variant="h2">{item?.blogTitle}</Typography>
                    <Box sx={style.userdetails} onClick={() => router.push(`/profile?tab=home`)}>
                      <Box
                        component="img"
                        src={item?.userData?.[0]?.profilePic}
                        style={{
                          borderRadius: "100px",
                          width: "30px",
                          height: "30px",
                          border: "1px solid #c3c3c3",
                        }}
                      />
                      <Typography variant="Body1">
                        By {item?.userData?.[0]?.name} -{" "}
                        {new Date(item?.createdAt).toLocaleDateString("en-US", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </Typography>
                    </Box>
                    <Typography variant="body1">
                      {item?.description?.split(" ").slice(0, 30).join(" ")}
                      <a
                        href={`/blog/${item?.blogTag}`}
                        style={{ cursor: "pointer", color: "#d80af1" }}
                      >
                        ...Read More
                      </a>
                    </Typography>
                  </div>
                </div>
              </Box>
            </Box>
          </div>
        ))
      )}
    </>
  );
};
