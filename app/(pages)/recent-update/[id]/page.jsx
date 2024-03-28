export const revalidate = 3600;

import Loader from "../../../components/_skeleton/Loader";
import Link from "next/link";
import moment from "moment";
import Image from "next/image";
import {
  relative_image_path,
  formateDate,
  num_en_to_bn,
} from "@/helpers/helpers";
import { recent_update_details } from "@/v1";
import { bangla_month } from "@/helpers/helpers";

const Home = async ({ params }) => {
  const { data } = await recent_update_details(params?.id);
  const details = data.data;
  const related = data.related_more;

  const replaceWithBr = (text) => {
    return text?.replace(/\n/g, "<br />");
  };

  return (
    <>
      <section className="container mx-auto px-2 lg:px-40 py-6 flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:space-x-10">
        <div className="lg:w-[70%]">
          <h3 className="text-secondary text-20 leading-[27.58px] lg:text-32 lg:leading-[36px] pb-5">
            {details?.title}
          </h3>
          <div className="lg:w-full flex justify-center">
            <Image
              src={`${process.env.STORAGE_URL}${details?.image}`}
              className="rounded-md"
              height={1000}
              width={1000}
              alt="image"
            />
          </div>
          <p className="font-medium text-12 text-gray-500  my-4  md:text-14 leading-5 md:leading-6 flex items-center space-x-2">
            {/* <span>
              <svg
                className="fill-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
              >
                <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
              </svg>
            </span> */}
            <span>
              প্রকাশের তারিখ :
            </span>
            <span>{bangla_month(formateDate(details?.created_at))}</span>
          </p>
          <p className="font-medium text-12 md:text-14 leading-5 md:leading-6 text-justify">
            <div
              className="mt-2 custom_direct-chat-text"
              dangerouslySetInnerHTML={{
                __html: replaceWithBr(details?.details),
              }}
            />
          </p>
        </div>
        <div className="lg:w-[30%] lg:pt-5">
          {related?.map((item, index) => (
            <Link
              href={{ pathname: `/recent-update/${item?.id}` }}
              key={index}
              className="border border-gray-400 rounded-md p-3 flex items-center space-x-2 mb-3 hover:underline"
            >
              <div>
                <Image
                  src={`${process.env.STORAGE_URL}${item?.image}`}
                  className="w-[10em] h-[7em] rounded-md"
                  height={1000}
                  width={1000}
                  alt="image"
                />
              </div>
              <div>
                <h3>{item?.title}</h3>
                <p className="text-12 text-gray-500">{bangla_month(formateDate(item?.created_at))}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
