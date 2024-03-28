export const revalidate = 3600;

import bg from "@/public/images/pd_bg.webp";
import { getSinglePageData } from "../../../v1";

const Index = async () => {
  const data = await getSinglePageData("nagoriker_subidhas");

  const replaceWithBr = (text: any) => {
    return text?.replace(/\n/g, "<br />");
  };

  return (
    <>
      {/* style={{ backgroundImage: `url(${bg.src})` }} */}
      <section>
        <div className="container mx-auto px-4 lg:px-[50px]">
          <div className="bg-white p-3">
            <h3 className="font-medium text-20 leading-[31px] lg:text-32 text-primary w-full border-b border-primary text-center py-4 mb-[33px]">
              নাগরিকের সুবিধা
            </h3>
            {data?.data?.nagoriker_subidha_description ? (
              <>
                <div
                  className="mt-2 custom_direct-chat-text container mx-auto lg:px-16"
                  dangerouslySetInnerHTML={{
                    __html: replaceWithBr(
                      data?.data?.nagoriker_subidha_description
                    ),
                  }}
                />
              </>
            ) : (
              <>
                <div
                  role="status"
                  className="w-full p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700"
                >
                  <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-[20%] mb-4"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>

                  <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-[25%] my-8"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>

                  <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-[30%] my-4"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
