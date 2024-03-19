import { apiKey } from "@/helper/constant";
import ApiService from "@/helper/httpfetcher";
import { useEffect, useState } from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/Card";
import { Link } from "react-router-dom";
import NewsCardSkeleton from "../skeletons/NewsCardSkeleton";

type ResponseType = {
  data: DataType;
};

type DataType = {
  results: ResultsType[];
  num_results: number;
  status: string;
};
type ResultsType = {
  abstract: string;
  material_type_facet: string;
  media: MediaType[];
  title: string;
  url: string;
};

type MediaType = {
  "media-metadata": {
    url: string;
  }[];
};

const PopularNews = () => {
  const [popularNews, setPopularNews] = useState<ResultsType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchPopularNews = async () => {
      try {
        const response: ResponseType = await ApiService.fetchData({
          url: `viewed/1.json?api-key=${apiKey}`,
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
    <section className="grid grid-cols-3 gap-5">
      {isLoading &&
        [1, 2, 3, 4, 5, 6].map((_, index) => <NewsCardSkeleton key={index} />)}
      {!isLoading &&
        popularNews?.map((item, index) => (
          <Card as="article" key={index}>
            <Link to={item?.url} target="_blank">
              <img
                src={`${
                  item?.media[0]?.["media-metadata"][2]?.url ?? "/no-image.jpeg"
                }`}
                alt={item?.title}
                className="w-full h-40 rounded-tl-md rounded-tr-md object-cover"
              />
            </Link>
            <CardHeader>
              <CardTitle as="h1" className="line-clamp-2">
                <Link to={item?.url} target="_blank">
                  {item?.title}
                </Link>
              </CardTitle>
              <CardDescription className="line-clamp-5">
                {item?.abstract}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
    </section>
  );
};

export default PopularNews;
