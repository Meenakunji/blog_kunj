import YouTubeComponent from "./youtubeVideos";

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
