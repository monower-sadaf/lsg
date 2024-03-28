export const revalidate = 3600;

import { service } from "../../../v1";
import ServiceCard from "@/app/components/Card/serviceCard/ServiceCard";

const Home = async () => {
  const { data } = await service();

  return (
    <>
      <section className="container mx-auto px-4 lg:px-[50px] pb-5">
        <h3 className="text-secondary text-20 leading-[27.58px] lg:text-32 lg:leading-[36px] pt-16 py-5 text-center">
          এক ঠিকানায় সরকারি ভূমিসেবা
        </h3>

        <div className="flex flex-wrap justify-center">
          {data?.map((item, index) => (
            <div className="w-[45%] md:w-[22%] m-2 lg:m-4" key={index}>
              <ServiceCard
                id={item?.id}
                image={item?.image_url}
                title={item?.title}
                short_description={item?.short_description}
                web_link={item?.web_link}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
