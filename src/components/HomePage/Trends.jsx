import Buttons from "../common/Buttons";
import Card from "../common/Card";

const Trends = () => {
  return (
    <section className="w-[96%] mx-auto my-12 md:my-24">
      <div>
        <h1 className="font-lexend font-extrabold text-2xl sm:text-heading sm:leading-10 leading-6 text-EerieBlack1E my-6">
          The latest trends
        </h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-3 gap-y-8">
          <Card api="./trends.json" />
        </div>
        <div className="my-12">
          <h4 className="font-lexend text-EerieBlack1E text-base sm:text-[22px] leading-7 text-center">
            Discover more cool restaurants
          </h4>
          <div className="flex justify-center mt-5">
            <Buttons className="bg-primary">Show more</Buttons>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trends;
