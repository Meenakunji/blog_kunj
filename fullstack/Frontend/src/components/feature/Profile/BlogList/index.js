import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useMutation } from "react-query";
import fetcher from "../../../../dataProvider";
import style from "../../Home/style";

export const BlogList = () => {
  const [markedblogList, setMarkedblogList] = useState([]);
  // create New ArtistEntery
  const { mutate: getMarkedBlogList } = useMutation(
    () => fetcher.get(`http://localhost:3003/v1/blog/bookmark-blog-list`),
    {
      onSuccess: ({ data }) => {
        setMarkedblogList(data);
        console.log("data =====>>>", data);
      },
      onError: (error) => {
        alert(error?.response?.data?.message);
      },
    }
  );
  useEffect(() => {
    getMarkedBlogList();
  }, []);
  return (
    <>
      {markedblogList &&
        markedblogList.map((item, index) => {
          return (
            <div className="col-md-4 mt-3" key={index}>
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
                      src={item?.profilepic}
                      style={{
                        borderRadius: "100px",
                        width: "30px",
                        height: "30px",
                        border: "1px solid #c3c3c3",
                      }}
                    />
                    <Typography variant="p">
                      By {item?.user} -{" "}
                      {new Date(item?.creatAt).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </Typography>
                  </Box>
                  <Typography variant="p">{item?.description}</Typography>
                </Box>
              </div>
            </div>
          );
        })}
    </>
  );
};
