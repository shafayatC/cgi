/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useState } from "react";
import { Drawer } from "antd";
import { HomeOutlined, MenuOutlined } from "@ant-design/icons";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { CaretDownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const items = [
    {
      key: "1",
      label: (
        <a
          className=""
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      ),
    },
    {
      key: "2",

      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          2nd menu item
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          3rd menu item
        </a>
      ),
    },
  ];

  return (
    <div className="container mx-auto pt-5 relative z-10">
      <div className="flex items-center justify-between">
        <a href="#"><img className="logo w-[100px]" src="img/logo.png" /></a>
        <div className="menu_wrap flex items-center  mt-2">
          <button
            className="menu mr-3 border-green-600 border-2 h-12 w-12 rounded-full"
            onClick={showDrawer}
          >
            <MenuOutlined className="h-4 w-5 font-medium " />
          </button>
          <button className="menu mr-8  border-green-600 border-2 h-12 w-12 rounded-full">
            <HomeOutlined className="h-4 w-5 font-medium " />
          </button>
        </div>
        <Drawer onClose={onClose} open={open}>
          <ul className="nav-ul">
            <li>
              <Link className="font-semibold" onClick={onclose} to="home">
                Home
              </Link>
            </li>
            <li>
              <Dropdown
                menu={{
                  items,
                }}
                trigger={["click"]}
                className="bg-black"
              >
                <Link
                  className="font-semibold hover:text-white "
                  onClick={(e) => e.preventDefault()}
                >
                  <button className="text-2xl flex items-center  hover:bg-green-500 w-full text-left hover:text-white rounded-md p-1 font-semibold">
                    Services
                    <CaretDownOutlined className="  ml-4 mt-1" />
                  </button>
                </Link>
              </Dropdown>
            </li>
            <li>
              <Link className="font-semibold " onClick={onclose} to="contact">
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="about"
                onClick={onclose}
                className="font-semibold hover:text-white"
              >
                <button className=" hover:bg-green-500 w-full text-left hover:text-white rounded-md p-1">
                  About
                </button>
              </Link>
            </li>
            <li>
              <Link
                to="sign-in"
                onClick={onClose}
                className="font-semibold hover:text-white "
              >
                <button className=" hover:bg-green-500 w-full text-left hover:text-white rounded-md p-1 ">
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
                <button className=" hover:bg-green-500 w-full text-left hover:text-white rounded-md p-1">
                  Sign up
                </button>
              </Link>
            </li>
          </ul>
        </Drawer>
      </div>
    </div>
  );
};

export default Navbar;
