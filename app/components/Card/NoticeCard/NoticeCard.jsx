import { num_en_to_bn } from "@/helpers/helpers";
import { formateDate, bangla_month } from "@/helpers/helpers";
import Link from "next/link";

const NoticeCard = ({ id, notice, time }) => {
  return (
    <>
      <Link
        href={{ pathname: "/notice/" + id }}
        shallow
        className="flex items-center space-x-2 border border-primary p-1 rounded-md cursor-pointer group"
      >
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-[2em] fill-primary"
            viewBox="0 0 512 512"
          >
            <path d="M168 80c-13.3 0-24 10.7-24 24V408c0 8.4-1.4 16.5-4.1 24H440c13.3 0 24-10.7 24-24V104c0-13.3-10.7-24-24-24H168zM72 480c-39.8 0-72-32.2-72-72V112C0 98.7 10.7 88 24 88s24 10.7 24 24V408c0 13.3 10.7 24 24 24s24-10.7 24-24V104c0-39.8 32.2-72 72-72H440c39.8 0 72 32.2 72 72V408c0 39.8-32.2 72-72 72H72zM176 136c0-13.3 10.7-24 24-24h96c13.3 0 24 10.7 24 24v80c0 13.3-10.7 24-24 24H200c-13.3 0-24-10.7-24-24V136zm200-24h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H376c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 80h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H376c-13.3 0-24-10.7-24-24s10.7-24 24-24zM200 272H408c13.3 0 24 10.7 24 24s-10.7 24-24 24H200c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 80H408c13.3 0 24 10.7 24 24s-10.7 24-24 24H200c-13.3 0-24-10.7-24-24s10.7-24 24-24z" />
          </svg>
        </div>
        <div>
          <p className="group-hover:underline">
            {notice.length > 32 ? notice.slice(0, 32) + "..." : notice}
          </p>
          <p className="flex items-center space-x-2 text-gray-400 text-14">
            <span>
              সর্ব-শেষ হাল-নাগাদঃ
            </span>
            <span>{num_en_to_bn(bangla_month(formateDate(time)))}</span>
          </p>
        </div>
      </Link>
    </>
  );
};

export default NoticeCard;
