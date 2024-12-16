import { cn } from "@/lib/utils";

const Progress = ({ max }) => {
  return (
    <div className="w-[300px] h-2 bg-gray-400 rounded-md">
      <div className={cn("bg-primary h-2 rounded-md", max)}></div>
    </div>
  );
};

export default Progress;
