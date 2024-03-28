export const revalidate = 3600;

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpenReader } from "@fortawesome/free-solid-svg-icons";
import Title from "@/app/components/Title";
import MultiCarousel from "@/app/components/Carousel/MultiCarousel";

import ServiceCard from "@/app/components/Card/serviceCard/ServiceCard";
import { serviceDetails, service as serviceList, land_apps_infos } from "@/v1";



const Index = async ({ params: { id } }) => {
  const links = [
    {
      title: "ভূমি উন্নয়ন কর",
      url: "https://ldtax.gov.bd/",
    },
    {
      title: "ই-নামজারি",
      url: "https://mutation.land.gov.bd/",
    },
    {
      title: "ই-মিউটেশন",
      url: "https://mutation.land.gov.bd/",
    },
    {
      title: "ই-পর্চা",
      url: "https://www.eporcha.gov.bd/",
    },
    {
      title: "অনলাইন সার্টিফিকেট সিস্টেম",
      url: "https://prottoyon.gov.bd/",
    },
    {
      title: "ভূমি প্রশাসন ব্যবস্থাপনা সিস্টেম",
      url: "http://lams.gov.bd/",
    },
  ];

  const service = await serviceDetails(parseInt(id)).then(({ data }) => data);
  const services = await serviceList().then(({ data }) => data);
  const landSoftware = await land_apps_infos().then(({ data }) => {
    const filtered_data = data.filter((item) => {
      return item?.type === 2;
    });

    return filtered_data;
  });

  return (
    <>
      <div>
        <div className="container mx-auto px-4 lg:px-16 flex justify-between pt-12 lg:pt-16 mb-3">
          <div className="lg:w-[75%]">
            <div className="">
              <h3 className="text-24 lg:text-36 text-secondary font-medium">
                {service?.title}
              </h3>
            </div>
            <div className="mt-2">
              <hr className="bg-deepgreen h-[8px] w-[60%]" />
            </div>
            <div className="flex items-center space-x-3 mt-4">
              <FontAwesomeIcon
                icon={faBookOpenReader}
                className="h-8 w-8"
                style={{ color: "#368c72" }}
              />
              <p className="text-24 text-secondary font-medium">
                সেবা প্রদান পদ্ধতি
              </p>
            </div>
            <div className="mt-2">
              <div
                className="text-justify"
                dangerouslySetInnerHTML={{ __html: service?.long_description }}
              ></div>
            </div>
          </div>
          <div className="p-4 border border-deepgreen rounded-xl hidden lg:block w-[20%]">
            <div className="flex justify-center">
              <img
                src={process.env.STORAGE_URL + service?.image}
                className="w-[10em] h-auto"
                alt="image"
              />
            </div>
            <div className="my-4">
              <a
                href={service?.link}
                className="flex items-center justify-center space-x-2 px-6 py-2 rounded-md border border-deepgreen hover:bg-red-600 bg-primary"
                rel="noreferrer noopener"
              >
                <span>
                  <svg
                    width="25"
                    height="21"
                    viewBox="0 0 25 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.8009 8.09958H13.1009V10.1996C13.1009 11.6883 11.8896 12.8996 10.4009 12.8996C8.91211 12.8996 7.70086 11.6883 7.70086 10.1996V5.63958L5.26711 7.10208C4.54336 7.53333 4.10086 8.31708 4.10086 9.15708V10.9308L1.10086 12.6633C0.527105 12.9933 0.328355 13.7283 0.662105 14.3021L3.66211 19.4996C3.99211 20.0733 4.72711 20.2683 5.30086 19.9383L9.17836 17.6996H14.3009C15.6246 17.6996 16.7009 16.6233 16.7009 15.2996H17.3009C17.9646 15.2996 18.5009 14.7633 18.5009 14.0996V11.6996H18.8009C19.2996 11.6996 19.7009 11.2983 19.7009 10.7996V8.99958C19.7009 8.50083 19.2996 8.09958 18.8009 8.09958ZM24.3396 6.69708L21.3396 1.49958C21.0096 0.925829 20.2746 0.730829 19.7009 1.06083L15.8234 3.29958H11.9909C11.5409 3.29958 11.1021 3.42708 10.7196 3.66333L9.46336 4.44708C9.11086 4.66458 8.90086 5.05083 8.90086 5.46333V10.1996C8.90086 11.0283 9.57211 11.6996 10.4009 11.6996C11.2296 11.6996 11.9009 11.0283 11.9009 10.1996V6.89958H18.8009C19.9596 6.89958 20.9009 7.84083 20.9009 8.99958V10.0683L23.9009 8.33583C24.4746 8.00208 24.6696 7.27083 24.3396 6.69708Z"
                      fill="white"
                    />
                  </svg>
                </span>
                <p className="text-white text-20 font-medium">সেবা নিন</p>
              </a>
            </div>
            <div className="my-2">
              <a
                href={service?.app_link}
                className="flex items-center justify-center space-x-10 px-6 py-2 rounded-md border border-deepgreen hover:bg-red-600 bg-primary cursor-pointer"
                rel="noreferrer noopener"
              >
                <span>
                  <svg
                    width="16"
                    height="25"
                    viewBox="0 0 16 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.25 0.5H2.75C1.50781 0.5 0.5 1.50781 0.5 2.75V22.25C0.5 23.4922 1.50781 24.5 2.75 24.5H13.25C14.4922 24.5 15.5 23.4922 15.5 22.25V2.75C15.5 1.50781 14.4922 0.5 13.25 0.5ZM8 23C7.17031 23 6.5 22.3297 6.5 21.5C6.5 20.6703 7.17031 20 8 20C8.82969 20 9.5 20.6703 9.5 21.5C9.5 22.3297 8.82969 23 8 23ZM13.25 17.9375C13.25 18.2469 12.9969 18.5 12.6875 18.5H3.3125C3.00312 18.5 2.75 18.2469 2.75 17.9375V3.3125C2.75 3.00312 3.00312 2.75 3.3125 2.75H12.6875C12.9969 2.75 13.25 3.00312 13.25 3.3125V17.9375Z"
                      fill="white"
                    />
                  </svg>
                </span>
                <p className="text-white text-20 font-medium ml-2">অ্যাপ</p>
              </a>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-5 lg:mt-10 px-4 lg:px-[34px]">
          <div className="flex flex-wrap justify-between">
            <div className="border border-[#901A00] rounded-md w-[45%] lg:w-[19%]  mx-2 lg:mx-8 my-4">
              <div className="bg-[#901A00]   rounded py-2 lg:px-7 text-center">
                <p className="text-white">সেবা প্রাপ্তির সময়</p>
              </div>
              <div className="text-center">
                <h3 className="text-[#585656] text-16 font-bold p-1">
                  {service?.sheba_praptir_somoy}
                </h3>
              </div>
            </div>
            <div className="border border-[#033349] rounded-md w-[45%] lg:w-[19%]  mx-2 lg:mx-8 my-4">
              <div className="bg-[#033349] rounded py-2 lg:px-7 text-center">
                <p className="text-white">প্রয়োজনীয় ফি</p>
              </div>
              <div className=" text-center">
                <h3 className="text-[#585656] text-16 font-bold p-1">
                  {service?.proyojoniyo_fee}
                </h3>
              </div>
            </div>
            <div className="border border-[#0F6800] rounded-md w-[45%] lg:w-[19%]  mx-2 lg:mx-8 my-4">
              <div className="bg-[#0F6800] rounded py-2 lg:px-7 text-center">
                <p className="text-white">সেবা প্রাপ্তির স্থান</p>
              </div>
              <div className=" text-center">
                <h3 className="text-[#585656] text-16 font-bold p-1">
                  {service?.proyojoniyo_isthan}
                </h3>
              </div>
            </div>
            <div className="border border-[#8C3689] rounded-md w-[45%] lg:w-[19%]  mx-2 lg:mx-8 my-4">
              <div className="bg-[#8C3689] rounded py-2 lg:px-7 text-center">
                <p className="text-white">দায়িত্বপ্রাপ্ত কর্মকর্তা</p>
              </div>
              <div className="p-2">
                <div
                  className=""
                  dangerouslySetInnerHTML={{
                    __html: service?.dayetto_praptto_kormokortta,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-5 lg:mt-10 px-4 lg:px-[65px]">
          {service?.proyojoniyo_kagojpotro && (
            <div className="border border-[#7ECBA1] my-6 p-4 lg:p-9 rounded-xl">
              <div className="flex items-center space-x-3">
                <FontAwesomeIcon
                  icon={faBookOpenReader}
                  className="h-8 w-8"
                  style={{ color: "#368c72" }}
                />
                <p className="text-18 lg:text-20 text-secondary font-semibold">
                  প্রয়োজনীয় কাগজপত্র
                </p>
              </div>
              <div className="mt-2">
                <div
                  dangerouslySetInnerHTML={{
                    __html: service?.proyojoniyo_kagojpotro,
                  }}
                ></div>
              </div>
            </div>
          )}

          {service?.songlistho_aino_bodhi && (
            <div className="border border-[#7ECBA1] my-6 p-4 lg:p-9 rounded-xl">
              <div className="flex items-center space-x-3">
                <FontAwesomeIcon
                  icon={faBookOpenReader}
                  className="h-8 w-8"
                  style={{ color: "#368c72" }}
                />
                <p className="text-18 lg:text-20 text-secondary font-semibold">
                  সংশ্লিষ্ট আইন ও বিধি
                </p>
              </div>
              <div className="mt-2">
                <div
                  dangerouslySetInnerHTML={{
                    __html: service?.songlistho_aino_bodhi,
                  }}
                ></div>
              </div>
            </div>
          )}

          {service?.sheba_prodane_bertho && (
            <div className="border border-[#7ECBA1] my-6 p-4 lg:p-9 rounded-xl">
              <div className="flex items-center space-x-3">
                <FontAwesomeIcon
                  icon={faBookOpenReader}
                  className="h-8 w-8"
                  style={{ color: "#368c72" }}
                />
                <p className="text-18 lg:text-20 text-secondary font-semibold">
                  সেবা প্রদানে ব্যর্থ হলে প্রতিকারকারী কর্মকর্তা
                </p>
              </div>
              <div className="mt-2">
                <div
                  dangerouslySetInnerHTML={{
                    __html: service?.sheba_prodane_bertho,
                  }}
                ></div>
              </div>
            </div>
          )}

          {service?.sheba_prodane_proyojoniyo_link && (
            <div className="border border-[#7ECBA1] my-6 p-4 lg:p-9 rounded-xl">
              <div className="flex items-center space-x-3">
                <FontAwesomeIcon
                  icon={faBookOpenReader}
                  className="h-8 w-8"
                  style={{ color: "#368c72" }}
                />
                <p className="text-18 lg:text-20 text-secondary font-semibold">
                  সেবা প্রদানে প্রয়োজনীয় লিংক
                </p>
              </div>
              <div className="mt-2">
                <ul className="list-inside list-disc">
                  {links?.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item?.url}
                        target="_blank"
                        className="hover:text-deepgreen hover:underline"
                      >
                        {item?.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        <section className="container mx-auto px-2 lg:px-[34px]">
          <div className="flex flex-wrap justify-center">
            {services?.slice(0, 4).map((item, index) => (
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

        <div className="">
          <section className="py-12 container mx-auto px-2 lg:px-[34px]">
            <div className="bg-white">
              <div className="flex justify-center items-center">
                <Title
                  title="ভূমিসেবা অ্যাপ ও সফটওয়্যার"
                  cls="text-24 leading-8 text-secondary py-8"
                />
              </div>
              <div className="pb-7 lg:px-8">
                <MultiCarousel items={landSoftware} />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Index;
