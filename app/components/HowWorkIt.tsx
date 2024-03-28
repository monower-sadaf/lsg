const HowWorkIt = () => {
      return <section className="container mx-auto">
            <div className="my-8 text-center">
                  <h3 className="text-primary text-32 font-semibold">কীভাবে কাজ করে</h3>
            </div>
            <div className="px-12 md:px-20 pb-3">
                  <div className="customBg1 bg-cover w-full md:h-[842px]">
                        <div className="md:flex md:pt-6 justify-center">
                              <div>
                                    <div style={{ backgroundImage: 'url("/images/image1.png")' }}
                                          className="bg-cover w-[313px] h-[402px]">
                                          <div
                                                className="text-center h-full flex flex-col justify-center items-center pt-40 px-10">
                                                <p className="text-20 text-primary font-semibold">ফ্রি রেজিস্ট্রেশন করুন</p>
                                                <p className="mt-6 text-14 font-semibold">রেজিঃ করে আপনার প্রোফাইলে প্রয়োজনীয়
                                                      তথ্যাদি যোগ করুন।</p>
                                          </div>
                                    </div>
                              </div>
                              <div>
                                    <div className="
                                    hidden
                                    md:block
                                    h-[110px]
                                    w-[210px]
                                     border-primary
                                    border-t-2
                                    border-r-2
                                    rounded-tr-[50px]
                                           ">
                                    </div>
                                    <div className="md:ml-[60px] mt-12 md:flex">
                                          <div style={{ backgroundImage: "url('/images/image2.png')" }}
                                                className=" bg-cover w-[313px] h-[402px]">
                                                <div
                                                      className="text-center pt-40 px-10 h-full flex flex-col justify-center items-center">
                                                      <p className="text-20 text-primary font-semibold">কাঙ্ক্ষিত সার্ভিসটি
                                                            আবেদন
                                                      </p>
                                                      <p className="mt-6 text-14 font-semibold">সেবাখাত থেকে আপনার দরকারি জমি
                                                            সংক্রান্ত সেবাটি নির্বাচন করে প্রয়োজনীয় তথ্যাদি প্রদান করে আবেদনটি
                                                            দাখিল করুন।</p>
                                                </div>
                                          </div>
                                          <div>
                                                <div
                                                      className="hidden md:block h-[150px] w-[210px] border-primary border-t-2 border-r-2 rounded-tr-[50px]">
                                                </div>
                                                <div className="md:ml-[60px] mt-12">
                                                      <div style={{ backgroundImage: "url('/images/image3.png')" }}
                                                            className="bg-cover w-[313px] h-[402px]">
                                                            <div
                                                                  className="text-center pt-40 px-10 h-full flex flex-col justify-center items-center">
                                                                  <p className="text-20 text-primary font-semibold">ভূমি
                                                                        সংক্রান্ত
                                                                        তথ্য জানুন</p>
                                                                  <p className="mt-6 text-14 font-semibold">আপনি আবেদনের চলতি
                                                                        অবস্থা দেখতে পারবেন এবং আপনার ইমেইল ও ফোনে পৌঁছে যাবে
                                                                        আবেদনের সকল আপডেট।</p>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      </section>

}
export default HowWorkIt;