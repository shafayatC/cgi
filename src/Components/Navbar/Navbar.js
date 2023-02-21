import React from "react";
import { useState } from "react";
import { Drawer } from "antd";
import { HomeOutlined, MenuOutlined } from "@ant-design/icons";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className="bg">
      <h4 className="font-bold text-3xl ml-5 text-green-700">
        {" "}
        The Kow Company
      </h4>
      <div className="flex items-center  mt-2">
        <button
          className="mr-3 border-green-600 border-2 h-12 w-12 rounded-full"
          onClick={showDrawer}
        >
          <MenuOutlined className="h-4 w-5 font-medium " />
        </button>
        <button className="mr-8  border-green-600 border-2 h-12 w-12 rounded-full">
          <HomeOutlined className="h-4 w-5 font-medium " />
        </button>
      </div>
      <Drawer onClose={onClose} open={open}>
        <ul className="nav-ul">
          <li>
            <Link onClick={onclose} to="home">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={onclose} to="services">
              Services
            </Link>
          </li>
          <li>
            <Link onClick={onclose} to="contact">
              Contact
            </Link>
          </li>
          <li>
            <Link onClick={onclose} to="about">
              About
            </Link>
          </li>
          <li>
            <Link
              to="sign-in"
              onClick={onClose}
              className="font-semibold hover:text-white "
            >
              <button className=" hover:bg-green-500 w-80 text-left hover:text-white rounded-md p-1 ">
                Sign in
              </button>
            </Link>
          </li>
          <li>
            <Link
              to="sign-up"
              onClick={onclose}
              className="font-semibold hover:text-white"
            >
              <button className=" hover:bg-green-500 w-80 text-left hover:text-white rounded-md p-1">
                Sign up
              </button>
            </Link>
          </li>
        </ul>
      </Drawer>
    </div>
  );
};

export default Navbar;
