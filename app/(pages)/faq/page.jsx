import { num_en_to_bn } from "@/helpers/helpers";
import AccrodianCustomItem from "@/app/components/AccrodianCustomItem";
import { faq as faqs } from "@/v1";
import Userfaq from "@/app/components/UserFaq";

const Index = async () => {
  const { data } = await faqs();
  const faq = data;
  const total = data?.length;

  return (
    <>
      <section className="container mx-auto px-5 lg:px-16 py-6 lg:py-5">
        <div className="flex justify-center items-center space-x-3 pb-3 lg:pb-2">
          <span className="text-20 lg:text-32 text-secondary">
            <i className="fa-solid fa-circle-question" />
          </span>
          <h3 className="text-secondary text-20 lg:text-32">
            জিজ্ঞাসিত প্রশ্নাবলী
          </h3>
        </div>
        <div className="flex flex-col lg:flex-row lg:space-x-6 my-7">
          <div className="lg:w-[70%]">
            <div className="w-full border border-primary rounded-md px-2 lg:px-8 py-2 lg:pb-9 mb-5 lg:mb-0">
              <div className="flex justify-end">
                <div>
                  <p className="text-primary text-14">
                    মোট প্রশ্ন {num_en_to_bn(total)} টি{" "}
                  </p>
                </div>
              </div>

              {faq == null ? (
                <>
                  {/* <Loader /> */}
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
              ) : (
                <div className="mt-5 overflow-x-auto h-[45.3vh] overflow-y-auto">
                  {faq?.map((item, index) => (
                    <AccrodianCustomItem key={index} {...item} />
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="lg:w-[30%] mb-5 lg:mb-0">
            <Userfaq />
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
