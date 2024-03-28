import Marquee from "react-fast-marquee";
import { cache } from "react";


const MarqueeNotice = cache(({ items }) => {
  return (
    <div className="border container mx-auto px-4 lg:px-[50px]">
      <div className="flex items-center md:pl-12 py-2">
        <>
          <p className="text-15 lg:text-20 font-medium w-[20%] md:w-[7%] border-r text-notice text-primary">
            নোটিশ
          </p>

          <Marquee
            className="text-15 lg:text-20"
            speed={30}
            delay={1}
            pauseOnHover={true}
          >
            <div className="mr-4">
              {items?.notice}
            </div>
          </Marquee>
        </>
      </div>
    </div>
  );
});
export default MarqueeNotice;
