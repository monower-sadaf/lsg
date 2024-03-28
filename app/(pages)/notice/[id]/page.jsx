export const revalidate = 3600;

import { bangla_month, formateDate } from "@/helpers/helpers";
import NoticeCard from "@/app/components/Card/NoticeCard/NoticeCard";
import { single_notice, notice } from "@/v1";
import NoticePreview from '@/app/components/NoticePreview';

const Home = async ({ params }) => {
  const res = await single_notice(params?.id);
  const related_more2 = await notice();
  const related_more = related_more2.data;
  const {
    data
  } = res;

  const attachments = data.notice_pdf;
  const filteredAttachments = data[0].notice_pdf;
  // console.log(filteredAttachments[0]);

  return (
    <>
      <section>
        <div className="container mx-auto px-4 lg:px-[50px]">
          <div className="bg-white p-3 flex flex-col lg:flex-row lg:space-x-4">
            <div className="w-full flex flex-col space-y-3 pb-5 lg:pb-0">
              <h3 className="font-medium text-20 leading-[31px] lg:text-32 text-primary w-full border-b border-primary text-center py-4">
                নোটিশ
              </h3>
              <div className="flex flex-col lg:flex-row justify-between space-y-3 lg:space-y-0">
                <div>
                  <p className="flex items-center space-x-2 text-14 text-gray-400 italic">
                    <span>সর্ব-শেষ হাল-নাগাদঃ</span>
                    <span>
                      {bangla_month(formateDate(data[0]?.created_at))}
                    </span>
                  </p>
                </div>
              </div>
              <div>
                <p>{data[0]?.notice}</p>
              </div>
              <NoticePreview data={filteredAttachments} />
            </div>
            <div className="lg:w-[30%]">
              <h3>আরো নোটিশ</h3>
              <div className="flex flex-col space-y-3">
                {related_more?.splice(0,5)?.map((item, index) => {
                  if (item.id != params?.id && item?.status == 1) {
                    return (
                      <div key={index}>
                        <NoticeCard
                          id={item?.id}
                          notice={item?.notice}
                          time={item?.created_at}
                        />
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
