import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const Card = ({ api, className, imageClass, titleClass, desClass }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((value) => setData(value));
  }, [api]);
  return (
    <>
      {data.map((items) => (
        <div
          key={items.id}
          className={cn("flex flex-col gap-3 rounded-xl", className)}
        >
          <img
            src={items.image}
            alt=""
            className={cn("w-[285px] h-[213px]", imageClass)}
          />
          <div className="space-y-2">
            <h1
              className={cn(
                "font-semibold font-roboto text-[19px] text-EerieBlack leading-5",
                titleClass
              )}
            >
              {items.title}
            </h1>
            <p
              className={cn(
                "text-secondary-PhilippineGray font-roboto text-sm leading-4 w-[80%]",
                desClass
              )}
            >
              {items.des}
            </p>
            <div className="flex justify-start items-center gap-3">
              {Array.from(Array(items.rating).keys()).map((el) => (
                <img src="/star.png" alt="" key={el} />
              ))}
              <p
                className={cn(
                  "font-roboto font-semibold text-sm leading-4 text-EerieBlack"
                )}
              >
                {items.rating}
              </p>
              <p
                className={cn(
                  "font-roboto font-semibold text-sm leading-4 text-[#7A7A7A]"
                )}
              >
                {items.totalReviews}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
