import { RxCross2 } from "react-icons/rx";

const SortCard = ({ handleOpen }) => {
  return (
    <div className="bg-white shadow-md p-8 rounded-md border border-[#E6E6E6] relative flex flex-col items-center gap-5">
      <div className="absolute top-2 right-2">
        <button type="button" onClick={handleOpen}>
          <RxCross2 />
        </button>
      </div>
      <button
        type="button"
        className="font-roboto text-base leading-5 text-[#5D5D5D] "
      >
        All feedbacks
      </button>
      <button
        type="button"
        className="font-roboto text-base leading-5 text-[#5D5D5D] "
      >
        Highest rated
      </button>
      <button
        type="button"
        className="font-roboto text-base leading-5 text-[#5D5D5D] "
      >
        oldest rated
      </button>
    </div>
  );
};

export default SortCard;