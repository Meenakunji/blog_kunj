import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Container,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography
} from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";

const styles = {
  centeredListItem: {
    display: "flex",
    alignItems: "center",
  },
};

const FeatureList = ({ features }) => (
  <List dense>
    {features.map((feature, index) => (
      <ListItem key={index} disableGutters className={styles.centeredListItem}>
        <ListItemText
          primary={feature}
          primaryTypographyProps={{
            variant: "body2",
            color: "#b0b0b0",
            textAlign: "center",
          }}
        />
      </ListItem>
    ))}
  </List>
);

const SubscriptionCard = ({ plan }) => {
  const [expanded, setExpanded] = useState(false);
  const router = useRouter();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{
        boxShadow: 3,
        background: "linear-gradient(rgb(255 255 255 / 0%) 0%, #152532 71.87%)",
        borderRadius: "12px",
        border: "1px solid #4caf50",
        color: "#ffffff",
        textAlign: "center",
        transition: "transform 0.3s",
        "&:hover": {
          transform: "translateY(-10px)",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.5)",
        },
      }}
    >
      <CardContent>
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            mb: 1,
            color: "#ffffff",
          }}
        >
          {plan.name}
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: "#4caf50",
            mb: 2,
          }}
        >
          ${plan.price}/month
        </Typography>
        <Typography variant="body2" sx={{ color: "#b0b0b0", mb: 2 }}>
          {plan.description}
        </Typography>

        <Typography variant="subtitle1" sx={{ fontWeight: "bold", mt: 2, mb: 1 }}>
          What&apos;s Included:
        </Typography>
        <FeatureList features={plan.features} />
      </CardContent>
      <CardActions sx={{ justifyContent: "center", pb: 2 }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#4caf50",
            color: "#121212",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "#66bb6a",
            },
          }}
          onClick={() => router.push(`/subscribe/${plan.id}`)}
        >
          Subscribe
        </Button>
      </CardActions>

      {/* Expandable Section for more details */}
      <Divider />
      <Box sx={{ textAlign: "center" }}>
        <IconButton
          onClick={handleExpandClick}
          sx={{ color: "#b0b0b0", mb: 1 }}
          aria-expanded={expanded}
        >
          <ExpandMoreIcon />
        </IconButton>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Box sx={{ p: 2 }}>
            <Typography variant="body2" sx={{ color: "#b0b0b0" }}>
              Additional details about the plan can be added here, such as terms of service, payment
              information, and more.
            </Typography>
          </Box>
        </Collapse>
      </Box>
    </Card>
  );
};

const SubscriptionPage = ({ subscriptionPlans }) => {
  const router = useRouter();

  return (
    <Box
      sx={{
        py: 6,
        mt: 5,
        minHeight: "100vh",
        color: "#ffffff",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2, color: "#ffffff" }}>
            Choose Your Subscription Plan
          </Typography>
          <Typography variant="body1" sx={{ color: "#b0b0b0", mb: 3 }}>
            Find the perfect plan tailored for your needs. Enjoy a wide range of exclusive features,
            tools, and premium support.
          </Typography>
        </Box>

        {/* Subscription Plans */}
        <Grid container spacing={4}>
          {subscriptionPlans.map((plan) => (
            <Grid item xs={12} sm={6} md={4} key={plan.id}>
              <SubscriptionCard plan={plan} />
            </Grid>
          ))}
        </Grid>

        {/* Additional Section */}
        {/* <Box sx={{ textAlign: "center", mt: 8 }}>
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2, color: "#ffffff" }}>
            Why Choose Us?
          </Typography>
          <Paper
            sx={{
              background: "linear-gradient(rgb(255 255 255 / 0%) 0%, #152532 71.87%)",
              maxWidth: "800px",
              borderRadius: "12px",
              border: "1px solid #4caf50",
              mx: "auto",
              p: 3,
              borderRadius: "8px",
              boxShadow: 3,
            }}
          >
            <Typography
              variant="body1"
              sx={{
                color: "#b0b0b0",
                mb: 7,

              }}
            >
              With our subscription plans, you gain access to powerful tools, personalized support,
              and an ever-growing library of exclusive content. We are committed to helping you
              succeed and providing the best experience possible.
            </Typography>
            <Button
              variant="outlined"
              sx={{
                borderColor: "#4caf50",
                mt: 5,
                color: "#4caf50",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "#66bb6a",
                  borderColor: "#66bb6a",
                  color: "#121212",
                },
              }}
              onClick={() => router.push("/contact")}
            >
              Contact Us
            </Button>
          </Paper>
        </Box> */}
      </Container>
    </Box>
  );
};

export default SubscriptionPage;
