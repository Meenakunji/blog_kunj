import DefaultLayout from "./Default";
import EmptyLayout from "./Empty";
import React from "react";

const LayoutTypesMapping = {
  DefaultLayout,
  EmptyLayout,
};

const defaultLayoutType = "DefaultLayout";

const Layout = ({ asLayout = defaultLayoutType, children, ...rest }) => {
  const LayoutType = LayoutTypesMapping[asLayout];

  return <LayoutType {...rest}>{children}</LayoutType>;
};

export default Layout;
