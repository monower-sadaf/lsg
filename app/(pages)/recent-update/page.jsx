export const revalidate = 3600;

import Link from "next/link";
import { num_en_to_bn, formateDate } from "@/helpers/helpers";
import { recent_updates } from "@/v1";
import Image from "next/image";
import { relative_image_path } from "@/helpers/helpers";

const Home = async () => {
  const { data } = await recent_updates();

  return (
    <>
      <section className="container mx-auto py-6">
        <h3 className="text-secondary text-24 leading-[27.58px] lg:text-36 lg:leading-[36px] text-center pb-5">
          অনুষ্ঠান এবং উৎসব এর চিত্র
        </h3>
        <div className="flex flex-wrap justify-center">
          {data?.map((item, index) => (
            <div
              key={index}
              className="border rounded-md w-full md:w-[30%] m-2 lg:m-4"
            >
              <Image
                className="rounded-md w-full h-[200px]"
                height={1000}
                width={1000}
                src={item?.image_url}
                alt="images"
              />
              <div className="p-3 md:pb-5 flex flex-col space-y-5">
                <div className="flex items-center space-x-2">
                  <Image
                    className="w-[18px]"
                    height={1000}
                    width={1000}
                    src={relative_image_path("watch.svg")}
                    alt="images"
                  />

                  <p className="text-14">
                    {num_en_to_bn(formateDate(item?.created_at))}
                  </p>
                </div>
                <p className="font-medium text-12 md:text-14 leading-5 md:leading-6">
                  {item?.title}
                </p>
                <Link
                  href={{ pathname: `/recent-update/${item?.id}` }}
                  shallow
                  className="text-14 text-primary hover:underline flex items-center space-x-2"
                >
                  <span>সম্পূর্ণ পড়ুন</span>
                  <span>
                    <svg
                      className="fill-[#368C72]"
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 448 512"
                    >
                      <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
export default Home;
