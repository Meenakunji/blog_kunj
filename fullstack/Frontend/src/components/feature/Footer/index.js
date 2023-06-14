// import { Box, Typography, useMediaQuery } from "@mui/material";
// import Container from "@mui/material/Container";
// import Grid from "@mui/material/Grid";
// import { useRouter } from "next/router";
// import styles from "./style";

// export default function FooterComponent() {
//   var router = useRouter();

//   const isMobile = useMediaQuery("(max-width:768px)");

//   const data = [
//     {
//       name: "Discord",
//       src: "https://assets.artistfirst.in/meta-image/images/newHome/social-fanicon1.webp",
//       openNewTab: true,
//       url: "https://discord.com/channels/@me",
//     },
//     {
//       name: "Telegram",
//       src: "https://assets.artistfirst.in/meta-image/images/newHome/social-fanicon3.webp",
//       openNewTab: true,
//       url: "https://t.me/+6ldTYbzU1epmMmU9",
//     },
//     {
//       name: "Twitter",
//       src: "https://assets.artistfirst.in/meta-image/images/home/social/twitter.webp",
//       openNewTab: true,
//       url: "https://twitter.com/pankajk66711680",
//     },
//     {
//       name: "Medium",
//       src: "https://assets.artistfirst.in/meta-image/images/newHome/social-fanicon2.webp",
//       openNewTab: true,
//       url: "https://medium.com/@pankajkmeena12",
//     },
//     {
//       name: "YouTube",
//       src: "https://assets.artistfirst.in/meta-image/images/newHome/social-fanicon6.webp",
//       openNewTab: true,
//       url: " https://www.youtube.com/channel/UCIdKpJFO7wQls-MvJhLxtVw",
//     },
//     {
//       name: "Instagram",
//       src: "https://assets.artistfirst.in/meta-image/images/newHome/social-fanicon5.webp",
//       openNewTab: true,
//       url: " https://www.instagram.com/fantiger_com/",
//     },
//     {
//       name: "Facebook",
//       src: "https://assets.artistfirst.in/meta-image/images/newHome/social-fanicon4.webp",
//       openNewTab: true,
//       url: "https://www.facebook.com/FanTiger.india/",
//     },
//   ];

//   return (
//     <Box sx={styles.footerContainer}>
//       <Box sx={styles.linebreak} />

//       <Box sx={styles.fantiger__Footer}>
//         <Container maxWidth="lg">
//           <Grid
//             sx={styles.fantiger__FooterBottm}
//             direction="row"
//             alignItems="center"
//             container
//             rowSpacing={2}
//             columnSpacing={{ xs: 1, sm: 2, md: 3 }}
//           >
//             <Grid sx={styles.fanLogo__footer} item md={6} xs={12}>
//               <img
//                 src={"/images/home/bloggerlogo.png"}
//                 style={{ width: "210px", contentVisibility: "auto" }}
//                 alt="footer logo"
//                 loading="lazy"
//                 decoding="async"
//               />
//             </Grid>
//           </Grid>
//           <Grid
//             direction="row"
//             alignItems="center"
//             container
//             rowSpacing={2}
//             columnSpacing={{ xs: 1, sm: 2, md: 3 }}
//           >
//             <Grid sx={styles.orderchange} item md={6} xs={12}>
//               <Box sx={styles.footerList__ContactDetails}>
//                 <ul>
//                   <li
//                     onClick={() => console.log("call now")}
//                     style={{ cursor: "pointer" }}
//                   >
//                     <img
//                       src={
//                         "https://assets.artistfirst.in/meta-image/images/newHome/phone.webp"
//                       }
//                       alt="phone icon"
//                       loading="lazy"
//                       decoding="async"
//                       style={{ contentVisibility: "auto" }}
//                     />
//                     <span>+91 8003 356 924</span>
//                   </li>
//                   <li>
//                     <img
//                       src={
//                         "https://assets.artistfirst.in/meta-image/images/newHome/location.webp"
//                       }
//                       alt="location icon"
//                     />
//                     <span>
//                       House No 24, 2th Floor,near Sai Temple
//                       <br />
//                       Sector 16, Old FaridaBad, 121003
//                     </span>
//                   </li>
//                 </ul>
//               </Box>
//             </Grid>
//             <Grid item md={6} xs={12}>
//               <Typography variant="p">Connect With Us</Typography>
//               <Box sx={styles.footerList__socialIcon}>
//                 <ul>
//                   {data &&
//                     data?.length > 0 &&
//                     data.map((item, i) => {
//                       return (
//                         <li key={i} onClick={() => window.open(item?.url)}>
//                           <img
//                             src={item?.src}
//                             alt="social media follows icon"
//                           />
//                         </li>
//                       );
//                     })}
//                 </ul>
//               </Box>
//             </Grid>
//           </Grid>
//           <Box sx={styles.linebreak__footer}>&nbsp;</Box>

//           <Box sx={styles.fanTiger__footerCopyright}>
//             <a href="#">2023-24 ©️ Copyright © 2023 All rights reserved </a>
//           </Box>
//         </Container>
//       </Box>
//     </Box>
//   );
// }

import React from "react";

export const FooterComponent = () => {
  return (
    <div>
      <footer className="text-center text-lg-start bg-light text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>
          <div>
            <a href="/" className="me-4 text-reset">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="/" className="me-4 text-reset">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="/" className="me-4 text-reset">
              <i className="fab fa-google"></i>
            </a>
            <a href="/" className="me-4 text-reset">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="/" className="me-4 text-reset">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="/" className="me-4 text-reset">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section>
        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>Company name
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Angular
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    React
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Vue
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Laravel
                  </a>
                </p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Pricing
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Settings
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Orders
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Help
                  </a>
                </p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3"></i> New York, NY 10012, US
                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  info@example.com
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> + 01 234 567 88
                </p>
                <p>
                  <i className="fas fa-print me-3"></i> + 01 234 567 89
                </p>
              </div>
            </div>
          </div>
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2021 Company Name. All rights reserved.
        </div>
      </footer>
    </div>
  );
};
