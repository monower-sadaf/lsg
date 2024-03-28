'use client';

import { useRouter } from "next/navigation";

const Error = ({ error, reset }) => {
    const route = useRouter();
    return (
      <section className="min-h-screen w-full bg-green-200 flex flex-col space-y-4 justify-center items-center">
        <h3 className="text-20 leading-[20.23px]">Something went wrong.</h3>
        {/* <p>{error.message}</p> */}
        <button onClick={() => window.location.reload()} className="bg-red-600 text-white px-4 py-2 rounded">রিফ্রেশ করুন</button>
      </section>
    );
};


export default Error;