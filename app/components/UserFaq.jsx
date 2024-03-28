'use client';

import { useState, useEffect } from "react";
import Loader from "./_skeleton/Loader";
import Image from "next/image";
import {
  relative_image_path,
  PhoneValidate,
} from "@/helpers/helpers";
import { user_ask_question } from "@/v1";

const UserFaq = () => {
  const [submit, setSubmit] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    number: "",
    question: "",
  });
  const [errors, setErrors] = useState({
    status: true,
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const HandleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const validation = PhoneValidate(formValues.number);

    if (validation?.status) {
      let data = await user_ask_question(formValues);

      setErrors({
        status: true,
        message: validation?.message,
      });

      setSubmit(true);

      setFormValues({
        name: "",
        number: "",
        question: "",
      });
      setTimeout(() => {
        setSubmit(false);
        setErrors({
          status: false,
          message: "",
        });
        setLoading(false);
      }, 5000);
    } else {
      setErrors({
        status: false,
        message: validation?.message,
      });

      setSubmit(true);
      setFormValues({
        name: "",
        number: "",
        question: "",
      });

      setTimeout(() => {
        setSubmit(false);
        setErrors({
          status: true,
          message: "",
        });
        setLoading(false);
      }, 5000);
    }
  };

    return (
      <div>
        <div className="flex flex-col justify-center">
          <div className="border border-primary bg-white  rounded-md w-full">
            <div className="bg-[#890000] rounded-t py-4">
              <p className="text-white text-center text-18">
                আপনার কোন জিজ্ঞাসা রয়েছে?
              </p>
            </div>
            <div className="px-4 py-3">
              <form onSubmit={(e) => HandleSubmit(e)}>
                {submit && (
                  <div
                    className={`w-full text-center rounded-md p-1 mb-1 ${
                      errors?.status
                        ? "bg-green-200 text-green-700"
                        : "bg-red-200 text-red-700"
                    }`}
                  >
                    {errors?.message}
                  </div>
                )}
                <div className="mb-3">
                  <fieldset className="pl-3 border border-primary rounded">
                    <legend className="px-2 text-primary text-12 after:content-['_*'] after:text-red-600">
                      আপনার নাম
                    </legend>
                    <div className="flex items-center">
                      <input
                        value={formValues.name}
                        onChange={(e) =>
                          setFormValues({
                            ...formValues,
                            name: e.target.value,
                          })
                        }
                        name="name"
                        type="text"
                        className="w-[90%] border-none focus:outline-none focus:ring-0 placeholder:text-15"
                        placeholder="আপনার নাম"
                        required
                        onInvalid={(e) => e.target.setCustomValidity("নাম দিন")}
                        onInput={(e) => e.target.setCustomValidity("")}
                      />
                    </div>
                  </fieldset>
                </div>
                <div className="mb-3">
                  <fieldset className="pl-3 border border-primary rounded">
                    <legend className="px-2 text-primary text-12 after:content-['_*'] after:text-red-600">
                      মোবাইল নম্বর
                    </legend>
                    <div className="flex items-center">
                      <input
                        value={formValues.number}
                        onChange={(e) =>
                          setFormValues({
                            ...formValues,
                            number: e.target.value,
                          })
                        }
                        name="number"
                        type="number"
                        className="w-[90%] border-none focus:outline-none focus:ring-0 placeholder:text-15"
                        placeholder="মোবাইল নম্বর"
                        required
                        onInvalid={(e) =>
                          e.target.setCustomValidity("সঠিক নাম্বার দিন")
                        }
                        onInput={(e) => e.target.setCustomValidity("")}
                      />
                      <i className="fa-solid fa-number text-18 text-primary float-right" />
                    </div>
                  </fieldset>
                </div>
                <div>
                  <fieldset className="pl-3 border border-primary rounded">
                    <legend className="px-2 text-primary text-12 after:content-['_*'] after:text-red-600">
                      আপনার জিজ্ঞাসা
                    </legend>
                    <div className="flex items-center w-full">
                      <textarea
                        value={formValues.question}
                        onChange={(e) =>
                          setFormValues({
                            ...formValues,
                            question: e.target.value,
                          })
                        }
                        name="question"
                        className="border-none focus:outline-none focus:ring-0 placeholder:text-15 w-full"
                        cols={20}
                        rows={4}
                        required
                        onInvalid={(e) =>
                          e.target.setCustomValidity("জিজ্ঞাসা লিখুন")
                        }
                        onInput={(e) => e.target.setCustomValidity("")}
                      />
                    </div>
                  </fieldset>
                </div>
                <div className="flex justify-center my-3">
                  <button
                    disabled={loading}
                    type="submit"
                    className={`flex space-x-3 items-center px-5 py-2 rounded-md border border-primary ${
                      loading
                        ? "cursor-not-allowed bg-white"
                        : "cursor-pointer bg-secondary"
                    }`}
                  >
                    {loading ? (
                      <Loader />
                    ) : (
                      <>
                        <span>
                          <svg
                            width="19"
                            height="18"
                            viewBox="0 0 19 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M18.2188 9C18.2188 13.8163 14.3149 17.7188 9.5 17.7188C4.68511 17.7188 0.78125 13.8163 0.78125 9C0.78125 4.18651 4.68511 0.28125 9.5 0.28125C14.3149 0.28125 18.2188 4.18651 18.2188 9ZM9.73396 3.16406C7.81805 3.16406 6.59609 3.97114 5.63654 5.40555C5.51223 5.59139 5.55382 5.84202 5.73199 5.97713L6.95188 6.90209C7.13486 7.04085 7.39558 7.00784 7.53775 6.82748C8.16579 6.03091 8.59641 5.569 9.55231 5.569C10.2705 5.569 11.1589 6.03123 11.1589 6.72768C11.1589 7.25418 10.7242 7.52456 10.0151 7.92214C9.18809 8.38575 8.09375 8.96277 8.09375 10.4062V10.5469C8.09375 10.7799 8.28264 10.9688 8.51562 10.9688H10.4844C10.7174 10.9688 10.9062 10.7799 10.9062 10.5469V10.5C10.9062 9.49939 13.8308 9.45773 13.8308 6.75C13.8308 4.71087 11.7156 3.16406 9.73396 3.16406ZM9.5 11.8828C8.60826 11.8828 7.88281 12.6083 7.88281 13.5C7.88281 14.3917 8.60826 15.1172 9.5 15.1172C10.3917 15.1172 11.1172 14.3917 11.1172 13.5C11.1172 12.6083 10.3917 11.8828 9.5 11.8828Z"
                              fill="#F9FFFA"
                            />
                          </svg>
                        </span>
                        <p className="text-15 text-white">প্রদান করুন</p>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div>
          <Image
            src={relative_image_path("faq_img.png")}
            className="w-full"
            height={1000}
            width={1000}
            alt="image"
            security="true"
          />
        </div>
      </div>
    );
}

export default UserFaq;