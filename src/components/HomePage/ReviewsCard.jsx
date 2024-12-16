import { useEffect, useState } from "react";
import { LuUserRound } from "react-icons/lu";
const ReviewsCard = ({ api }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((jsonData) => setData(jsonData));
  });
  return (
    <>
      {data.map((items, i) => (
        <div key={i} className="space-y-4 w-fit px-6 py-3 bg-cardBg rounded-md">
          <div className="flex items-center gap-1">
            <div className="bg-white p-2 rounded-full">
              <LuUserRound size={30} />
            </div>
            <div>
              <h3 className="font-roboto font-semibold text-base sm:text-[21px] leading-6 text-EerieBlack">
                {items.name}
              </h3>
              <p className="font-roboto text-base leading-4 text-[#8A8A8A]">
                {items.location}
              </p>
            </div>
          </div>
          <div className="flex items-end gap-1 ">
            {Array.from(Array(items.star).keys()).map((el) => (
              <img key={el} src="/star.png" alt="" />
            ))}
            <p className="font-roboto text-sm leading-4 text-[#343434]">
              {items.date}
            </p>
          </div>
          <div>
            <p className="font-roboto text-base leading-[18px] text-[#5E5E5E] max-w-md">
              {items.des}
            </p>
            <div className="flex items-center gap-1 my-6">
              {items.image.map((image, i) => (
                <img
                  key={i}
                  src={image.src}
                  alt="image"
                  className="w-[118px] h-[118px]"
                />
              ))}
            </div>
            <p className="font-lexend font-medium text-[17px] leading-[21px] underline text-EerieBlack">
              {items.link}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default ReviewsCard;
