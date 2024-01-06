import React from "react";
import { FooterPartComponent } from "./FooterPart";
import { FooterSendNotification } from "./SendNotification";

const FooterComponent = () => {
  return (
    <>
      <FooterSendNotification />
      <FooterPartComponent />
    </>
  );
};

export default FooterComponent;
