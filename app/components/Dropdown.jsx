'use client'

import { useState } from "react";
import Link from "next/link";

const Dropdown = ({title, children}) => {
    const [active, setActive] = useState(false);
    return (
      <>
        <div
          onClick={() => setActive(!active)}
          onMouseEnter={() => {
            setActive(true);
          }}
          onMouseLeave={() => {
            setActive(false);
          }}
          className="inline-block relative"
        >
          <button
            className="text-semiblack focus:outline-none font-medium lg:text-18
                                                                        text-center inline-flex items-center"
          >
            {title}

            <svg
              className="ml-2"
              width={15}
              height={15}
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.875 5.2125L2.26219 4.6875L12.7566 4.6875L13.125 5.19375L7.84969 10.3125H7.07437L1.875 5.2125Z"
                fill="#1E433D"
              />
            </svg>
          </button>

          <div
            className={`custom-scrollbar w-60 h-60 overflow-y-auto z-50 absolute   bg-white divide-y divide-gray-100 rounded-lg shadow ${
              active ? "block" : "hidden"
            }`}
          >
            <ul
              className="py-2 text-semiblack pb-3 flex flex-col space-y-2"
              aria-labelledby="dropdownHoverButton1"
            >
              {children?.map((itm, indx) => (
                <li key={indx}>
                  {itm?.link?.includes("http") ? (
                    <a
                      href={itm?.link}
                      className="block py-2 hover:text-magenta mx-4 border-b"
                    >
                      {itm?.title}
                    </a>
                  ) : (
                    <Link
                      href={
                        itm?.link?.includes("http")
                          ? itm?.link
                          : "/" + itm?.link
                      }
                      className="block py-2 hover:text-magenta mx-4 border-b"
                    >
                      {itm?.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </>
    );
};

export default Dropdown;