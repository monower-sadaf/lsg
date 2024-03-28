export const revalidate = 3600;

import { formateDate, num_en_to_bn } from "@/helpers/helpers";
import bg from "@/public/images/group6127.png";
import Link from "next/link";
import { ainobidhi } from "../../../v1";

const Index = async () => {
  const { data } = await ainobidhi();

  const style = {
    backgroundImage: `url(${bg.src})`,
  };

  return (
    <>
      <div>
        <div>
          <div className="container mx-auto px-4 lg:px-[50px]">
            <div className="bg-white p-4">
              <div className="flex items-center justify-center space-x-5 mb-5">
                <div>
                  <i className="fa-solid fa-paperclip text-18 lg:text-28 text-deepgreen" />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="25"
                    viewBox="0 0 22 25"
                    fill="none"
                  >
                    <path
                      d="M2.52715 22.3504C-0.21176 19.5244 -0.160714 14.9671 2.59211 12.1513L12.4246 2.09377C14.5019 -0.0311641 17.8786 -0.0313515 19.9561 2.09377C22.0134 4.19818 22.0159 7.59357 19.9561 9.70046L11.385 18.4591C9.98557 19.8906 7.6991 19.8706 6.32336 18.4124C4.99797 17.0075 5.04049 14.7808 6.39143 13.3989L13.1294 6.51605C13.4192 6.22009 13.894 6.21502 14.19 6.50476L15.2616 7.55377C15.5576 7.84355 15.5626 8.3184 15.2729 8.61437L8.53563 15.4966C8.30444 15.7331 8.29019 16.126 8.50525 16.354C8.71019 16.5713 9.03236 16.5749 9.24063 16.3618L17.8117 7.60313C18.731 6.66273 18.731 5.13165 17.8112 4.19073C16.9117 3.27071 15.4694 3.27024 14.5696 4.19073L4.73702 14.2482C3.10751 15.9151 3.08238 18.6132 4.68119 20.2629C6.27541 21.9079 8.85236 21.9099 10.4495 20.2763L18.5148 12.0264C18.8044 11.7301 19.2792 11.7248 19.5754 12.0144L20.6478 13.0627C20.944 13.3522 20.9494 13.8271 20.6598 14.1233L12.5945 22.3732C9.80186 25.2296 5.28466 25.1958 2.52715 22.3504Z"
                      fill="#198754"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-20 lg:text-36 font-medium text-deepgreen">
                    আইন-ও-বিধি
                  </h3>
                </div>
              </div>
              <div>
                <div>
                  <p className="text-15 lg:text-20 font-medium text-deepgreen">
                    আইন-ও-বিধি
                  </p>
                  <hr className="bg-secondary h-[2px]" />
                  <p className="text-black text-12 lg:text-15 pt-2">
                    বাংলাদেশ প্ল্যাটফরমে আপনাকে স্বাগতম। অনলাইনে সেবার আবেদন
                    গ্রহণ, আবেদনের সর্বশেষ অবস্থা জানানো এবং সর্বোপরি জনভোগান্তি
                    হ্রাসের উদ্দেশ্যে এই প্ল্যাটফরম প্রস্তুত করা হয়েছে। নাগরিক,
                    ব্যবসায়ী, সরকারি ও বেসরকারি প্রতিষ্ঠান এবং সরকারি
                    কর্মকর্তা-কর্মচারিগণ এই প্ল্যাটফরমের সুবিধা গ্রহণ করতে
                    পারবেন। এই ওয়েবসাইটটি ব্যবহার করার জন্য আপনাকে অবশ্যই কিছু
                    শর্তাবলি মেনে চলতে হবে, যা আপনি এই সাইটে প্রবেশ করা মাত্রই
                    প্রযোজ্য।
                  </p>
                </div>
                <div>
                  <p className="text-deepgreen text-18 lg:text-20 font-medium py-1">
                    ভূমি মন্ত্রণালয়ের আইন সমূহ
                  </p>
                </div>
              </div>

              <div className="overflow-x-auto h-[60vh] overflow-y-auto">
                <table className="w-full">
                  <thead className="bg-primary text-white text-left sticky top-0">
                    <tr>
                      <th scope="col" className="pl-1 ">
                        নং
                      </th>
                      <th scope="col" className="">
                        তারিখ
                      </th>
                      <th scope="col" className="">
                        বিষয়
                      </th>
                      <th scope="col" className="text-center ">
                        ফাইল (PDF)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-left">
                    {data?.map((item: any, index: any) => (
                      <tr
                        key={index}
                        className="border-b border-primary hover:bg-green-50"
                      >
                        <td className="pl-1">{num_en_to_bn(index + 1)}.</td>
                        <td>{num_en_to_bn(formateDate(item?.created_at))}</td>
                        <td>{item?.title}</td>
                        <td>
                          <Link
                            href={item?.ayinbidhi_pdf}
                            target="_blank"
                            className="flex items-center space-x-2 justify-center border border-primary p-1 m-1"
                            rel="noreferrer noopener"
                          >
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="19"
                                viewBox="0 0 16 19"
                                className="fill-primary"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M15.3125 5.05L11.2125 0.925L10.775 0.75H1.125L0.5 1.375V8.25H1.75V2H9.25V6.375L9.875 7H14.25V8.25H15.5V5.5L15.3125 5.05ZM10.5 5.75V2L14.25 5.75H10.5ZM1.125 9.5L0.5 10.125V17.625L1.125 18.25H14.875L15.5 17.625V10.125L14.875 9.5H1.125ZM14.25 15.75V17H1.75V10.75H14.25V15.75ZM4.25 14.5H3.85V15.75H3V12H4.325C5.2625 12 5.7375 12.45 5.7375 13.25C5.73992 13.42 5.70541 13.5885 5.63635 13.7439C5.56729 13.8993 5.46532 14.0379 5.3375 14.15C5.02772 14.3915 4.64246 14.5155 4.25 14.5ZM4.175 12.6875H3.85V13.85H4.175C4.625 13.85 4.85 13.65 4.85 13.2625C4.85 12.875 4.625 12.6875 4.175 12.6875ZM9.25 15.225C9.43461 15.0432 9.57896 14.8246 9.67371 14.5834C9.76845 14.3422 9.81148 14.0839 9.8 13.825C9.8 12.575 9.1375 12 7.8 12H6.475V15.75H7.8C8.06441 15.7628 8.32873 15.723 8.57764 15.6329C8.82654 15.5428 9.05508 15.4041 9.25 15.225ZM7.3125 15.0625V12.6875H7.725C7.88443 12.6774 8.04425 12.6999 8.1947 12.7536C8.34515 12.8073 8.48306 12.8912 8.6 13C8.70595 13.1113 8.78826 13.2428 8.84197 13.3868C8.89567 13.5307 8.91967 13.684 8.9125 13.8375C8.93122 14.167 8.81889 14.4905 8.6 14.7375C8.48556 14.847 8.35017 14.9322 8.20195 14.9881C8.05373 15.044 7.89575 15.0693 7.7375 15.0625H7.3125ZM12.875 14.3H11.6625V15.75H10.8125V12H12.9875V12.6875H11.6625V13.6125H12.875V14.3Z"
                                />
                              </svg>
                            </span>
                            <span>ডাউনলোড (PDF)</span>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
