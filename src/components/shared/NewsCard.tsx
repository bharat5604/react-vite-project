import { Link } from "react-router-dom";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/Card";
import { ResultsType } from "@/types/common";

const NewsCard = ({ item }: { item: ResultsType }) => {
  return (
    <Card data-testid="news-card">
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
  );
};

export default NewsCard;
