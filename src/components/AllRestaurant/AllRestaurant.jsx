import { Slash } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { NavLink, useNavigate } from "react-router-dom";
import Buttons from "../common/Buttons";
import { useState } from "react";
import SortCard from "./SortCard";
import Card from "../common/Card";
const AllRestaurant = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  const nextPage = () => {
    return navigate("/BellaItalia");
  };
  return (
    <section className="w-[95%] mx-auto my-6">
      <div className="flex flex-col md:flex-row gap-5">
        <div>
          <div>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <NavLink
                    to="/"
                    className="font-roboto font-semibold text-base leading-5 text-EerieBlack"
                  >
                    Home
                  </NavLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <Slash />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <NavLink
                    to="/AllRestaurant"
                    className="font-roboto font-semibold text-base leading-5 text-EerieBlack"
                  >
                    All Restaurant
                  </NavLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div className="relative flex justify-around items-center">
              <h1 className="font-lexend font-extrabold text-xl md:text-heading leading-10 text-EerieBlack1E my-2">
                best restaurants in singapore
              </h1>
              <Buttons
                className="border border-[#5E5E5E] text-[#5E5E5E] bg-white flex gap-[1px] hover:bg-gray-300 hover:text-EerieBlack"
                onClick={handleOpen}
              >
                <img src="/sort.png" alt="" />
                sort
              </Buttons>
              <div className=" absolute top-[70%] md:top-[90%] right-4">
                {isOpen ? <SortCard handleOpen={handleOpen} /> : null}
              </div>
            </div>
            <div className="my-8 space-y-5 border-b">
              <Card
                api="./allRestaurant.json"
                className="flex flex-col sm:flex-row gap-2 border-b border-[#DCDCDC] hover:cursor-pointer"
                imageClass="w-[209px] h-[189px]"
                onClick={nextPage}
              />
            </div>
            <Buttons className="bg-primary">Show more</Buttons>
          </div>
        </div>
        <div>
          <img src="/map.png" alt="" className="rounded-md" />
        </div>
      </div>
    </section>
  );
};

export default AllRestaurant;
