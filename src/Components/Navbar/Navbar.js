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
        <Link to="/"><img className="logo w-[100px]" src="img/logo.png" /></Link>
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
              <Link className="font-medium" onClick={onclose} to="home">

              <button className=" hover:bg-shade-color  w-full text-left hover:text-white rounded-l-3xl p-1 pl-5">
                  Home
                </button>     
          </Link>
            </li>
            <li>
              <Dropdown
                menu={{
                  items,
                }}
                trigger={["click"]}
                className=""
              >
                <Link
                  className="font-medium hover:text-white "
                  onClick={(e) => e.preventDefault()}
                >
                <button className=" hover:bg-shade-color  w-full text-left hover:text-white rounded-l-3xl p-1 pl-5 flex items-center">
                    Services
                    <CaretDownOutlined className="  ml-4 mt-1" />
                  </button>
                </Link>
              </Dropdown>
            </li>
            <li>
              <Link
                to="sign-up"
                onClick={onclose}
                className="font-medium hover:text-white"
              >
                <button className=" hover:bg-shade-color  w-full text-left hover:text-white rounded-l-3xl p-1 pl-5">
                  Portfolio
                </button>
              </Link>
            </li>
            <li>
              <Link
                to="sign-up"
                onClick={onclose}
                className="font-medium hover:text-white"
              >
                <button className=" hover:bg-shade-color  w-full text-left hover:text-white rounded-l-3xl p-1 pl-5">
                  Apps
                </button>
              </Link>
            </li>
            <li>
              <Link
                to="sign-up"
                onClick={onclose}
                className="font-medium hover:text-white"
              >
                <button className=" hover:bg-shade-color  w-full text-left hover:text-white rounded-l-3xl p-1 pl-5">
                  Price
                </button>
              </Link>
            </li>
            <li>
              <Link
                to="sign-up"
                onClick={onclose}
                className="font-medium hover:text-white"
              >
                <button className=" hover:bg-shade-color  w-full text-left hover:text-white rounded-l-3xl p-1 pl-5">
                  Blog
                </button>
              </Link>
            </li>
            <li>
              <Link
                to="sign-up"
                onClick={onclose}
                className="font-medium hover:text-white"
              >
                <button className=" hover:bg-shade-color  w-full text-left hover:text-white rounded-l-3xl p-1 pl-5">
                  Contact
                </button>
              </Link>
            </li>
            <li>
              <Link
                to="sign-up"
                onClick={onclose}
                className="font-medium hover:text-white"
              >
                <button className=" hover:bg-shade-color  w-full text-left hover:text-white rounded-l-3xl p-1 pl-5">
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
