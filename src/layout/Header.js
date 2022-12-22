import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { GrClose } from "react-icons/gr";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  const [modal, setModal] = useState(0);

  return (
    <>
      <div class="font-['poppins'] flex flex-col">
        <div class="relative w-full bg-[#00161F] bg-gradient-to-r from-indigo-900 py-1 px-3 flex flex-row items-center justify-between border-solid border-b-[10px] border-[#20203C] lg:px-8">
          <Link to="/">
            <img src={Logo} alt="baller" class="w-1/3 h-1/3 md:w-1/2 h-1/2" />
          </Link>

          <div class="hidden md:flex flex-row items-center justify-between">
            <div>
              <Link class="font-semibold text-md mr-7 text-white" to="/">
                Home
              </Link>
              <Link
                class="font-semibold text-md mr-7 text-white"
                to="/dashboard"
              >
                Dashboard
              </Link>
              <Link
                class="font-semibold text-md mr-7 text-white bg-[#8941FF] py-2 px-3 rounded-md"
                to="/sign-in"
              >
                Sign In
              </Link>
            </div>
          </div>

          <FiMenu
            onClick={() => {
              setModal(!modal);
            }}
            class="cursor-pointer text-3xl text-white md:hidden"
          />
          {modal ? (
            <div
              onClick={() => {
                setModal(!modal);
              }}
              class="fixed top-0 left-0 w-full h-full z-50 bg-[#00161F] bg-gradient-to-r from-indigo-900"
            ></div>
          ) : (
            ""
          )}
          {modal ? (
            <div class="fixed top-0 z-50 bg-white rounded-sm w-full h-full margin-auto flex flex-col items-center p-5">
              <div
                onClick={() => {
                  setModal(!modal);
                }}
                class="flex w-full text-2xl cursor-pointer absolute top-0"
              >
                <GrClose />
              </div>
              <div class="flex flex-col items-center mt-5">
                <Link class="font-semibold text-md mb-10 text-dark" to="/about">
                  Home
                </Link>
                <Link
                  class="font-semibold text-md mb-10 text-dark"
                  to="/dashboard"
                >
                  Dashboard
                </Link>
                <Link
                  class="font-semibold text-md mb-10 text-white bg-[#8941FF] py-2 px-3 rounded-md"
                  to="/sign-in"
                >
                  Sign In
                </Link>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
