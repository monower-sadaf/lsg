import React from "react";

export default function TableSkeleton() {
  return (
    <>
      <div
        role="status"
        className="w-full p-2 border border-gray-200 rounded shadow animate-pulse md:p-2 dark:border-gray-700 mt-2"
      >
        <div className="flex items-center w-full">
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-[5%]"></div>
          <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-[10%]"></div>
          <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-[65%]"></div>
          <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-[20%]"></div>
        </div>
      </div>
    </>
  );
}


