import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

const Buttons = ({ children, className }) => {
  return (
    <Button
      className={cn(
        "bg-EerieBlack text-white rounded-full font-roboto text-base leading-4",
        className
      )}
    >
      {children}
    </Button>
  );
};

export default Buttons;
