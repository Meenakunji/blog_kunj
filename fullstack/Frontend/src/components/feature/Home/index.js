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
      id: "11",
      name: "Blog11",
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
      id: "12",
      name: "Blog12",
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
      id: "13",
      name: "Blog13",
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
  ];
  return (
    <Box sx={style.mainContainer}>
      {HomePageObj &&
        HomePageObj?.map((item, index) => {
          return (
            <Box sx={style.mediaCard} key={index}>
              {/* <Typography variant="h1">{item?.name}</Typography> */}
              <Box
                sx={style.blogTagcss}
                style={{ backgroundColor: item?.color }}
              >
                <Typography variant="h1">{item?.blogTag}</Typography>
              </Box>
              <Box
                component="img"
                src={item?.image}
                style={{
                  borderRadius: "8px",
                }}
              />
              <Typography variant="p">{item?.blogTitle}</Typography>
              <Box>
                <Box
                  component="img"
                  src={item?.profilepic}
                  style={{
                    borderRadius: "10px",
                    width: "30px",
                    height: "30px",
                  }}
                />
                <Typography variant="p">
                  By {item?.user} - {item?.creatAt}
                </Typography>
              </Box>
              <Typography variant="p">{item?.description}</Typography>
            </Box>
          );
        })}
    </Box>
  );
};
