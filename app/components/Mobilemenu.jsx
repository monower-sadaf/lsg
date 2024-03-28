"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUserTie, faUsers } from "@fortawesome/free-solid-svg-icons";
import { cn } from "@/lib/utils";
import Menu from "./Menu";
import { login_links } from "@/v1";

const Mobilemenu = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [links, setLinks] = useState({});

    useEffect(() => {
      login_links().then((data) => setLinks(data)).catch((err) => console.log(err));
    },[]);
  return (
    <>
      <div className="px-2 pb-1 flex justify-between lg:hidden gap-2">
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="outline-none mobile-menu-button text-2xl text-primary font-bold"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div className="flex justify-center items-center space-x-2 bg-primary w-full py-1 rounded">
          <a
            href={links?.nagorik_link ?? "#"}
            className="flex items-center justify-center space-x-3 bg-red-700 h-[35px] rounded-full px-3"
          >
            <span className="text-slate-50 text-18">
              <FontAwesomeIcon icon={faUsers} />
            </span>
            <span className="text-12 text-slate-50">নাগরিক কর্ণার</span>
          </a>
          <a
            href={links?.prshasonik_link ?? "#"}
            className="flex items-center justify-center space-x-3 border border-primary h-[35px] rounded-full px-3 text-secondary bg-white"
          >
            <span className=" text-18">
              <FontAwesomeIcon icon={faUserTie} />
            </span>
            <span className="text-12 ">প্রশাসনিক লগইন</span>
          </a>
        </div>
      </div>
      <div
        className={`lg:hidden mobile-menu z-50 absolute bg-white w-[94vw] border border-t-0 border-gray-500 shadow-lg shadow-green-100 rounded-b-md ${
          mobileMenu ? "" : "hidden"
        }`}
      >
        <Menu />
      </div>
    </>
  );
};

export default Mobilemenu;
