export const revalidate = 3600;

import Link from "next/link";
import Image from "next/image";
import { relative_image_path } from "@/helpers/helpers";
const Index = async () => {
  return (
    <div>
      <section className="container mx-auto px-2 lg:px-14">
        <Image
          className="w-full"
          src={relative_image_path("contact_1.webp")}
          height={1000}
          width={1000}
          alt="image"
        />
        <div className="flex flex-col-reverse lg:flex-row items-center justify-around py-5">
          <div className="flex flex-col space-y-5">
            <div className="flex space-x-5 items-center">
              <div className="bg-primary text-slate-50 flex justify-center items-center p-6 w-[20%] text-20 lg:text-24 rounded-md">
                <span>
                  <svg
                    width="29"
                    height="34"
                    viewBox="0 0 29 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.5 17C19.0568 17 22.75 13.3068 22.75 8.75C22.75 4.19316 19.0568 0.5 14.5 0.5C9.94316 0.5 6.25 4.19316 6.25 8.75C6.25 13.3068 9.94316 17 14.5 17ZM20.6746 19.1012L17.5938 31.4375L15.5312 22.6719L17.5938 19.0625H11.4062L13.4688 22.6719L11.4062 31.4375L8.32539 19.1012C3.72988 19.3203 0.0625 23.0779 0.0625 27.725V30.4062C0.0625 32.1143 1.44824 33.5 3.15625 33.5H25.8438C27.5518 33.5 28.9375 32.1143 28.9375 30.4062V27.725C28.9375 23.0779 25.2701 19.3203 20.6746 19.1012Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </div>
              <div className="flex flex-col w-[80%]">
                <h3 className="text-primary text-20 lg:text-24">
                  কর্মকর্তাবৃন্দের তালিকা
                </h3>
                <div className="">
                  <a
                    href="#"
                    className="bg-yellow-500 text-slate-50 px-2 py-1 rounded-md border border-primary hover:bg-primary"
                  >
                    তালিকা
                  </a>
                </div>
              </div>
            </div>
            <div className="flex space-x-5 items-center">
              <div className="bg-primary text-slate-50 flex justify-center items-center p-6 w-[20%] text-20 lg:text-24 rounded-md">
                <span>
                  <svg
                    width="35"
                    height="36"
                    viewBox="0 0 35 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.375 13.6253L17.5 3.41699L30.625 13.6253V29.667C30.625 30.4405 30.3177 31.1824 29.7707 31.7294C29.2237 32.2764 28.4819 32.5837 27.7083 32.5837H7.29167C6.51812 32.5837 5.77625 32.2764 5.22927 31.7294C4.68229 31.1824 4.375 30.4405 4.375 29.667V13.6253Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M13.125 32.5833V18H21.875V32.5833"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <div className="flex flex-col w-[80%]">
                <h3 className="text-primary text-20 lg:text-24">যোগাযোগ:</h3>
                <p className="whitespace-pre-wrap text-14 lg:text-16 leading-5 font-medium text-gray1">
                  ভুমি মন্ত্রণালয় ভবন - ৪, ফ্লোর - ৩ বাংলাদেশ সচিবালয়
                  ঢাকা-১০০০বাংলাদেশ
                </p>
              </div>
            </div>
            <div className="flex space-x-5 items-center">
              <div className="bg-primary text-slate-50 flex justify-center items-center p-6 w-[20%] text-20 lg:text-24 rounded-md">
                <span>
                  <svg
                    width="35"
                    height="35"
                    viewBox="0 0 35 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M35 3.28125V22.9688C35 24.7803 33.5303 26.25 31.7188 26.25H28.4375V12.0312C28.4375 9.0166 25.9834 6.5625 22.9688 6.5625H8.75V3.28125C8.75 1.46973 10.2197 0 12.0312 0H31.7188C33.5303 0 35 1.46973 35 3.28125ZM26.25 12.0312V31.7188C26.25 33.5303 24.7803 35 22.9688 35H3.28125C1.46973 35 0 33.5303 0 31.7188V12.0312C0 10.2197 1.46973 8.75 3.28125 8.75H22.9688C24.7803 8.75 26.25 10.2197 26.25 12.0312ZM21.6016 13.9453C21.6016 13.4941 21.2324 13.125 20.7812 13.125H5.19531C4.74414 13.125 4.375 13.4941 4.375 13.9453V17.5H21.6016V13.9453Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </div>
              <div className="flex flex-col w-[80%]">
                <h3 className="text-primary text-20 lg:text-24">ফ্যাক্স:</h3>
                <p className="whitespace-pre-wrap text-14 lg:text-16 leading-5 font-medium text-gray1">
                  প্রশাসন শাখা: ৯৫৪০৮৮৩ সচিবের দপ্তর: ৯৫৭৭৩৪৪
                </p>
              </div>
            </div>
            <div className="flex space-x-5 items-center">
              <div className="bg-primary text-slate-50 flex justify-center items-center p-6 w-[20%] text-20 lg:text-24 rounded-md">
                <span>
                  <svg
                    width="35"
                    height="36"
                    viewBox="0 0 35 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.83464 6.33301H29.168C30.7721 6.33301 32.0846 7.64551 32.0846 9.24967V26.7497C32.0846 28.3538 30.7721 29.6663 29.168 29.6663H5.83464C4.23047 29.6663 2.91797 28.3538 2.91797 26.7497V9.24967C2.91797 7.64551 4.23047 6.33301 5.83464 6.33301Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M32.0846 9.25L17.5013 19.4583L2.91797 9.25"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <div className="flex flex-col w-[80%]">
                <h3 className="text-primary text-20 lg:text-24">ইমেইল:</h3>
                <div className="flex flex-col text-14 lg:text-16 leading-5 font-medium text-gray1">
                  <Link
                    href={"mailto:minister@minland.gov.bd"}
                    className="hover:underline"
                  >
                    minister@minland.gov.bd
                  </Link>
                  <Link
                    href={"mailto:secretary@minland.gov.bd"}
                    className="hover:underline"
                  >
                    secretary@minland.gov.bd
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="pb-5 lg:pb-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d29216.430991970825!2d90.37364064355046!3d23.74545818508649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sbangladesh%20sochibaloy!5e0!3m2!1sen!2sbd!4v1685874438787!5m2!1sen!2sbd"
              className="w-full lg:w-[600px]"
              height={450}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
