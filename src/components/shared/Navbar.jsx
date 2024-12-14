import { Input } from "@/components/ui/input";
import { TbWorld } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <section className="border-b border-[#ADADAD]">
      <div className="flex md:flex-row flex-col justify-around items-center gap-3 md:gap-6 py-4 md:py-6">
        <div>
          <img src="/logo.png" alt="" />
        </div>
        <div className="flex justify-center items-center gap-2 border border-[#ADADAD] px-4 py-1 rounded-full">
          <Input
            className="rounded-full border-none outline-none focus-visible:ring-0 font-roboto"
            placeholder="restaurant, hotel, service...."
          />
          <hr className="bg-[#ADADAD] w-[1px] h-6 rotate-180" />
          <Input
            className="rounded-full border-none focus-visible:ring-0 font-roboto"
            placeholder="Singapour..."
          />
          <div className="bg-primary rounded-full cursor-pointer">
            <CiSearch className="w-8 h-8 text-white" />
          </div>
        </div>
        <div className="flex  items-center gap-3 ">
          <TbWorld className="h-6 w-6 " />
          <Button className="bg-EerieBlack text-white rounded-full font-roboto text-base leading-4">
            MyFeedback for business
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
