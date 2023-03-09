"use client";

import classNames from "classnames";
import Image from "next/image";
import React, { useState } from "react";

const NavBar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const toggleNav = () => setNavOpen(!navOpen);
  return (
    <>
      <div
        className={classNames(
          navOpen ? "fixed h-screen inset-0 z-20  bg-black/60 md:contents" : ""
        )}
      >
        <header className="">
          <nav
            className={classNames(
              "relative flex justify-between md:justify-start py-8 md:py-16 px-6 md:px-16 items-center gap-8 md:gap-16 ",
              navOpen ? " bg-white md:bg-transparent z-30" : ""
            )}
          >
            <button className="md:hidden " onClick={toggleNav}>
              <Image
                src={
                  navOpen
                    ? "/images/icon-close.svg"
                    : "/images/icon-hamburger.svg"
                }
                width={50}
                height={50}
                alt="logo"
                className="object-contain w-6 h-6"
              />
            </button>
            <Image
              src={"/images/logo.svg"}
              width={70}
              height={70}
              alt="logo"
              className={classNames(navOpen ? "hidden md:block" : "")}
            />
            <div>
              <ul
                className={classNames(
                  "md:flex justify-center items-center gap-8",
                  navOpen
                    ? "text-black md:text-white flex "
                    : "text-white hidden "
                )}
              >
                <li className="relative group">
                  <a href="#">home</a>
                  <span className="absolute w-0 h-0.5 transition-['width'] -translate-x-1/2 md:bg-white bg-Black group-hover:w-6 left-1/2 -bottom-2"></span>
                </li>
                <li className="relative group">
                  <a href="#">shop</a>
                  <span className="absolute w-0 h-0.5 transition-['width'] -translate-x-1/2 md:bg-white bg-Black group-hover:w-6 left-1/2 -bottom-2"></span>
                </li>
                <li className="relative group">
                  <a href="#">about</a>
                  <span className="absolute w-0 h-0.5 transition-['width'] -translate-x-1/2 md:bg-white bg-Black group-hover:w-6 left-1/2 -bottom-2"></span>
                </li>
                <li className="relative group">
                  <a href="#">contact</a>
                  <span className="absolute w-0 h-0.5 transition-['width'] -translate-x-1/2 md:bg-white bg-Black group-hover:w-6 left-1/2 -bottom-2"></span>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
};

export default NavBar;
