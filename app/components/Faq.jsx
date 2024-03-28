"use client";

import AccrodianCustomItem from "./AccrodianCustomItem";
import Link from "next/link";

const Faq = ({ items }) => {
  return (
    <section className="container mx-auto px-4 lg:px-[57px]">
      <div className="flex justify-center items-center">
        <h3 className="font-medium text-24 md:text-32 text-secondary pb-[15.45px]">
          সচরাচর জিজ্ঞাসা
        </h3>
      </div>
      <div className="flex flex-col space-y-5 md:space-y-0 md:flex-row-reverse md:justify-center md:items-center">
        <div className="flex justify-center items-center md:w-[50%]">
          {/* img */}
          <img
            className="w-[60%]"
            loading="lazy"
            src="/images/home_faq.png"
            alt="images"
            placeholder=""
          />
        </div>
        <div className="md:w-[50%]">
          {items?.length > 0 ? (
            <>
              {items?.slice(0, 5)?.map((faq, index) => (
                <AccrodianCustomItem key={index} {...faq} />
              ))}
            </>
          ) : (
            <>
              <div
                role="status"
                className="w-full p-2 border border-gray-200 rounded shadow animate-pulse md:p-2 dark:border-gray-700 mt-2"
              >
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
              </div>
              <div
                role="status"
                className="w-full p-2 border border-gray-200 rounded shadow animate-pulse md:p-2 dark:border-gray-700 mt-2"
              >
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
              </div>
              <div
                role="status"
                className="w-full p-2 border border-gray-200 rounded shadow animate-pulse md:p-2 dark:border-gray-700 mt-2"
              >
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
              </div>
              <div
                role="status"
                className="w-full p-2 border border-gray-200 rounded shadow animate-pulse md:p-2 dark:border-gray-700 mt-2"
              >
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
              </div>
              <div
                role="status"
                className="w-full p-2 border border-gray-200 rounded shadow animate-pulse md:p-2 dark:border-gray-700 mt-2"
              >
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
              </div>
            </>
          )}

          <div className="flex justify-center items-center pt-5">
            <Link
              href={{ pathname: "/faq" }}
              shallow
              className="font-medium text-14 md:text-16 text-white bg-primary px-5 py-0.5 md:py-1 md:px-7 rounded-md"
            >
              আরও
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
