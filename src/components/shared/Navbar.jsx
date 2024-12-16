import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TbWorld } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import Buttons from "../common/Buttons";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <section className="border-b border-[#ADADAD]">
      <div className="flex md:flex-row flex-col justify-around items-center gap-3 md:gap-6 py-4 md:py-6">
        <div>
          <NavLink to="/">
            <img src="/logo.png" alt="" />
          </NavLink>
        </div>
        <div className="flex justify-center items-center gap-2 border border-[#ADADAD] px-4 py-1 rounded-full">
          <Select className="outline-none border-none focus:outline-none focus:border-none">
            <SelectTrigger className="outline-none border-none focus:outline-none focus:border-none text-secondary-PhilippineGray">
              <SelectValue placeholder={"restaurant, hotel, service...."} />
            </SelectTrigger>
            <SelectContent className="text-secondary-PhilippineGray">
              <SelectGroup>
                <SelectItem value="America">restaurant</SelectItem>
                <SelectItem value="Bangladesh">hotel</SelectItem>
                <SelectItem value="singapour">service</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <hr className="bg-[#ADADAD] w-[1px] h-6 rotate-180" />
          <Select className="outline-none border-none focus:outline-none focus:border-none">
            <SelectTrigger className="outline-none border-none focus:outline-none focus:border-none text-secondary-PhilippineGray">
              <SelectValue placeholder={"Singapour..."} />
            </SelectTrigger>
            <SelectContent className="text-secondary-PhilippineGray">
              <SelectGroup>
                <SelectItem value="singapour">singapour</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <button type="button" className="bg-primary rounded-full">
            <CiSearch className="w-8 h-8 text-white" />
          </button>
        </div>
        <div className="flex  items-center gap-3 ">
          <TbWorld className="h-6 w-6 " />
          <Buttons>MyFeedback for business</Buttons>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
