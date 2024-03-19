import { apiKey } from "../../helper/constant";
import ApiService from "../../helper/httpfetcher";
import { useEffect, useState } from "react";
import { Card, CardTitle } from "../ui/Card";

import NewsCardSkeleton from "../skeletons/NewsCardSkeleton";
import NewsCard from "../shared/NewsCard";
import { ResponseType, ResultsType } from "@/types/common";

const PopularNews = () => {
  const [popularNews, setPopularNews] = useState<ResultsType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchPopularNews = async () => {
      try {
        const response: ResponseType = await ApiService.fetchData({
          url: `viewed/30.json?api-key=${apiKey}`,
          method: "GET",
        });
        console.log("response", response.data);
        setPopularNews(response?.data?.results);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    };
    fetchPopularNews();
  }, []);
  return (
    <>
      <section className="grid  gap-5 sm:grid-cols-2  md:grid-cols-3">
        {isLoading &&
          [1, 2, 3, 4, 5, 6].map((_, index) => (
            <NewsCardSkeleton key={index} />
          ))}

        {!isLoading &&
          popularNews?.map((item) => (
            <NewsCard item={item} key={item?.id} data-testid="news-card" />
          ))}
      </section>
      {popularNews?.length === 0 && !isLoading && (
        <Card className="w-full p-10 text-center">
          <CardTitle as="h1" className="text-2xl text-red-500">
            No Data Found
          </CardTitle>
        </Card>
      )}
    </>
  );
};

export default PopularNews;
