import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box, Link, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import TwitterImage from "../../../../../public/images/about/NewTwitterx.svg";
import style from "./style";

const UserProfile = () => {
  const { userData } = useSelector((state) => state.user);

  return (
    <Box sx={style.aboutSection}>
      <Box sx={style.profileHeader}>
        <Typography variant="h3" sx={style.profileTitle}>
          Discover More About Me
        </Typography>
        <Typography variant="body1" sx={style.profileSubtitle}>
          Dive deep into my journey, explore my passions, and understand what drives me.
        </Typography>
      </Box>
      <Box sx={style.profileContent}>
        <Typography variant="body1" sx={style.profileText}>
          Hello! I’m {userData?.name}, a passionate blogger and content creator. My journey began
          with a simple love for writing and storytelling, which evolved into a full-fledged career.
          Over the years, I’ve explored various topics, from technology and lifestyle to personal
          growth and creative expression. Each post on my blog reflects my experiences, insights,
          and the knowledge I&lsquo;ve accumulated along the way. I believe in the power of words to
          inspire, educate, and connect people. My mission is to create content that not only
          informs but also resonates with readers on a personal level. Whether you&lsquo;re here to
          learn something new, find inspiration, or simply enjoy a good read, I hope you find value
          in my blog. Apart from blogging, I enjoy [list hobbies or interests]. These activities not
          only fuel my creativity but also provide me with a fresh perspective on life, which I
          often share in my posts. If you have any questions or just want to say hello, feel free to
          reach out through the contact form or social media links provided below. Thank you for
          visiting my blog. I’m excited to have you here and look forward to sharing my thoughts and
          experiences with you!
        </Typography>
        <Box sx={style.socialLinks}>
          <Typography variant="h4">Follow us at</Typography>
          <ul>
            <li>
              <Link
                href="https://www.linkedin.com/in/pankaj-kumar-meena-1b3922176/"
                target="_blank"
                className="me-4 text-reset"
                style={{ color: "#fff !important" }}
              >
                <LinkedInIcon
                  style={{
                    width: "30px",
                    height: "auto",
                  }}
                />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.facebook.com/yourprofile"
                target="_blank"
                className="me-4 text-reset"
                style={{ color: "#fff !important" }}
              >
                <FacebookIcon
                  style={{
                    width: "30px",
                    height: "auto",
                  }}
                />
              </Link>
            </li>
            <li>
              <Link
                href="https://twitter.com/pankajk66711680"
                target="_blank"
                className="me-4 text-reset"
                style={{ color: "#fff !important" }}
              >
                <Image
                  src={TwitterImage}
                  alt="Twitter"
                  style={{
                    width: "24px",
                    height: "auto",
                    objectFit: "cover",
                  }}
                />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/yourprofile"
                target="_blank"
                className="me-4 text-reset"
                style={{ color: "#fff !important" }}
              >
                <InstagramIcon
                  style={{
                    width: "30px",
                    height: "auto",
                  }}
                />
              </Link>
            </li>
          </ul>
        </Box>
      </Box>
    </Box>
  );
};

export default UserProfile;
