import Link from "next/link";

const SliderContent = () => {
    return (<>
        <div className="absolute top-0 left-[4%] z-20 flex items-start pl-4">
            <div className="flex flex-col space-y-4 w-[34em] ">
                <h3 className="text-32 leading-[47px] w-full">
                    অটোমেশন ভূমি ব্যবস্থাপনার সমন্বিত সফটওয়্যার
                </h3>
                {/* <p className="text-20 leading-[23.2px] pb-[5px]">সমন্বিত ভূমি ব্যবস্থাপনার জন্য ভূমি ব্যবস্থাপনা ও সেবা প্রদান পদ্ধতিকে অটোমেশনের আওতায় আনা হচ্ছে।</p>
                <div>
                    <Link href={{pathname:'#'}} shallow className="bg-primary text-white px-5 py-2 rounded-full text-20 leading-[20px]">
                        সফটওয়্যার
                    </Link>
                </div> */}
            </div>
        </div>
    </>)
};

export default SliderContent;