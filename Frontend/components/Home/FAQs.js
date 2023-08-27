// import React, { useEffect, useState } from "react";
// import songStyle from "./styles";
// import { Box } from "@mui/material";
// import Faq from "../../src//components/common/Faq";
// import { useQuery } from "react-query";
// import fetcher from "../../src/dataProvider";

// const FAQs = (props) => {
//   const { withoutBG = false } = props;
//   const [homeFaq, setHomeFaq] = useState("");
//   const { data: homeFaqData } = useQuery(
//     `http://localhost:3003/v1/faq/list`,
//     () =>
//       fetcher.get(`http://localhost:3003/v1/faq/list`, {
//         params: {
//           [`filters[faq_category][category_title][$eq]`]: props.slug
//             ? `faq-song-${props.slug}`
//             : "Home FAQ",
//           populate: "*",
//           sort: ["sequence"],
//         },
//       })
//   );

//   useEffect(() => {
//     if (homeFaqData) {
//       setHomeFaq(homeFaqData);
//     }
//   }, [homeFaqData]);
//   return (
//     <Box id="Faqs" sx={withoutBG ? null : songStyle.FAQSection}>
//       <Box sx={songStyle.FAQRow}>
//         {homeFaq?.data?.length > 0 && <Faq faqs={homeFaq} />}
//       </Box>
//     </Box>
//   );
// };

// export default FAQs;
