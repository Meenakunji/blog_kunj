import { Box, Card, Grid, Typography } from "@mui/material";
import FollowersIcon from "@mui/icons-material/Group";
import PostsIcon from "@mui/icons-material/PostAdd";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export const DashBoardHomeListSection = () => {
  const cardData = [
    { icon: <FollowersIcon />, label: "Followers", value: 120, Iconcolor: "#EC3263" },
    { icon: <PostsIcon />, label: "Posts", value: 45, Iconcolor: "#00AEB8" },
    { icon: <FavoriteBorderIcon />, label: "Likes", value: 300, Iconcolor: "#1081E8" },
    { icon: <ViewInArIcon />, label: "Viewers", value: 75, Iconcolor: "#FF8700" },
  ];

  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={2}>
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ padding: 2, boxShadow: 3, backgroundColor: "#fff", textAlign: "center" }}>
              <Box sx={{ color: card.Iconcolor, mb: 1 }}>{card.icon}</Box>
              <Typography variant="h5" sx={{ mb: 1 }}>
                {card.value}
              </Typography>
              <Typography variant="subtitle1">{card.label}</Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
