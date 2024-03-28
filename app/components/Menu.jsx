"use client";

import { useState, useEffect } from "react";
import { MenuList as menulists } from "@/v1";
import Link from "next/link";
import Dropdown from './Dropdown';


const Menu = () => {
  const [menuList, setMenuList] = useState();

  useEffect(() => {
    menulists()
      .then((res) => {
        setMenuList(res.sort((a,b)=> a.created_at < b.created_at ? -1 : 1))
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  return (
    <>
      <ul className="lg:flex items-center text-left space-y-4 lg:space-y-0 lg:space-x-4  lg:text-15 p-2 lg:p-0">
        {menuList?.map((item, index) => {
          if (item?.childs?.length == 0) {
            return (
              <li key={index} className="border-b lg:border-none p-1 lg:p-0">
                {item?.link?.includes("http") ? (
                  <a
                    className="text-semiblack font-medium hover:text-magenta"
                    href={item?.link}
                  >
                    {item?.title}
                  </a>
                ) : (
                  <Link
                    className="text-semiblack font-medium hover:text-magenta"
                    href={
                      item?.link?.includes("http")
                        ? item?.link
                        : "/" + item?.link
                    }
                  >
                    {item?.title}
                  </Link>
                )}
              </li>
            );
          } else {
            return (
              <li
                key={index}
                className="group border-b lg:border-none p-1 lg:p-0"
              >
                <Dropdown title={item?.title}>{item?.childs}</Dropdown>
              </li>
            );
          }
        })}
      </ul>
    </>
  );
};

export default Menu;
