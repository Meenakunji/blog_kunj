import { API_BASE_URL } from "../../constant/appConstants";
import fetcher from "../../dataProvider";

export const fetchBlogContent = async (blogTag, page) => {
  try {
    const response = await fetcher.get(
      `${API_BASE_URL}/v1/blog/content?blogTag=${blogTag}&page=${page}`
    );
    return response; // This will return data and totalPages
  } catch (error) {
    throw new Error(error.response?.data?.message || "Error occurred while fetching data");
  }
};
