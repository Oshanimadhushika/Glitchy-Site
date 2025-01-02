import React from "react";
import { Link } from "react-router-dom";
import Logo from "../asserts/logo.png";
import { Button } from "antd";

const Navbar = () => {
  // fixed top-0 left-0 right-0 z-50
  return (
    <div className="flex justify-between bg-black p-4 text-white px-20 ">
      <div className="">
        <img src={Logo} alt="" className="w-14 h-auto" />
      </div>
      <div className="flex gap-4">
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:text-black">
              Join the Community
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-black">
              Create Affiliate Program
            </Link>
          </li>
          {/* <li>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </li> */}
        </ul>

        <div className="border-r-2 border-white h-7"></div>

        <Button type="default" className="bg-purple-600 text-white border border-purple-600  hover:bg-purple-600 hover:border-purple-600 hover:text-black hover:text-lg focus:outline-none !important">
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
