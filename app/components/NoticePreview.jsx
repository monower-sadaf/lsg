'use client'

import { useState } from "react";
import Link from "next/link";
import { en2bn } from "@/helpers/helpers";

const NoticePreview = ({data}) => {
    const [previewData, setPreviewData] = useState(data[0]?.pdf_path);
    return (
      <section>
        <ul className="list-disc list-inside pb-5">
          {data?.map((item, index) => (
            <li key={index}>
              <a
                onClick={() => setPreviewData(item?.pdf_path)}
                className="hover:underline"
                href={
                  (item?.pdf_path.includes("doc") ||
                  item?.pdf_path.includes("doc")) ? item?.pdf_path : '#'
                }
              >
                {item?.pdf_name}
              </a>
            </li>
          ))}
        </ul>
        {(!previewData.includes("doc") || !previewData.includes("docx")) && (
          <div className="overflow-y-auto">
            <object
              data={previewData}
              type="application/pdf"
              height={600}
              width={700}
            ></object>
          </div>
        )}
      </section>
    );
};
export default NoticePreview;