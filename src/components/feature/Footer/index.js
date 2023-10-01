// import { Box, ListItem } from "@mui/material";
// import List from "@mui/material/List";
// import Link from "next/link";
// import React from "react";
// import style from "./style";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import EmailIcon from "@mui/icons-material/Email";
// import PhoneIcon from "@mui/icons-material/Phone";
// import WhatsAppIcon from "@mui/icons-material/WhatsApp";
// import HomeWorkIcon from "@mui/icons-material/HomeWork";

// const FooterComponent = () => {
//   return (
//     <>
//       <Box sx={style.footerSocail}>
//         <div className="container-fluid">
//           <Box sx={style.footerSocailBottom}>
//             <p>Get connected with us on social networks:</p>
//             <Box sx={style.socailIcon}>
//               <Link
//                 href="/"
//                 className="me-4 text-reset"
//                 style={{ color: "#fff !important" }}
//               >
//                 <FacebookIcon />
//               </Link>
//               <Link
//                 href="https://twitter.com/pankajk66711680"
//                 target="_blank"
//                 className="me-4 text-reset"
//                 style={{ color: "#fff !important" }}
//               >
//                 <TwitterIcon />
//               </Link>
//               <Link
//                 href="https://twitter.com/pankajk66711680"
//                 target="_blank"
//                 className="me-4 text-reset"
//                 style={{ color: "#fff !important" }}
//               >
//                 <TwitterIcon />
//               </Link>
//               <Link
//                 href="/"
//                 className="me-4 text-reset"
//                 style={{ color: "#fff !important" }}
//               >
//                 <InstagramIcon />
//               </Link>
//               <Link
//                 href="https://www.linkedin.com/in/pankaj-kumar-meena-1b3922176/"
//                 target="_blank"
//                 className="me-4 text-reset"
//                 style={{ color: "#fff !important" }}
//               >
//                 <LinkedInIcon />
//               </Link>
//               <Link
//                 href="whatsapp://send?text=8003356924"
//                 target="_blank"
//                 className="me-4 text-reset"
//                 style={{ color: "#fff !important" }}
//               >
//                 <WhatsAppIcon />
//               </Link>
//             </Box>
//           </Box>
//         </div>
//       </Box>
//       <footer>
//         <Box sx={style.footer}>
//           <div className="container-fluid">
//             <div className="row">
//               <div className="col-md-3">
//                 <Box sx={style.footerList}>
//                   <h5>Jupiter Blogger</h5>
//                   <img
//                     src={"/images/home/bloggerlogo.png"}
//                     style={{ width: "110px", contentVisibility: "auto" }}
//                     alt="footer logo"
//                     loading="lazy"
//                     decoding="async"
//                   />
//                   <p>
//                     Jupiter Blogger: Your go-to blogging website for sharing
//                     ideas, stories, and experiences with a vibrant community of
//                     writers and readers. Unleash your creativity and connect
//                     with like-minded individuals at Jupiter Blogger.
//                   </p>
//                 </Box>
//               </div>
//               <div className="col-md-3">
//                 <Box sx={style.footerList}>
//                   <h5>Products</h5>
//                   <List>
//                     <ListItem>Angular</ListItem>
//                     <ListItem>React</ListItem>
//                     <ListItem>Vue</ListItem>
//                     <ListItem>Laravel</ListItem>
//                   </List>
//                 </Box>
//               </div>
//               <div className="col-md-3">
//                 <Box sx={style.footerList}>
//                   <h5>Products</h5>
//                   <List>
//                     <ListItem>Angular</ListItem>
//                     <ListItem>React</ListItem>
//                     <ListItem>Vue</ListItem>
//                     <ListItem>Laravel</ListItem>
//                   </List>
//                 </Box>
//               </div>
//               <div className="col-md-3">
//                 <Box sx={style.footerList}>
//                   <h5>Contact</h5>
//                   <List>
//                     <ListItem>
//                       <HomeWorkIcon /> House No 24, 2th Floor, near Sai Temple{" "}
//                       <br />
//                       Sector 16, Old FaridaBad, 121003
//                     </ListItem>
//                     <ListItem>
//                       <EmailIcon />
//                       jupiterblogger@gmail.com
//                     </ListItem>
//                     <ListItem>
//                       {" "}
//                       <PhoneIcon /> +91 800 3256 956
//                     </ListItem>
//                   </List>
//                 </Box>
//               </div>
//             </div>
//           </div>
//         </Box>
//       </footer>
//     </>
//   );
// };

