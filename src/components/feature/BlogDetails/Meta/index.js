import YouTubeComponent from "./youtubeVideos";
import React from 'react';

const MetaProperties = ({ meta, isMobile = false }) => {
  return (
    <>
      {/* {meta?.map((meta, mIndex) => { */}
      <YouTubeComponent meta={meta} isMobile={isMobile} />
      {/* })} */}
    </>
  );
};

export default MetaProperties;
