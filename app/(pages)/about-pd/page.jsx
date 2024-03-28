export const revalidate = 3600;

import Image from "next/image";
import { prokolpo_porichalok } from "@/v1";

const Home = async () => {
  const { data } = await prokolpo_porichalok();

  const replaceWithBr = (text) => {
    return text?.replace(/\n/g, "<br />");
  };
  return (
    <>
      <section className="pb-5">
        <div className="container mx-auto px-4 lg:px-[50px]">
          <div className="bg-white p-3 min-h-[80vh]">
            <h3 className="font-medium text-20 leading-[31px] lg:text-32 text-primary w-full border-b border-primary text-center py-4 mb-[33px]">
              প্রকল্প পরিচালক
            </h3>
            {data?.length > 0 ? (
              <div className="px-2 lg:px-[57px]">
                <div className="float-left mr-4">
                  {data[0]?.image_url?.length > 0 ? (
                    <Image
                      src={data[0]?.image_url}
                      className="w-[9.375em] h-[9.375em] border border-primary rounded-md"
                      height={1000}
                      width={1000}
                      alt="image"
                    />
                  ) : (
                    <p>তথ্য পাওয়া যায়নি।</p>
                  )}

                  <p>{data[0].title ?? "তথ্য পাওয়া যায়নি।"}</p>
                </div>
                <p
                  dangerouslySetInnerHTML={{
                    __html: replaceWithBr(data[0].short_description),
                  }}
                >
                </p>
                <p
                  dangerouslySetInnerHTML={{
                    __html: replaceWithBr(data[0].long_description),
                  }}
                >
                </p>
              </div>
            ) : (
              <p className="text-center">কোনো তথ্য পাওয়া যায়নি।</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
