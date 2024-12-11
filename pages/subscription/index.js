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
  Paper,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";

const FeatureList = ({ features }) => (
  <List dense>
    {features.map((feature, index) => (
      <ListItem key={index} disableGutters>
        <ListItemText
          primary={feature}
          primaryTypographyProps={{
            variant: "body2",
            color: "#b0b0b0",
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
        backgroundColor: "#1e1e1e",
        borderRadius: "12px",
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
        backgroundColor: "#121212", // Dark background
        minHeight: "100vh",
        color: "#ffffff", // White text for readability
      }}
    >
      <Container maxWidth="lg">
        {/* Page Header */}
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
        <Box sx={{ textAlign: "center", mt: 8 }}>
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2, color: "#ffffff" }}>
            Why Choose Us?
          </Typography>
          <Paper
            sx={{
              backgroundColor: "#1e1e1e",
              maxWidth: "800px",
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
                mb: 3,
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
        </Box>
      </Container>
    </Box>
  );
};

export async function getServerSideProps() {
  // Mocked Data Fetching (replace with real API calls)
  const subscriptionPlans = [
    {
      id: 1,
      name: "Basic Plan",
      price: 10,
      description: "Ideal for individuals who want access to essential features.",
      features: [
        "Access to basic tools and features",
        "Standard customer support",
        "Limited access to premium content",
        "Monthly usage report",
      ],
    },
    {
      id: 2,
      name: "Pro Plan",
      price: 20,
      description: "Perfect for professionals who need advanced features.",
      features: [
        "Access to all tools and features",
        "Priority customer support",
        "Advanced analytics and reports",
        "Access to exclusive webinars",
      ],
    },
    {
      id: 3,
      name: "Enterprise Plan",
      price: 50,
      description: "Best for businesses and teams requiring premium support and tools.",
      features: [
        "Unlimited access to all features",
        "Dedicated account manager",
        "Team collaboration tools",
        "Customizable dashboards and reports",
        "Premium 24/7 support",
      ],
    },
  ];

  return {
    props: { subscriptionPlans },
  };
}

export default SubscriptionPage;
