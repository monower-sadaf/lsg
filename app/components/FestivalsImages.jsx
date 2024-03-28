"use client";

import Image from "next/image";

const FestivalsImages = ({ items }) => {
  return (
    <>
      <section className="container mx-auto px-4 lg:px-[50px]">
        <h3 className="text-secondary text-24 leading-[27.58px] lg:text-36 lg:leading-[36px] text-center pb-6">
          অনুষ্ঠান এবং উৎসব এর চিত্র
        </h3>
        {items?.length > 0 ? (
          <>
            <div className="flex flex-col lg:flex-row lg:w-full lg:justify-between lg:space-x-[15px]">
              <div className="flex flex-col space-y-[15px]">
                <div>
                  <Image
                    src={items[0]?.image_url}
                    className="w-[19.875em] lg:w-[23.45em]"
                    alt="images"
                    width={1000}
                    height={1000}
                  />
                </div>
                <div>
                  <Image
                    src={items[1]?.image_url}
                    className="w-[19.875em] lg:w-[23.45em]"
                    alt="images"
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>
              <div>
                <Image
                  src={items[2]?.image_url}
                  className="w-[19.875em] lg:w-[40.063em]"
                  alt="images"
                  width={1000}
                  height={1000}
                />
              </div>
              <div className="flex flex-col space-y-[15px] lg:justify-between">
                <div>
                  <Image
                    src={items[3]?.image_url}
                    className="w-[19.875em] lg:w-[23.45em]"
                    alt="images"
                    width={1000}
                    height={1000}
                  />
                </div>
                <div>
                  <Image
                    src={items[4]?.image_url}
                    className="w-[19.875em] lg:w-[23.45em]"
                    alt="images"
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col lg:flex-row lg:w-full lg:justify-between lg:space-x-[15px]">
              <div className="flex flex-col space-y-[15px]">
                <div
                  role="status"
                  className="w-full lg:w-[23.45em] p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700"
                >
                  <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700"></div>
                </div>

                <div
                  role="status"
                  className="w-full lg:w-[23.45em] p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700"
                >
                  <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700"></div>
                </div>
              </div>
              <div
                role="status"
                className="w-full lg:w-[40.063em] p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700"
              >
                <div className="flex items-center justify-center h-full mb-4 bg-gray-300 rounded dark:bg-gray-700"></div>
              </div>

              <div className="flex flex-col space-y-[15px] lg:justify-between">
                <div
                  role="status"
                  className="w-full lg:w-[23.45em] p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700"
                >
                  <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700"></div>
                </div>
                <div
                  role="status"
                  className="w-full lg:w-[23.45em] p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700"
                >
                  <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700"></div>
                </div>
              </div>
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default FestivalsImages;
