import React from "react";
import dynamic from "next/dynamic";

const ListingBlog = dynamic(
  () => import("../../src/components/feature/Blog/ListingBlog"),
  {
    ssr: false,
  }
);

const Index = () => {
  return (
    <>
      <ListingBlog />
    </>
  );
};

export default Index;
