export const revalidate = 3600;

import { formateDate, num_en_to_bn } from "@/helpers/helpers";
import bg from "@/public/images/group6127.png";
import Link from "next/link";
import { manuals } from "../../../v1";

const Index = async () => {
  const { data } = await manuals();
  

  const style = {
    backgroundImage: `url(${bg.src})`,
  };

  return (
    /* style={style} className="bg-cover" */
    <>
      <div>
        <div>
          <div className="container mx-auto px-4 lg:px-[50px]">
            <div className="bg-white p-4">
              <div className="flex items-center justify-center space-x-5 mb-5">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="31"
                    viewBox="0 0 30 31"
                    fill="none"
                  >
                    <path
                      d="M27.1875 0.5H8.4375C6.88477 0.5 5.625 1.75977 5.625 3.3125V6.125H2.8125C1.25977 6.125 0 7.38477 0 8.9375V27.6875C0 29.2402 1.25977 30.5 2.8125 30.5H21.5625C23.1152 30.5 24.375 29.2402 24.375 27.6875V24.875H27.1875C28.7402 24.875 30 23.6152 30 22.0625V3.3125C30 1.75977 28.7402 0.5 27.1875 0.5ZM21.5625 27.6875H2.8125V15.5H21.5625V27.6875ZM27.1875 22.0625H24.375V8.9375C24.375 7.38477 23.1152 6.125 21.5625 6.125H8.4375V3.3125H27.1875V22.0625Z"
                      fill="#466551"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-20 lg:text-36 font-medium text-deepgreen">
                    ভূমি মন্ত্রণালয়ের ম্যানুয়াল সমূহ
                  </h3>
                </div>
              </div>
              <div className="overflow-x-auto h-[60vh] overflow-y-auto">
                <table className="w-full">
                  <thead className="bg-primary text-white text-left sticky top-0">
                    <tr>
                      <th scope="col" className="pl-1 w-[10%]">
                        নং
                      </th>
                      <th scope="col" className="w-[20%]">
                        তারিখ
                      </th>
                      <th scope="col" className="w-[30%]">
                        বিষয়
                      </th>
                      {/* <th scope="col" className="text-center w-[20%]">
                        ফাইল (MS-Word)
                      </th> */}
                      <th scope="col" className="text-center w-[20%]">
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
                        {/* <td>
                          <Link
                            href={item?.manual_doc}
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
                            <span>ডাউনলোড (MS-Word)</span>
                          </Link>
                        </td> */}
                        <td>
                          <Link
                            href={item?.manual_pdf}
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
