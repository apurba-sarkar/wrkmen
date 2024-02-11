import { TiWorld } from "react-icons/ti";
import { FaPeopleGroup } from "react-icons/fa6";
import { AiFillProject } from "react-icons/ai";

const Stats = () => {
  return (
    <div className="bg-white flex justify-center items-center py-10 gap-12 font-medium text-2xl">
      <div className="flex items-center justify-between gap-2 ">
        {" "}
        <TiWorld size={50} color="#5b21b6" /> Countries <span className="text-primaryColor"> 20+</span>{" "}
      </div>
      <div>|</div>
      <div className="flex items-center justify-between gap-2">
        {" "}
        <FaPeopleGroup size={50} color="#5b21b6" /> Employees{" "}
        <span className="text-primaryColor"> 8000+</span>
      </div>
      <div>|</div>
      <div className="flex items-center justify-between gap-2">
        {" "}
        <AiFillProject size={50} color="#5b21b6" /> Projects <span className="text-primaryColor"> 4500+</span>
      </div>
    </div>
  );
};

export default Stats;
