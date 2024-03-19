import { apiKey } from "@/helper/constant";
import ApiService from "@/helper/httpfetcher";
import { useEffect } from "react";

const PopularNews = () => {
  useEffect(() => {
    const fetchPopularNews = async () => {
      try {
        const response = await ApiService.fetchData({
          url: `viewed/1.json?api-key=${apiKey}`,
          method: "GET",
        });
        console.log("response", response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPopularNews();
  }, []);
  return <div>Popular news</div>;
};

export default PopularNews;
