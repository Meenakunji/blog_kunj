import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import style from "../../Home/style";
import { useMutation } from "react-query";
import { useRouter } from "next/router";
import fetcher from "../../../../dataProvider";
import ImageSlider from "../../../common/ImageSlider";

export const BlogContentTypeList = () => {
  const router = useRouter();
  const [homePageBlogContents, setHomePageBlogContents] = useState([]);

  // get all cms details based on category
  const { mutate: getAllcategoryDetails } = useMutation(
    () => fetcher.get(`http://localhost:3003/v1/blog/list`),
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
                  <Box sx={style.chip} style={{ backgroundColor: item?.color }}>
                    {item?.blogTag}
                  </Box>

                  {/* <Box
                    component="img"
                    src={item?.image?.[0]?.parentUrl}
                    style={{
                      borderRadius: "8px",
                    }}
                  /> */}
                  <ImageSlider images={item?.image} thumbnails={item?.image} />
                  <Typography variant="h2">{item?.blogTitle}</Typography>

                  <Typography variant="p">
                    {item?.description?.split(" ").slice(0, 30).join(" ")}
                    <a
                      href="#"
                      onClick={() => router.push("/home")}
                      style={{ cursor: "pointer" }}
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
