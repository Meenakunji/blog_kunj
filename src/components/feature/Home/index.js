import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import style from "./style";
import { useMutation } from "react-query";
import fetcher from "../../../dataProvider";
import { API_BASE_URL } from "../../../constant/appConstants";

export const HomeComponet = () => {
  const [homePageBlogContents, setHomePageBlogContents] = useState([]);

  // get all cms details based on category
  const { mutate: getAllcategoryDetails } = useMutation(
    () => fetcher.get(`${API_BASE_URL}/v1/blog/content`),
    {
      onSuccess: (resData) => {
        setHomePageBlogContents(resData?.data);
      },
      onError: (error) => {
        alert(error?.response?.data?.message);
      },
    }
  );

  useEffect(() => {
    getAllcategoryDetails();
  }, []);

  return (
    <>
      {homePageBlogContents &&
        homePageBlogContents?.map((item, index) => {
          return (
            <div className="col-md-4 mt-3" key={index}>
              <div className="card p-3">
                <Box sx={style.mediaCard} key={index}>
                  {/* <Typography variant="h1">{item?.name}</Typography> */}

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
