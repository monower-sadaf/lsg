export const revalidate = 3600;


import { getSinglePageData } from "../../../v1";

const Index = async () => {
  const { data } = await getSinglePageData("nitimalas");

  const replaceWithBr = (text: any) => {
    return text?.replace(/\n/g, "<br />");
  };

  return (
    /* style={{ backgroundImage: "url('/images/Group_6127.png')" }} */
    <div>
      <section className="w-full flex justify-center">
        <div className="bg-slate-50 w-[88%] px-[22px] lg:px-[25px] flex flex-col space-y-6 lg:space-y-10 py-6">
          <div>
            <div className="flex justify-center items-center">
              <h3 className="font-medium text-green1 text-20 lg:text-32">
                <span className="mr-[10.5px]">
                  <i className="fa-solid fa-paperclip" />
                </span>
                নীতিমালা ও শর্তাবলী
              </h3>
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="font-medium text-15 lg:text-20 text-green1">
              ব্যবহারের শর্তাবলী
            </h3>
            <hr className="bg-primary h-[.15rem] mb-[9px]" />
          </div>
          {!data?.nitimala_description && (
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

              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-[20%] my-8"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
          )}

          <div
            className="mt-2 custom_direct-chat-text"
            dangerouslySetInnerHTML={{
              __html: replaceWithBr(data?.nitimala_description),
            }}
          />
        </div>
      </section>
    </div>
  );
};

export default Index;
