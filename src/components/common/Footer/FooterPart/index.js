import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { Box, Container, Grid, Link, Typography } from "@mui/material";
import Image from "next/image";
import TwitterImage from "../../../../../public/images/about/NewTwitterx.svg";
import HeartImage from "../../../../../public/images/home/Heart.svg";
import style from "../style";

export const FooterPartComponent = () => {
  return (
    <Box sx={{ ...style.newLatter, background: "linear-gradient(to right, #0D2436, #183B56)", py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Brand Section */}
          <Grid item xs={12} sm={4}>
            <Box sx={style.footerDetails}>
              <Box display="flex" alignItems="center" mb={2}>
                <MenuBookIcon sx={{ fontSize: 50, color: "#fff" }} />
                <Typography
                  component="h1"
                  sx={{ fontSize: 24, fontWeight: "bold", color: "#fff", ml: 1 }}
                >
                  Sahitya
                </Typography>
              </Box>
              <Typography variant="body1" sx={{ color: "#cfd8dc", mb: 2 }}>
                Sahitya is your go-to blogging platform for sharing ideas, stories, and experiences with a vibrant community of writers and readers.
                Unleash your creativity and connect with like-minded individuals.
              </Typography>
              <Typography variant="body1" sx={{ color: "#cfd8dc" }}>
                Join us today and embark on a journey of self-expression, inspiration, and learning. Explore, write, and thrive with Sahitya.
              </Typography>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={6} sm={2}>
            <Box sx={style.footerList}>
              <Typography variant="h6" sx={{ color: "#fff", mb: 2 }}>
                Quick Links
              </Typography>
              <ul>
                <li>
                  <Link href="/about" sx={{ color: "#cfd8dc", textDecoration: "none", "&:hover": { color: "#fff" } }}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/terms" sx={{ color: "#cfd8dc", textDecoration: "none", "&:hover": { color: "#fff" } }}>
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" sx={{ color: "#cfd8dc", textDecoration: "none", "&:hover": { color: "#fff" } }}>
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/contact" sx={{ color: "#cfd8dc", textDecoration: "none", "&:hover": { color: "#fff" } }}>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </Box>
          </Grid>

          {/* Explore Categories */}
          <Grid item xs={6} sm={2}>
            <Box sx={style.footerList}>
              <Typography variant="h6" sx={{ color: "#fff", mb: 2 }}>
                Explore
              </Typography>
              <ul>
                <li>
                  <Link href="/blog" sx={{ color: "#cfd8dc", textDecoration: "none", "&:hover": { color: "#fff" } }}>
                    Latest Blogs
                  </Link>
                </li>
                <li>
                  <Link href="/categories" sx={{ color: "#cfd8dc", textDecoration: "none", "&:hover": { color: "#fff" } }}>
                    Categories
                  </Link>
                </li>
                <li>
                  <Link href="/resources" sx={{ color: "#cfd8dc", textDecoration: "none", "&:hover": { color: "#fff" } }}>
                    Resources
                  </Link>
                </li>
                <li>
                  <Link href="/faqs" sx={{ color: "#cfd8dc", textDecoration: "none", "&:hover": { color: "#fff" } }}>
                    FAQs
                  </Link>
                </li>
              </ul>
            </Box>
          </Grid>

          {/* Social Media Links */}
          <Grid item xs={12} sm={4}>
            <Box sx={style.footerList2}>
              <Typography variant="h6" sx={{ color: "#fff", mb: 2 }}>
                Connect with Us
              </Typography>
              <Typography variant="body1" sx={{ color: "#cfd8dc", mb: 2 }}>
                Stay updated with the latest blogs and stories. Follow us on social media and never miss an update!
              </Typography>
              <ul style={{ display: "flex", gap: "1rem" }}>
                <li>
                  <Link
                    href="www.linkedin.com/in/kunji-lal-meena-653503194"
                    target="_blank"
                    aria-label="LinkedIn"
                    sx={{ "&:hover": { color: "#0077b5" } }}
                  >
                    <LinkedInIcon sx={{ color: "#cfd8dc", fontSize: 30 }} />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.facebook.com"
                    target="_blank"
                    aria-label="Facebook"
                    sx={{ "&:hover": { color: "#4267B2" } }}
                  >
                    <FacebookIcon sx={{ color: "#cfd8dc", fontSize: 30 }} />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://twitter.com/pankajk66711680"
                    target="_blank"
                    aria-label="Twitter"
                  >
                    <Image
                      src={TwitterImage}
                      alt="Twitter"
                      width={30}
                      height={30}
                      style={{ objectFit: "contain" }}
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.instagram.com"
                    target="_blank"
                    aria-label="Instagram"
                    sx={{ "&:hover": { color: "#E1306C" } }}
                  >
                    <InstagramIcon sx={{ color: "#cfd8dc", fontSize: 30 }} />
                  </Link>
                </li>
              </ul>
            </Box>
          </Grid>
        </Grid>
        <Box sx={style.copyRight}>
          <span>
            <Image
              src={HeartImage}
              alt="like icon"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
              }}
            />
          </span>
          <Typography>Copyright © 2023. Crafted with love.</Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default FooterPartComponent;
