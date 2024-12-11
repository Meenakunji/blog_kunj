import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { API_BASE_URL } from "../../../../constant/appConstants";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { setTagListName } from "../../../../redux/slices/user";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

const Card = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  background: "#fff",
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[2],
  transition: "transform 0.3s",
  "&:hover": {
    transform: "scale(1.05)",
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: 50,
  height: 50,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginRight: theme.spacing(2),
  borderRadius: "50%",
  backgroundColor: theme.palette.grey[200],
}));

const SubcategoryCard = styled(Box)(({ theme }) => ({
  background: "#f9f9f9",
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[1],
  marginTop: theme.spacing(1),
}));

export const AllCategoryList = () => {
  const [allTagList, setAllTagList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const dispatch = useDispatch();
  const router = useRouter();

  const fetchAllTags = async () => {
    try {
      const resp = await fetch(`${API_BASE_URL}/v1/blog/all-tag`);
      if (!resp.ok) {
        throw new Error(`HTTP error! Status: ${resp.status}`);
      }
      const result = await resp.json();
      setAllTagList(result?.data);
    } catch (err) {
      alert(err?.response?.data?.message);
    }
  };

  useEffect(() => {
    fetchAllTags();
  }, []);

  const handleCategoryClick = (blogTag) => {
    setSelectedCategory(selectedCategory === blogTag ? null : blogTag);
  };

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: 2,
        padding: 2,
      }}
    >
      {allTagList?.map((category) => (
        <Box key={category.id}>
          <Card onClick={() => handleCategoryClick(category.blogTag)}>
            <IconWrapper>{category?.icon || <LocalOfferIcon />} </IconWrapper>
            <Typography variant="h6">{category.blogTag}</Typography>
          </Card>
          {selectedCategory === category.blogTag && (
            <Box sx={{ mt: 2, ml: 2 }}>
              {category?.subTags?.map((sub, index) => (
                <SubcategoryCard
                  key={index}
                  sx={{cursor: "pointer"}}
                  onClick={() => {
                    dispatch(setTagListName(sub));
                    router.push(`/tag/${sub}`);
                  }}
                >
                  <Typography variant="body2">{sub}</Typography>
                </SubcategoryCard>
              ))}
            </Box>
          )}
        </Box>
      ))}
    </Box>
  );
};
