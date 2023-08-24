import {
  Box,
  Link,
  List,
  ListItem,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import songStyle from "../../components/SongDetail/styles";
import trackEvents from "../../src/utils/trackEvent";

export default function SocialShareComponent({ nftLink = false, style }) {
  const { isLoggedIn } = useSelector((state) => state.user);
  const [shareUrl, setShareUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const isMobile = useMediaQuery("(max-width:768px)");
  const [refLinkText, setRefLinkText] = useState(
    "Invest in Songs and Own Music | Earn multifold returns"
  );

  const buttonProps = {
    url: nftLink ? nftLink : nftCardUrl,
    quote: shareUrl,
    hashtag: "#FanTV",
  };

  const buttonPropsSecond = {
    url: nftLink ? shareUrl + "\n" + nftLink : shareUrl + "\n" + nftCardUrl,
  };

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 500);
    }
  }, [copied]);

  const copyToClipboard = (e) => {
    navigator.clipboard.writeText(
      "This festive season gift FanTV exclusive music Cards💰 and get 1 FREE song Card."
    );

    setCopied(true);
  };

  return (
    <List sx={songStyle.socialShareinglist} style={style}>
      <ListItem>
        <WhatsappShareButton {...buttonPropsSecond}>
          <Link>
            <Box
              sx={{ cursor: "pointer" }}
              component="img"
              src="/images/songdetails/whatsapplogo.svg"
            />
            <Typography onClick={() => handleShared("Whatsapp")} component="p">
              Whatsapp
            </Typography>
          </Link>
        </WhatsappShareButton>
      </ListItem>

      <ListItem>
        <TelegramShareButton
          url={nftLink ? refLinkText + nftLink : refLinkText + nftCardUrl}
        >
          <Link>
            <Box
              component="img"
              src="/images/songdetails/telegramlogo.svg"
              sx={{ cursor: "pointer" }}
            />
            <Typography onClick={() => handleShared("Telegram")} component="p">
              Telegram
            </Typography>
          </Link>
        </TelegramShareButton>
      </ListItem>

      <ListItem>
        <FacebookShareButton {...buttonProps}>
          <Link>
            <Box
              component="img"
              src="/images/songdetails/fblogo.svg"
              sx={{ cursor: "pointer" }}
            />
            <Typography onClick={() => handleShared("Facebook")} component="p">
              Facebook
            </Typography>
          </Link>
        </FacebookShareButton>
      </ListItem>

      <ListItem>
        <TwitterShareButton {...buttonPropsSecond}>
          <Link>
            <Box
              component="img"
              src="/images/songdetails/twitterlogo.svg"
              sx={{ cursor: "pointer" }}
            />
            <Typography onClick={() => handleShared("Twitter")} component="p">
              Twitter
            </Typography>
          </Link>
        </TwitterShareButton>
      </ListItem>

      <ListItem sx={{ cursor: "pointer" }}>
        <Link onClick={(e) => copyToClipboard(e)}>
          <Box component="img" src="/images/songdetails/copylogo.svg" />
          <Typography component="p">Copy Link</Typography>
        </Link>
      </ListItem>
    </List>
  );
}
