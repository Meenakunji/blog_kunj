import { Box, Typography } from "@mui/material";
import React from "react";
import style from "./style";
export const HomeComponet = () => {
  const HomePageObj = [
    {
      id: "1",
      name: "Blog1",
      image: "/images/home/Taj.jpg",
      blogTag: "sports",
      user: "Jupiter",
      blogTitle: "The AI magically removes moving objects from videos.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sunt tempora dolor laudantium sed optio, explicabo ad deleniti impedit facilis fugit recusandae! Illo, aliquid, dicta beatae quia porro id est.",
      creatAt: "July 19, 2019",
      color: "green",
      profilepic:
        "https://preview.colorlib.com/theme/miniblog/images/person_1.jpg.webp",
    },
    {
      id: "2",
      name: "Blog2",
      image: "/images/home/kedarnath.jpg",
      blogTag: "travel",
      user: "Jupiter",
      blogTitle: "The AI magically removes moving objects from videos.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sunt tempora dolor laudantium sed optio, explicabo ad deleniti impedit facilis fugit recusandae! Illo, aliquid, dicta beatae quia porro id est.",
      creatAt: "July 19, 2019",
      color: "#f57b42",
      profilepic:
        "https://preview.colorlib.com/theme/miniblog/images/person_1.jpg.webp",
    },
    {
      id: "3",
      name: "Blog3",
      image: "/images/home/munnar.jpg",
      blogTag: "education",
      user: "Jupiter",
      blogTitle: "The AI magically removes moving objects from videos.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sunt tempora dolor laudantium sed optio, explicabo ad deleniti impedit facilis fugit recusandae! Illo, aliquid, dicta beatae quia porro id est.",
      creatAt: "July 19, 2019",
      color: "#f542b0",
      profilepic:
        "https://preview.colorlib.com/theme/miniblog/images/person_1.jpg.webp",
    },
    {
      id: "4",
      name: "Blog4",
      image: "/images/home/paris.jpg",
      blogTag: "education",
      user: "Jupiter",
      blogTitle: "The AI magically removes moving objects from videos.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sunt tempora dolor laudantium sed optio, explicabo ad deleniti impedit facilis fugit recusandae! Illo, aliquid, dicta beatae quia porro id est.",
      creatAt: "July 19, 2019",
      color: "#f5425d",
      profilepic:
        "https://preview.colorlib.com/theme/miniblog/images/person_1.jpg.webp",
    },
    {
      id: "5",
      name: "Blog5",
      image: "/images/home/kolkata.jpg",
      blogTag: "education",
      user: "Jupiter",
      blogTitle: "The AI magically removes moving objects from videos.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sunt tempora dolor laudantium sed optio, explicabo ad deleniti impedit facilis fugit recusandae! Illo, aliquid, dicta beatae quia porro id est.",
      creatAt: "July 19, 2019",
      color: "#781e90",
      profilepic:
        "https://preview.colorlib.com/theme/miniblog/images/person_1.jpg.webp",
    },
    {
      id: "6",
      name: "Blog6",
      image: "/images/home/Thar.jpg",
      blogTag: "education",
      user: "Jupiter",
      blogTitle: "The AI magically removes moving objects from videos.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sunt tempora dolor laudantium sed optio, explicabo ad deleniti impedit facilis fugit recusandae! Illo, aliquid, dicta beatae quia porro id est.",
      creatAt: "July 19, 2019",
      color: "#1e9050",
      profilepic:
        "https://preview.colorlib.com/theme/miniblog/images/person_1.jpg.webp",
    },
    {
      id: "7",
      name: "Blog7",
      image: "/images/home/kerala.jpg",
      blogTag: "education",
      user: "Jupiter",
      blogTitle: "The AI magically removes moving objects from videos.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sunt tempora dolor laudantium sed optio, explicabo ad deleniti impedit facilis fugit recusandae! Illo, aliquid, dicta beatae quia porro id est.",
      creatAt: "July 19, 2019",
      color: "green",
      profilepic:
        "https://preview.colorlib.com/theme/miniblog/images/person_1.jpg.webp",
    },
    {
      id: "8",
      name: "Blog8",
      image: "/images/home/Raj.jpg",
      blogTag: "education",
      user: "Jupiter",
      blogTitle: "The AI magically removes moving objects from videos.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sunt tempora dolor laudantium sed optio, explicabo ad deleniti impedit facilis fugit recusandae! Illo, aliquid, dicta beatae quia porro id est.",
      creatAt: "July 19, 2019",
      color: "green",
      profilepic:
        "https://preview.colorlib.com/theme/miniblog/images/person_1.jpg.webp",
    },
    {
      id: "9",
      name: "Blog9",
      image: "/images/home/kerala.jpg",
      blogTag: "education",
      user: "Jupiter",
      blogTitle: "The AI magically removes moving objects from videos.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sunt tempora dolor laudantium sed optio, explicabo ad deleniti impedit facilis fugit recusandae! Illo, aliquid, dicta beatae quia porro id est.",
      creatAt: "July 19, 2019",
      color: "green",
      profilepic:
        "https://preview.colorlib.com/theme/miniblog/images/person_1.jpg.webp",
    },
    {
      id: "10",
      name: "Blog10",
      image: "/images/home/jiraf.jpg",
      blogTag: "education",
      user: "Jupiter",
      blogTitle: "The AI magically removes moving objects from videos.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sunt tempora dolor laudantium sed optio, explicabo ad deleniti impedit facilis fugit recusandae! Illo, aliquid, dicta beatae quia porro id est.",
      creatAt: "July 19, 2019",
      color: "green",
      profilepic:
        "https://preview.colorlib.com/theme/miniblog/images/person_1.jpg.webp",
    },
    {
      id: "11",
      name: "Blog11",
      image: "/images/home/cheetha.jpg",
      blogTag: "education",
      user: "Jupiter",
      blogTitle: "The AI magically removes moving objects from videos.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sunt tempora dolor laudantium sed optio, explicabo ad deleniti impedit facilis fugit recusandae! Illo, aliquid, dicta beatae quia porro id est.",
      creatAt: "July 19, 2019",
      color: "green",
      profilepic:
        "https://preview.colorlib.com/theme/miniblog/images/person_1.jpg.webp",
    },
    {
      id: "12",
      name: "Blog12",
      image: "/images/home/tiger.jpg",
      blogTag: "education",
      user: "Jupiter",
      blogTitle: "The AI magically removes moving objects from videos.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sunt tempora dolor laudantium sed optio, explicabo ad deleniti impedit facilis fugit recusandae! Illo, aliquid, dicta beatae quia porro id est.",
      creatAt: "July 19, 2019",
      color: "green",
      profilepic:
        "https://preview.colorlib.com/theme/miniblog/images/person_1.jpg.webp",
    },
    {
      id: "13",
      name: "Blog13",
      image: "/images/home/deer.jpg",
      blogTag: "education",
      user: "Jupiter",
      blogTitle: "The AI magically removes moving objects from videos.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sunt tempora dolor laudantium sed optio, explicabo ad deleniti impedit facilis fugit recusandae! Illo, aliquid, dicta beatae quia porro id est.",
      creatAt: "July 19, 2019",
      color: "green",
      profilepic:
        "https://preview.colorlib.com/theme/miniblog/images/person_1.jpg.webp",
    },
  ];
  return (
    <>
      {HomePageObj &&
        HomePageObj?.map((item, index) => {
          return (
            <div className="col-md-4 mt-3">
              <div className="card p-3">
                <Box sx={style.mediaCard} key={index}>
                  {/* <Typography variant="h1">{item?.name}</Typography> */}

                  {/* <Typography variant="h1"></Typography> */}
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
                      By {item?.user} - {item?.creatAt}
                    </Typography>
                  </Box>
                  {/* <a href="https://i.postimg.cc/13DfxTd9/kedarnath.jpg"><img src="https://i.postimg.cc/13DfxTd9/kedarnath.jpg" title="source: imgur.com" /></a> */}
                  <Typography variant="p">{item?.description}</Typography>
                </Box>
              </div>
            </div>
          );
        })}
    </>
  );
};
