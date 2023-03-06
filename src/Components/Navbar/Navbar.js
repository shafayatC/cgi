/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useState } from "react";
import { Drawer } from "antd";
import { HomeOutlined, MenuOutlined } from "@ant-design/icons";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { CaretDownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { HashLink } from "react-router-hash-link";

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
              <HashLink className="font-medium" onClick={onclose} to="/#home">

              <button className=" hover:bg-shade-color  w-full text-left hover:text-white rounded-l-3xl p-1 pl-5">
                  Home
                </button>     
          </HashLink>
            </li>
            {/* 
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
            */}
            <li>
              <HashLink 
                to="/#service"
                className="font-medium hover:text-white"
              >
                <button onClick={onclose} className=" hover:bg-shade-color  w-full text-left hover:text-white rounded-l-3xl p-1 pl-5">
                  Service
                </button>
              </HashLink>
            </li>
            
            <li>
              <HashLink
                to="/#workfor"
                onClick={onclose}
                className="font-medium hover:text-white"
              >
                <button className=" hover:bg-shade-color  w-full text-left hover:text-white rounded-l-3xl p-1 pl-5">
                  We Work For
                </button>
              </HashLink>
            </li>
            <li>
              <HashLink
                to="#contactus"
                onClick={onclose}
                className="font-medium hover:text-white"
              >
                <button className=" hover:bg-shade-color  w-full text-left hover:text-white rounded-l-3xl p-1 pl-5">
                  Contact us
                </button>
              </HashLink>
            </li>
            
            <li>
              <Link
              target="_blank"
                to="https://app.cutoutwiz.com/Identity/Account/Login?ReturnUrl=%2F"
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
