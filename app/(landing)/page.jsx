export const revalidate = 3600;

import dynamic from "next/dynamic";
const Slider = dynamic(() => import("../components/Carousel/Slider"),{
  ssr: false
});
const Faq = dynamic(() => import("../components/Faq"));
const LandRelatedInfo = dynamic(
  () => import("../components/Land/LandRelatedInfo")
)
const LandRelatedService = dynamic(
  () => import("../components/Land/LandRelatedService"),
  { ssr: false }
)
const MarqueeNotice = dynamic(() => import("../components/Marquee"));
import { relative_image_path } from "@/helpers/helpers";
const RecentUpdate = dynamic(() => import("../components/RecentUpdate"));
const SliderContent = dynamic(() => import("../components/home/SliderContent"));

import Link from "next/link";
import Image from "next/image";
import {
  slider,
  notice,
  land_apps_infos,
  service,
  faq,
  recent_updates,
} from "@/v1";

const Home = async () => {
  const sliders = await slider();
  const notices = await notice();
  const services = await service();
  const landInfo = await land_apps_infos();
  const faqs = await faq();
  const recent_update = await recent_updates();




  return (
    <div>
      {sliders && (
        <div className="relative 2xl:container 2xl:mx-auto">
          <Slider />
          <div className="hidden lg:block">
            <SliderContent />
          </div>
        </div>
      )}

      {/* notice */}
      <MarqueeNotice items={notices.data[0]} />

      {/* service cards */}
      <LandRelatedService data={services.data} />

      {/* 1st multi carousel */}
      <LandRelatedInfo items={landInfo.data} />

      {/* faq */}
      <Faq items={faqs?.data} />
      <div>

        <section className="container mx-auto px-4 lg:px-[50px] flex flex-col items-center space-y-5 lg:space-y-7 pb-[20px] lg:pb-[41px]">
          <RecentUpdate items={recent_update.data} />
          <div className="flex justify-center items-center">
            <Link
              href={{ pathname: "/recent-update" }}
              shallow
              className="bg-primary text-white px-5 py-1 rounded-md text-20 leading-[20px]"
            >
              আরও
            </Link>
          </div>
        </section>

        <div className="container mx-auto flex justify-center lg:justify-around items-center pb-[21px]">
          <div className="flex flex-col justify-center items-center">
            <div className="text-center">
              <h3 className="text-20 leading-[31px] lg:text-36 lg:leading-[36px] text-secondary pb-[6px]">
                ভূমি সংক্রান্ত সাহায্য প্রয়োজনে
              </h3>
              <p className="text-16 leading-[31px] lg:text-20 text-secondary lg:pb-[9px]">
                কল করুন
              </p>
            </div>
            <div className="lg:hidden">
              <Image
                className="w-[14.8125em]"
                src={relative_image_path("home_support.webp")}
                alt="images"
                width={100}
                height={100}
              />
            </div>
            <div className="flex flex-col space-y-2">
              <div className="border border-[#5BCDA4] flex flex-col justify-center items-center px-2 lg:px-[94px] py-[15px] lg:py-[35px] rounded-md shadow-lg">
                <div className="flex items-center justify-center">
                  <span className="mr-[7px] pb-[4px] lg:pb-[8px]">
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.6179 16.4029C19.8046 16.5274 19.9362 16.7191 19.9854 16.938C20.0346 17.1569 19.9976 17.3864 19.8822 17.5789L18.8311 19.3296C18.5522 19.8031 18.1018 20.1513 17.5732 20.3018C15.8261 20.7808 11.9734 20.8771 5.79765 14.7045C-0.378076 8.53186 -0.280829 4.67833 0.198401 2.93274C0.348836 2.40426 0.696809 1.95384 1.17027 1.67475L2.92227 0.624289C3.11474 0.508898 3.34428 0.472033 3.56322 0.521346C3.78217 0.570658 3.97371 0.702361 4.09809 0.889115L6.89116 5.07725C7.01319 5.26065 7.06137 5.48338 7.02603 5.7008C6.9907 5.91822 6.87446 6.11426 6.70063 6.24961L5.13185 7.46859C4.96729 7.59556 4.85369 7.77727 4.81163 7.98077C4.76957 8.18427 4.80184 8.39611 4.9026 8.57787C5.36292 9.40556 5.79917 10.3811 7.95936 12.5432C10.1196 14.7054 11.0994 15.1388 11.9261 15.5989C12.1079 15.6997 12.3198 15.7319 12.5234 15.6897C12.7269 15.6474 12.9085 15.5336 13.0352 15.3688L14.2546 13.8015C14.3899 13.6276 14.5861 13.5112 14.8037 13.4759C15.0213 13.4405 15.2442 13.4888 15.4277 13.6111L19.6179 16.4029Z"
                        fill="#1E433D"
                      />
                    </svg>
                  </span>
                  <p className="text-14 leading-[31px] lg:text-20">
                    ভূমিসেবা সংক্রান্ত সমস্যা / জিজ্ঞাসা
                  </p>
                </div>
                <h3 className="text-32 leading-[31px] lg:text-48 lg:leading-[36px] font-bold text-secondary">
                  ১৬১২২
                </h3>
              </div>
              <div className="border border-[#5BCDA4] flex flex-col justify-center items-center px-2 lg:px-[94px] py-[15px] lg:py-[35px] rounded-md shadow-lg">
                <div className="flex items-center justify-center">
                  <span className="mr-[7px]">
                    <svg
                      width="22"
                      height="15"
                      viewBox="0 0 22 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.5 0.75L1.25 0H20.75L21.5 0.75V14.25L20.75 15H1.25L0.5 14.25V0.75ZM2 2.3025V13.5H20V2.304L11.465 8.85H10.55L2 2.3025ZM18.545 1.5H3.455L11 7.3035L18.545 1.5Z"
                        fill="black"
                      />
                    </svg>
                  </span>
                  <p className="text-14 leading-[31px] lg:text-20">
                    অভিযোগ প্রতিকার ব্যবস্থার জন্য
                  </p>
                </div>
                <h3 className="text-24 leading-[31px] lg:text-32 lg:leading-[36px] font-bold text-secondary">
                  grs@land.gov.bd
                </h3>
              </div>
            </div>
          </div>
          <div className="hidden  lg:flex lg:justify-center lg:items-center">
            <Image
              className="w-[31.25em]"
              src={relative_image_path("home_support.webp")}
              alt="images"
              width={1000}
              height={1000}
            />
          </div>
        </div>

        <Image
          className="w-full h-auto 2xl:container 2xl:mx-auto"
          src={relative_image_path("home_footer_line.webp")}
          height={1000}
          width={1000}
          alt="image"
        />
      </div>
    </div>
  );
};

export default Home;
