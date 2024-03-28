import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { num_en_to_bn, formateDate, bangla_month } from "@/helpers/helpers";

const RecentUpdate = ({ items }) => {
  return (
    <>
      <div className="flex justify-center items-center">
        <h3 className="font-medium text-24 md:text-32 text-secondary">
          সাম্প্রতিক আপডেট
        </h3>
      </div>
      <div className="w-[80%] md:w-full flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-16">
        {items?.length > 0 ? (
          <>
            {items?.map((item, index) => (
              <div key={index} className="border rounded-md w-full md:w-[30%]">
                <img
                  className="rounded-md w-full h-[200px]"
                  src={item?.image_url}
                  alt="images"
                />
                <div className="p-3 md:pb-5 flex flex-col space-y-5">
                  <div className="flex items-center space-x-2 text-gray-500 text-12">
                    {/* <img
                      className="w-[18px]"
                      src="/images/watch.svg"
                      alt="images"
                    /> */}
                    <p>প্রকাশের তারিখ</p>
                    <p className="">
                      {bangla_month(formateDate(item?.created_at))}
                    </p>
                  </div>
                  <p className="font-medium text-12 md:text-14 leading-5 md:leading-6">
                    {item?.title}
                  </p>
                  <div>
                    <Link
                      href={{ pathname: `/recent-update/${item?.id}` }}
                      shallow
                      className="text-14 text-primary hover:underline"
                    >
                      সম্পূর্ণ পড়ুন
                      <span>
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          style={{ marginLeft: "10px", color: "#368C72" }}
                        />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : (
          <>
            <div
              role="status"
              className="md:w-[30%]  p-2 border border-gray-200 rounded shadow animate-pulse md:p-3 dark:border-gray-700"
            >
              <div className="flex items-center justify-center h-52 mb-4 bg-gray-300 rounded dark:bg-gray-700"></div>
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-[30%] mb-4"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[60%] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[20%] mb-2"></div>
            </div>
            <div
              role="status"
              className="md:w-[30%]  p-2 border border-gray-200 rounded shadow animate-pulse md:p-3 dark:border-gray-700"
            >
              <div className="flex items-center justify-center h-52 mb-4 bg-gray-300 rounded dark:bg-gray-700"></div>
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-[30%] mb-4"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[60%] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[20%] mb-2"></div>
            </div>
            <div
              role="status"
              className="md:w-[30%]  p-2 border border-gray-200 rounded shadow animate-pulse md:p-3 dark:border-gray-700"
            >
              <div className="flex items-center justify-center h-52 mb-4 bg-gray-300 rounded dark:bg-gray-700"></div>
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-[30%] mb-4"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[60%] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[20%] mb-2"></div>
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default RecentUpdate;
