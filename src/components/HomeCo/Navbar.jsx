import { NavLink } from "react-router-dom";
import Down from "../icons/Down"

const Navbar = () => {
  return (
    <div className="flex items-center text-2xl justify-between py-1 bg-white ">
      <div className="flex items-center h-10 my-5 gap-6  pl-3">
        <div>
          <NavLink to="/">
            <img className="h-20 pr-4" src="/heroimages/slogo.png" alt="" />{" "}
          </NavLink>
        </div>
        <div>
          <NavLink to="/" className="flex items-end gap-1">
            {" "}
            <span>Offerings </span>
            <span>
              {" "}
              <Down />
            </span>
          </NavLink>
        </div>
        <div>
          <NavLink to="/" className="flex items-end gap-1">
            {" "}
            <span>Industries</span>
            <span>
              {" "}
              <Down />
            </span>{" "}
          </NavLink>
        </div>
        <div>
          <NavLink to="/" className="flex items-end gap-1">
            <span>About Us</span>{" "}
            <span>
              {" "}
              <Down />
            </span>
          </NavLink>
        </div>
        <div>
          <NavLink to="/" className="flex items-end gap-1">
            {" "}
            <span>Insights </span>
            <span>
              {" "}
              <Down />
            </span>
          </NavLink>
        </div>
        <div>
          <NavLink to="/" className="flex items-end gap-1">
            {" "}
            <span >Careers</span>
            <span>
              {" "}
              <Down />
            </span>
          </NavLink>
        </div>
      </div>
      <div className="px-10">
        <NavLink to="/contactus" target="_blank" className="text-primaryColor font-medium">
          Contact Us
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
