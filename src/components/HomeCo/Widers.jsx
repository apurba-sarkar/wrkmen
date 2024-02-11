import { NavLink } from "react-router-dom";
const Widers = () => {
  return (
    <div className="bg-slate-200 flex justify-end gap-5 pr-2 py-3 ">
      <div  className=" text-blue-900">
        {" "}
        <NavLink to="/investors"> Investors</NavLink>
      </div>
      <div>
        {" "}
        <select name="" id="" className="bg-none" style={{backgroundColor:"transparent"}}>
          <option value="">Worldwide</option>
          <option value="">China</option>
        </select>
      </div>
    </div>
  );
};

export default Widers;
