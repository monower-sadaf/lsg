import MultiCarousel from "../Carousel/MultiCarousel";

const LandRelatedInfo = ({ items }) => {
  return (
    <section className="lg:pb-5">
      <div className=" p-5 bg-slate-50 container mx-auto px-4 lg:px-[50px]">
        <div className="flex justify-center items-center pb-1 md:pb-12">
          <h3 className="text-24 leading-[31px] lg:text-36 lg:leading-[31px] text-secondary">
            ভূমি সংক্রান্ত তথ্য যাচাইকরণ
          </h3>
        </div>
        <div className="pb-7 md:px-16 ">
          <MultiCarousel items={items} />
        </div>
      </div>
    </section>
  );
};

export default LandRelatedInfo;
