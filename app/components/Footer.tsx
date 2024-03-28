export const revalidate = 3600;

import Link from "next/link";
import { num_en_to_bn } from "@/helpers/helpers";
import { relative_image_path } from "@/helpers/helpers";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="2xl:container 2xl:mx-auto">
      <div className="w-full flex">
        <div className="h-[1.125em] w-full bg-[#138C54]"></div>
        <div className="h-[1.125em] w-full bg-[#D71616]"></div>
        <div className="h-[1.125em] w-full bg-[#138C54]"></div>
      </div>
      <div className="bg-lightgreen">
        <div className="lg:container lg:mx-auto flex flex-col lg:flex-row space-y-7 lg:space-y-0 justify-center lg:justify-normal pt-12 pb-2 px-5">
          <div className="flex justify-around lg:justify-evenly lg:w-[40%]">
            <div className="lg:flex lg:flex-col lg:space-y-2">
              <h3 className="text-14 lg:text-20 font-medium text-primary pb-2 lg:pb-0 text-start lg:text-center">
                গুরুত্বপূর্ণ লিঙ্ক
              </h3>
              <ul className="lg:flex lg:flex-col lg:space-y-2">
                <li className="flex items-center">
                  <img src="/images/triangleright.svg" alt="images" />
                  <Link
                    href="https://bangladesh.gov.bd/index.php"
                    target="_blank"
                    className="text-12 lg:text-16 font-medium"
                  >
                    বাংলাদেশ জাতীয় তথ্য বাতায়ন
                  </Link>
                </li>
                <li className="flex items-center">
                  <img src="/images/triangleright.svg" alt="images" />
                  <Link
                    href="https://minland.gov.bd/"
                    target="_blank"
                    className="text-12 lg:text-16 font-medium"
                  >
                    ভূমি মন্ত্রণালয়
                  </Link>
                </li>
                <li className="flex items-center">
                  <img src="/images/triangleright.svg" alt="images" />
                  <Link
                    href="http://www.pressinform.gov.bd/"
                    target="_blank"
                    className="text-12 lg:text-16 font-medium"
                  >
                    তথ্য অধিদপ্তর (পিআইডি)
                  </Link>
                </li>
                <li className="flex items-center">
                  <img src="/images/triangleright.svg" alt="images" />
                  <Link
                    href="https://www.grs.gov.bd/"
                    target="_blank"
                    className="text-12 lg:text-16 font-medium"
                  >
                    অভিযোগ প্রতিকার ব্যবস্থা
                  </Link>
                </li>
              </ul>
            </div>
            <div className="pt-8 lg:pt-10">
              <ul className="lg:flex lg:flex-col lg:space-y-2">
                <li className="flex items-center">
                  <img src="/images/triangleright.svg" alt="images" />
                  <Link
                    href="/nitimala"
                    className="text-12 lg:text-16 font-medium"
                  >
                    নীতিমালা
                  </Link>
                </li>
                <li className="flex items-center">
                  <img src="/images/triangleright.svg" alt="images" />
                  <Link
                    href={{ pathname: "/faq" }}
                    shallow
                    className="text-12 lg:text-16 font-medium"
                  >
                    সাধারণ জিজ্ঞাসা
                  </Link>
                </li>
                <li className="flex items-center">
                  <img src="/images/triangleright.svg" alt="images" />
                  <Link
                    href="/contact"
                    className="text-12 lg:text-16 font-medium"
                  >
                    যোগাযোগ করুন
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col space-y-4 lg:w-[60%]">
            <div className="flex justify-between space-x-4 lg:space-x-0 lg:justify-around">
              <div className="flex flex-col items-center">
                <h3 className="text-14 lg:text-20 text-sky-700">
                  পরিকল্পনা ও বাস্তবায়নে
                </h3>
                <div className="w-[10em] lg:w-[12.5em] p-1 rounded-sm flex flex-col items-center">
                  <Link
                    className=""
                    href={"https://lmap.minland.gov.bd/"}
                    target="_blank"
                  >
                    <Image
                      src={relative_image_path("govt_logo.png")}
                      height={1000}
                      width={1000}
                      alt="images"
                    />
                  </Link>
                </div>
              </div>
              <div className="flex flex-col space-y-3 lg:items-center">
                <h3 className="text-15 lg:text-20 text-semiblack font-medium">
                  সামাজিক যোগাযোগ
                </h3>
                <div className="flex space-x-3 lg:space-x-5 pl-2 lg:pl-0">
                  <Link
                    href={"https://www.facebook.com/MinlandGovBd"}
                    target="_blank"
                  >
                    <Image
                      className="w-[18px] h-[18px] lg:w-[34px] lg:h-[30px]"
                      src={relative_image_path("Facebook.svg")}
                      height={1000}
                      width={1000}
                      alt="images"
                    />
                  </Link>
                  <Link href={"https://twitter.com/"} target="_blank">
                    <Image
                      className="w-[18px] h-[18px] lg:w-[34px] lg:h-[30px]"
                      src={relative_image_path("twitter.png")}
                      height={1000}
                      width={1000}
                      alt="images"
                    />
                  </Link>
                  <Link href={"https://www.instagram.com/"} target="_blank">
                    <Image
                      src={relative_image_path("instagram.svg")}
                      height={1000}
                      width={1000}
                      alt="images"
                      className="w-[18px] h-[18px] lg:w-[34px] lg:h-[30px]"
                    />
                  </Link>
                  <Link
                    href={"https://www.youtube.com/@minland-gov-bd/videos"}
                    target="_blank"
                  >
                    <Image
                      src={relative_image_path("Youtube.svg")}
                      height={1000}
                      width={1000}
                      alt="images"
                      className="w-[18px] h-[18px] lg:w-[34px] lg:h-[34px]"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-2 lg:space-y-3 bg-slate-50 lg:bg-transparent">
              <h3 className="text-center lg:text-right text-14 lg:text-20">
                কারিগরি সহায়তায়
              </h3>
              <div
                className="flex justify-end items-center space-x-2 bg-cover w-full"
                style={{ backgroundImage: "url('/images/logo_back.svg')" }}
              >
                <div className="w-[21%] flex items-center justify-center mr-3">
                  <Link href={"https://mysoftheaven.com/"} target="_blank">
                    <Image
                      src={relative_image_path("mysoft_heaven_logo.jpg")}
                      height={1000}
                      width={1000}
                      alt="images"
                    />
                  </Link>
                </div>
                <div className="h-[21px] border-l border-primary" />
                <div className="w-[21%] flex items-center justify-center">
                  <Link
                    href={"https://www.ba-systems.com/"}
                    className="w-[60%]"
                    target="_blank"
                  >
                    <Image
                      src={relative_image_path("logo-ba.webp")}
                      height={1000}
                      width={1000}
                      alt="images"
                      className="w-full h-full"
                    />
                  </Link>
                </div>
                <div className="h-[21px] border-l border-primary" />
                <div className="w-[21%] flex items-center justify-center">
                  <Link
                    href={"https://www.olivineltd.com/"}
                    className="w-[60%]"
                    target="_blank"
                  >
                    <Image
                      src={relative_image_path("olvin_logo.jpg")}
                      height={1000}
                      width={1000}
                      alt="images"
                      className="w-[80%]"
                    />
                  </Link>
                </div>
                <div className="h-[21px] border-l border-primary" />
                <div className="w-[21%] ml-2 flex items-center justify-center">
                  <Link href={"https://parkwaytec.com/"} className="w-[60%]" target="_blank">
                    <Image
                      src={relative_image_path("parkway_logo.png")}
                      height={1000}
                      width={1000}
                      alt="images"
                      className="w-full h-full"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center font-medium text-14 leading-[31px]">
        কপিরাইট © {num_en_to_bn(new Date().getFullYear())} সর্বস্বত্ব সংরক্ষিত{" "}
        <a
          className="text-deepgreen"
          href="https://land.gov.bd/"
          target="_blunk"
        >
          {" "}
          ভূমি মন্ত্রণালয়,{" "}
        </a>
        গণপ্রজাতন্ত্রী বাংলাদেশ সরকার
      </p>
    </div>
  );
}
