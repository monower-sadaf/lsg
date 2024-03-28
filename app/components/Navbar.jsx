'use client';


import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie, faUsers } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { convertEnglishDateToBangla, dDate, dateName } from "@/helpers/helpers";
import Menu from "./Menu";
import Mobilemenu from "./Mobilemenu";
import { login_links } from "@/v1";

export default function Navbar() {
  const [links, setLinks] = useState({});

  useEffect(() => {
    login_links().then((data) => setLinks(data)).catch((err) => console.log(err));
  },[])

  
  
  return (
    <>
      <div className="lg:hidden bg-primary flex items-center justify-center p-3">
        <svg
          className="mr-3"
          width={24}
          height={25}
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21.75 3.5H19.5V2H18V3.5H6V2H4.5V3.5H2.25L1.5 4.25V22.25L2.25 23H21.75L22.5 22.25V4.25L21.75 3.5ZM21 21.5H3V8H21V21.5ZM21 6.5H3V5H21V6.5ZM6 12.5H4.5V14H6V12.5ZM4.5 15.5H6V17H4.5V15.5ZM6 18.5H4.5V20H6V18.5ZM9 12.5H10.5V14H9V12.5ZM10.5 15.5H9V17H10.5V15.5ZM9 18.5H10.5V20H9V18.5ZM10.5 9.5H9V11H10.5V9.5ZM13.5 12.5H15V14H13.5V12.5ZM15 15.5H13.5V17H15V15.5ZM13.5 18.5H15V20H13.5V18.5ZM15 9.5H13.5V11H15V9.5ZM18 12.5H19.5V14H18V12.5ZM19.5 15.5H18V17H19.5V15.5ZM18 9.5H19.5V11H18V9.5Z"
            fill="#FFFFFF"
          />
        </svg>
        <p className="text-slate-50 text-14">
          {dDate(new Date())} / {dateName(new Date())}{" "}
          {convertEnglishDateToBangla(new Date())}
        </p>
      </div>

      <nav className="px-3 lg:px-0 bg-[#FFFFFF] drop-shadow-lg sticky w-full z-50 top-0">
        <div className="container mx-auto px-4 lg:px-[50px] flex justify-between items-center ">
          <Link href="/" className="w-[30%] lg:w-[15%]">
            <img src="/images/logo.svg" alt="images" />
          </Link>
          <div className="flex justify-end items-center space-x-5 lg:w-[82%]">
            <div className="flex flex-col space-y-3">
              <div className="flex justify-end items-center space-x-7">
                <div className="lg:flex items-center space-x-1 hidden">
                  <svg
                    className="mr-1"
                    width={24}
                    height={25}
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M21.75 3.5H19.5V2H18V3.5H6V2H4.5V3.5H2.25L1.5 4.25V22.25L2.25 23H21.75L22.5 22.25V4.25L21.75 3.5ZM21 21.5H3V8H21V21.5ZM21 6.5H3V5H21V6.5ZM6 12.5H4.5V14H6V12.5ZM4.5 15.5H6V17H4.5V15.5ZM6 18.5H4.5V20H6V18.5ZM9 12.5H10.5V14H9V12.5ZM10.5 15.5H9V17H10.5V15.5ZM9 18.5H10.5V20H9V18.5ZM10.5 9.5H9V11H10.5V9.5ZM13.5 12.5H15V14H13.5V12.5ZM15 15.5H13.5V17H15V15.5ZM13.5 18.5H15V20H13.5V18.5ZM15 9.5H13.5V11H15V9.5ZM18 12.5H19.5V14H18V12.5ZM19.5 15.5H18V17H19.5V15.5ZM18 9.5H19.5V11H18V9.5Z"
                      fill="#198754"
                    />
                  </svg>
                  <p className="text-secondary text-14">
                    {dateName(new Date())} {dDate(new Date())} /{" "}
                    {dateName(new Date())}{" "}
                    {convertEnglishDateToBangla(new Date())}
                  </p>
                </div>
              </div>
              <div className="hidden lg:block">
                <Menu />
              </div>
            </div>

            <div className="flex ">
              <div className="hidden lg:flex flex-col space-y-3 p-2 bg-[#198754] rounded-b-lg ">
                <a
                  href={links?.nagorik_link ?? '#'}
                  className="flex items-center justify-center space-x-3 bg-red-700 border border-slate-50 h-[40px] rounded-full p-3"
                >
                  <span className="text-18 text-slate-50">
                    <FontAwesomeIcon icon={faUsers} />
                  </span>
                  <span className="text-14 text-slate-50">
                    নাগরিক সেবা কর্ণার
                  </span>
                </a>
                <a
                  href={links?.prshasonik_link ?? '#'}
                  className="flex items-center justify-center space-x-3 bg-white border border-primary h-[40px] rounded-full"
                >
                  <span className="text-secondary text-18 mr-2">
                    <FontAwesomeIcon icon={faUserTie} />
                  </span>
                  <span className="text-14 text-secondary">প্রশাসনিক লগইন</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <Mobilemenu />
      </nav>
    </>
  );
}