// export default FooterComponent;

import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  ListItem,
  Typography,
} from "@mui/material";
import List from "@mui/material/List";
import React from "react";
import style from "./style";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import HomeWorkIcon from "@mui/icons-material/HomeWork";

const FooterComponent = () => {
  return (
    <>
      <Box sx={style.newLatter}>
        <Container maxWidth="lg">
          <Grid container>
            <Grid xs={6}>
              <Box sx={style.newLatterSection}>
                <Typography variant="h6">
                  Get our stories delivered From us
                  <br /> to your inbox weekly.
                </Typography>
                <form>
                  <input type="text" placeholder="Your Email" id="email" />
                  <Button>Get started</Button>
                </form>
                <Typography variant="body1">
                  Jupiter Blogger: Your go-to blogging website for sharing
                  ideas, stories, and experiences with a vibrant community of
                  writers and readers. Unleash your creativity and connect with
                  like-minded individuals at Jupiter Blogger.
                </Typography>
              </Box>
            </Grid>
            <Grid xs={6}>
              <Box sx={style.bestWeek}>
                <Box sx={style.bestWeekBox}>
                  <img src="/images/home/Base.jpg" alt="" />
                  <Box sx={style.bestWeekDetails}>
                    <Typography variant="h5">
                      The best aticles every week
                    </Typography>
                    <Typography variant="body1">
                      Our insurance plans offers are priced the same everywhere
                      else.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={style.newLatter}>
        <Container maxWidth="md">
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Box sx={style.footerDetails}>
                <img src="/images/home/Logo.svg" />
                <Typography variant="body1">
                  Jupiter Blogger: Your go-to blogging website for sharing
                  ideas,
                  <br />
                  stories, and experiences with a vibrant community of writers
                  and readers. Unleash your creativity and connect with
                  like-minded individuals at Jupiter Blogger.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box sx={style.footerList}>
                <Typography variant="h4">Important Links</Typography>
                <ul>
                  <li>About</li>
                  <li>Terms</li>
                  <li>Privacy Policy</li>
                  <li>Careers</li>
                </ul>
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box sx={style.footerList2}>
                <Typography variant="h4">Follow us at</Typography>
                <ul>
                  <li>
                    <Link
                      href="https://www.linkedin.com/in/pankaj-kumar-meena-1b3922176/"
                      target="_blank"
                      className="me-4 text-reset"
                      style={{ color: "#fff !important" }}
                    >
                      <LinkedInIcon />
                    </Link>
                    Linkedin
                  </li>
                  <li>
                    <Link
                      href="https://www.linkedin.com/in/pankaj-kumar-meena-1b3922176/"
                      target="_blank"
                      className="me-4 text-reset"
                      style={{ color: "#fff !important" }}
                    >
                      <FacebookIcon />
                    </Link>
                    Facebook
                  </li>
                  <li>
                    <Link
                      href="https://twitter.com/pankajk66711680"
                      target="_blank"
                      className="me-4 text-reset"
                      style={{ color: "#fff !important" }}
                    >
                      {" "}
                      <TwitterIcon />
                    </Link>
                    Twitter
                  </li>
                  <li>
                    <Link
                      href="https://www.linkedin.com/in/pankaj-kumar-meena-1b3922176/"
                      target="_blank"
                      className="me-4 text-reset"
                      style={{ color: "#fff !important" }}
                    >
                      <InstagramIcon />
                    </Link>
                    Instagram
                  </li>
                </ul>
              </Box>
            </Grid>
          </Grid>
          <Box sx={style.copyRight}>
            <span>
              <img src="/images/home/Heart.svg" alt="" />
            </span>
            <Typography>Copyright © 2023. Crafted with love.</Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default FooterComponent;
