import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useMutation } from "react-query";
import fetcher from "../../../../../dataProvider";
import style from "../../../Home/style";
import { useDispatch, useSelector } from "react-redux";
import { createSlug } from "../../../../../../utils/common";
import { setParticularBlogContent } from "../../../../../redux/slices/user";
import { API_BASE_URL } from "../../../../../constant/appConstants";

export const TagListComponent = () => {
  const [markedblogList, setMarkedblogList] = useState([]);
  const router = useRouter();
  const dispatch = useDispatch();
  const { tagListName } = useSelector((state) => state.user);

  // create New ArtistEntery
  const { mutate: getMarkedBlogList } = useMutation(
    () => fetcher.get(`${API_BASE_URL}/v1/blog/blog-contents`),
    {
      onSuccess: ({ data }) => {
        const result = data?.filter((item) => item?.blogTag === tagListName);
        setMarkedblogList(result);
      },
      onError: (error) => {
        alert(error?.response?.data?.message);
      },
    }
  );
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
      {markedblogList &&
        markedblogList.map((item, index) => {
          return (
            <div
              className="col-md-4 mt-3"
              key={index}
              style={{ width: "32.333333%" }}
            >
              <div className="card p-3">
                <Box sx={style.mediaCard} key={index}>
                  <Box sx={style.chip} style={{ backgroundColor: item?.color }}>
                    {item?.blogTag}
                  </Box>

                  <Box
                    component="img"
                    src={item?.image}
                    style={{
                      borderRadius: "8px",
                    }}
                  />
                  <Typography variant="h2">{item?.blogTitle}</Typography>
                  <Box sx={style.userdetails}>
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
                    <Typography variant="p">
                      By {item?.userData?.[0]?.name} -{" "}
                      {new Date(item?.creatAt).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </Typography>
                  </Box>
                  <Typography variant="p">
                    {" "}
                    {item?.description?.split(" ").slice(0, 15).join(" ")}
                    <a
                      onClick={() => handleBlogContentListPage(item)}
                      style={{ cursor: "pointer", color: "#d80af1" }}
                    >
                      ...Read More
                    </a>
                  </Typography>
                </Box>
              </div>
            </div>
          );
        })}
    </>
  );
};
