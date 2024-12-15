import Card from "../common/Card";
import { Button } from "../ui/button";

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
            <Button className="font-roboto text-xl leading-5 text-center text-white bg-primary rounded-full px-8 py-2">
              Show more
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trends;
