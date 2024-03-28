export const revalidate = 3600;

import Image from "next/image";
import { festival_images } from "@/v1";

const Home = async () => {
  const { data } = await festival_images();

  return (
    <>
      <section className="container mx-auto py-6">
        <h3 className="text-secondary text-24 leading-[27.58px] lg:text-36 lg:leading-[36px] text-center">
          অনুষ্ঠান এবং উৎসব এর চিত্র
        </h3>
        <div className="flex flex-wrap justify-center">
          {data?.map((item, index) => (
            <div
              key={index}
              className="w-[40%] lg:w-[30%] 2xl:w-[22%] m-2 lg:m-4"
            >
              <Image
                className="w-full h-full"
                src={item?.image_url}
                width={1000}
                height={1000}
                alt="images"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
