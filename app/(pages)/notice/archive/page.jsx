"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { notice as notices } from "@/v1";
import { bangla_month, en2bn, formateDate } from "@/helpers/helpers";

const Home = () => {
  const [data2, setData2] = useState([]);
  const [tab, setTab] = useState(0);

  useEffect(() => {
    notices()
      .then(({ data }) => {
        const archive = data.filter((item) => item?.status == 2);
        setData2(archive.reverse());
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <section>
        <div className="container mx-auto px-4 lg:px-[50px]">
          <div className="bg-white p-3 lg:min-h-[84vh]">
            <h3 className="font-medium text-20 leading-[31px] lg:text-32 text-primary w-full text-center py-4 mb-2">
              আর্কাইভ নোটিশ সমূহ
            </h3>

            <div className="overflow-x-auto h-[60vh] overflow-y-auto">
              <table className="w-full ">
                <thead className="bg-white sticky top-0 border">
                  <tr>
                    <th className="border border-gray-500">ক্রমিক</th>
                    <th className="border border-gray-500">বিষয়</th>
                    <th className="border border-gray-500">প্রকাশের তারিখ</th>
                    <th className="border border-gray-500">ডাউনলোড</th>
                  </tr>
                </thead>
                <tbody>
                  {data2?.map((item, index) => {
                    return (
                      <tr key={index} className="border border-gray-300">
                        <td className="w-[5%] border border-gray-300 p-1">
                          {en2bn(data2.length - index)}
                        </td>
                        <td className="w-[75%] border border-gray-300 p-1">
                          <Link
                            href={{
                              pathname: `/notice/${item?.id}`,
                            }}
                            shallow
                            className="hover:underline"
                            title="বিস্তারিত দেখুন"
                          >
                            {item?.notice}
                          </Link>
                        </td>
                        <td className="w-[10%] border border-gray-300 p-1">
                          {bangla_month(formateDate(item?.created_at))}
                        </td>
                        <td className="w-[10%]  border-gray-300 p-1">
                          <div className="w-full flex justify-center items-center space-x-3">
                            {item?.notice_pdf ? (
                              <>
                                {item?.notice_pdf.map((item, index) => {
                                  return (
                                    <a
                                      key={index}
                                      href={item?.pdf_path}
                                      rel="noopener noreferrer"
                                    >
                                      {item?.pdf_path?.includes(".pdf") ? (
                                        <svg
                                          className="w-8 h-8 fill-primary"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 512 512"
                                        >
                                          <path d="M64 464l48 0 0 48-48 0c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 304l-48 0 0-144-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16zM176 352l32 0c30.9 0 56 25.1 56 56s-25.1 56-56 56l-16 0 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48 0-80c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24l-16 0 0 48 16 0zm96-80l32 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-32 0c-8.8 0-16-7.2-16-16l0-128c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-16 0 0 96 16 0zm80-112c0-8.8 7.2-16 16-16l48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 32 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64 0-64z" />
                                        </svg>
                                      ) : (
                                        <svg
                                          className="w-8 h-8 fill-primary"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 384 512"
                                        >
                                          <path d="M48 448V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm55 241.1c-3.8-12.7-17.2-19.9-29.9-16.1s-19.9 17.2-16.1 29.9l48 160c3 10.2 12.4 17.1 23 17.1s19.9-7 23-17.1l25-83.4 25 83.4c3 10.2 12.4 17.1 23 17.1s19.9-7 23-17.1l48-160c3.8-12.7-3.4-26.1-16.1-29.9s-26.1 3.4-29.9 16.1l-25 83.4-25-83.4c-3-10.2-12.4-17.1-23-17.1s-19.9 7-23 17.1l-25 83.4-25-83.4z" />
                                        </svg>
                                      )}
                                    </a>
                                  );
                                })}
                              </>
                            ) : (
                              "কোনো সংযুক্তি নেই"
                            )}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="mt-5">
              <Link
                href={{
                  pathname: "/notice",
                }}
                className="bg-green-500 text-white px-3 py-1 rounded"
              >
                নোটিশে ফিরে যান
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
