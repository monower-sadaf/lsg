import VideoCard from "@/app/components/Card/VideoCard/VideoCard";



const LandRelatedVideos = ({ items }) => {

  return (
    <>
      <div className="flex justify-center items-center">
        <h3 className="text-24 leading-[31px] lg:text-36 lg:leading-[36px] text-secondary">
          ভূমি সংক্রান্ত ভিডিও লিঙ্কসমূহ
        </h3>
      </div>

      <div className="flex flex-col lg:flex-row justify-around items-center space-y-5 lg:space-y-0 lg:space-x-5">
        {items?.length > 0 ? (
          <>
            {items?.slice(0, 3)?.map((item, index) => (
              <div key={index} className="lg:w-[33%] ">
                <VideoCard
                  link={item?.link}
                  title={item?.title}
                  time={item?.created_at}
                />
              </div>
            ))}
          </>
        ) : (
          <>
            <div
              role="status"
              className="w-full lg:w-[33%]  p-2 border border-gray-200 rounded shadow animate-pulse md:p-3 dark:border-gray-700"
            >
              <div className="flex items-center justify-center h-40 mb-4 bg-gray-300 rounded dark:bg-gray-700"></div>
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-[30%] mb-4"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[60%] mb-2.5"></div>
            </div>
            <div
              role="status"
              className="w-full lg:w-[33%]  p-2 border border-gray-200 rounded shadow animate-pulse md:p-3 dark:border-gray-700"
            >
              <div className="flex items-center justify-center h-40 mb-4 bg-gray-300 rounded dark:bg-gray-700"></div>
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-[30%] mb-4"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[60%] mb-2.5"></div>
            </div>
            <div
              role="status"
              className="w-full lg:w-[33%]  p-2 border border-gray-200 rounded shadow animate-pulse md:p-3 dark:border-gray-700"
            >
              <div className="flex items-center justify-center h-40 mb-4 bg-gray-300 rounded dark:bg-gray-700"></div>
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-[30%] mb-4"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[60%] mb-2.5"></div>
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default LandRelatedVideos;
