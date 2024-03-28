"use client";
import { cn } from "@/lib/utils";
import {
  faAngleLeft,
  faAngleRight,
  faNewspaper,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Link from "next/link";
import { cache } from "react";

const Notice = ({ items }) => {
      // console.log("items", items);
  const [isShow, setIsShow] = useState(false);

  return (
    <div className="hidden absolute z-30 md:flex top-0 bottom-6 w-full overflow-hidden">
      <div className={cn("w-[21%]", isShow ? "" : "hidden")} id="notice2">
        <div className="bg-primary  flex items-center justify-center space-x-3">
          <img src="/images/notice_icon.svg" alt="image" />
          <p className="font-medium text-20 text-slate-50">নোটিশ</p>
        </div>
        <div className="p-3 bg-slate-50 overflow-y-auto custom-scrollbar h-full flex flex-col space-y-3 ">
          {items?.map((item, index) => (
                                    <div key={index} className="flex justify-center space-x-5 border-b pb-8">
                                          <span className="text-primary">
                                                <FontAwesomeIcon icon={faPlay} />
                                          </span>
                                          <Link className="text-15 leading-5 hover:underline" href={{pathname:`/notice/${item?.id}`}} shallow>
                                                {item?.notice?.slice(0, 50)}
                                                <span className="text-15 text-gray-500">{item?.notice?.length > 50 ? '. . .' : ''}</span>
                                          </Link>
                                    </div>
                              ))}
        </div>
        <div>
          <a href="/">সব গুলো</a>
        </div>
      </div>

      <button
        onClick={(e) => setIsShow(!isShow)}
        className="bg-slate-50 flex flex-col items-center h-full w-[4%] drop-shadow-lg font-medium text-15 leading-[19.88px]"
        id="notice1"
      >
        <span className="pt-4 pb-[9rem]">
          <FontAwesomeIcon
            icon={isShow ? faAngleLeft : faAngleRight}
            style={{ color: "#198754" }}
          />
        </span>
        <span className="flex flex-col justify-center items-center">
          <span className="pb-[13.33px]">
            <svg
              width="21"
              height="15"
              viewBox="0 0 21 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.6667 0.833008H3.55556C3.09531 0.833008 2.72222 1.2061 2.72222 1.66634V1.94412H1.33333C0.87309 1.94412 0.5 2.31721 0.5 2.77745V12.2219C0.5 13.2958 1.37056 14.1663 2.44444 14.1663H18.8333C19.7538 14.1663 20.5 13.4202 20.5 12.4997V1.66634C20.5 1.2061 20.1269 0.833008 19.6667 0.833008ZM2.44444 12.4997C2.37077 12.4997 2.30012 12.4704 2.24803 12.4183C2.19593 12.3662 2.16667 12.2956 2.16667 12.2219V3.61079H2.72222V12.2219C2.72222 12.2956 2.69296 12.3662 2.64086 12.4183C2.58877 12.4704 2.51812 12.4997 2.44444 12.4997ZM10.6389 11.9441H5.36111C5.13101 11.9441 4.94444 11.7576 4.94444 11.5275V11.2497C4.94444 11.0196 5.13101 10.833 5.36111 10.833H10.6389C10.869 10.833 11.0556 11.0196 11.0556 11.2497V11.5275C11.0556 11.7576 10.869 11.9441 10.6389 11.9441ZM17.8611 11.9441H12.5833C12.3532 11.9441 12.1667 11.7576 12.1667 11.5275V11.2497C12.1667 11.0196 12.3532 10.833 12.5833 10.833H17.8611C18.0912 10.833 18.2778 11.0196 18.2778 11.2497V11.5275C18.2778 11.7576 18.0912 11.9441 17.8611 11.9441ZM10.6389 8.61079H5.36111C5.13101 8.61079 4.94444 8.42422 4.94444 8.19412V7.91634C4.94444 7.68624 5.13101 7.49967 5.36111 7.49967H10.6389C10.869 7.49967 11.0556 7.68624 11.0556 7.91634V8.19412C11.0556 8.42422 10.869 8.61079 10.6389 8.61079ZM17.8611 8.61079H12.5833C12.3532 8.61079 12.1667 8.42422 12.1667 8.19412V7.91634C12.1667 7.68624 12.3532 7.49967 12.5833 7.49967H17.8611C18.0912 7.49967 18.2778 7.68624 18.2778 7.91634V8.19412C18.2778 8.42422 18.0912 8.61079 17.8611 8.61079ZM17.8611 5.27745H5.36111C5.13101 5.27745 4.94444 5.09089 4.94444 4.86079V3.4719C4.94444 3.24179 5.13101 3.05523 5.36111 3.05523H17.8611C18.0912 3.05523 18.2778 3.24179 18.2778 3.4719V4.86079C18.2778 5.09089 18.0912 5.27745 17.8611 5.27745Z"
                fill="#198754"
              />
            </svg>
          </span>
          <span>নোটিশ</span>
        </span>
      </button>
    </div>
  );
};

export default Notice;
