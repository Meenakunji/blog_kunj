const { Artists } = require("../models");

const rTracer = require("cls-rtracer");

const getArtists = async () => {
  const data = await Artists.find().lean();
  const newData = [];
  // data.map((item) => {
  //   newData.push({
  //     id: item?.id,
  //     _id: item?._id,
  //     attributes: {
  //       ...item,
  //       image: {
  //         data: {
  //           id: item?.image?.id,
  //           attributes: {
  //             ...item?.image?.data,
  //           },
  //         },
  //       },
  //       artist_top_songs: {
  //         data: [
  //           {
  //             id: item?.artist_top_songs?.id,
  //             attributes: {
  //               ...item?.artist_top_songs?.data,
  //             },
  //           },
  //         ],
  //       },
  //       artist_assets: {
  //         data: [
  //           {
  //             _id: item?.artist_assets?.id,
  //             attributes: {
  //               ...item?.artist_assets?.data[0],
  //             },
  //           },
  //         ],
  //       },
  //     },
  //   });
  // });
  return newData;
};

module.exports = {
  getArtists,
};
