import Buttons from "../common/Buttons";

const Reviews = () => {
  return (
    <>
      <hr className="w-full h-[1px] bg-[#D3D3D3]" />
      <section className="w-[80%] mx-auto my-16">
        <div className="flex gap-8 items-center">
          <Buttons className="bg-white text-EerieBlack border border-EerieBlack hover:bg-gray-300">
            <img src="/filter.png" alt="" /> filter
          </Buttons>
          <Buttons className="bg-white text-EerieBlack border border-EerieBlack hover:bg-gray-300">
            <img src="/sort.png" alt="" /> Sort
          </Buttons>
        </div>
        <div className="mt-8"></div>
      </section>
    </>
  );
};

export default Reviews;
