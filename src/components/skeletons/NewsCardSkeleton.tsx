import { Card } from "../ui/Card";
import { Skeleton } from "../ui/skeleton";

const NewsCardSkeleton = () => {
  return (
    <Card as="article">
      <div>
        <Skeleton className="w-full h-40 rounded-tl-md rounded-tr-md" />
      </div>
      <div className="px-2 pb-4">
        <div>
          <Skeleton className="h-2  mt-2" />
        </div>
        <div className="">
          <Skeleton className="h-28  mt-2" />
        </div>
      </div>
    </Card>
  );
};

export default NewsCardSkeleton;
