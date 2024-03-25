/* eslint-disable react-refresh/only-export-components */
import { useState, useEffect } from "react";
import { useAppContext } from "../context/AppContext";

function FAQS() {
  const { faqs } = useAppContext();
  const [curOpen, setCurOpen] = useState(null);
  const [nextOpen, setNextOpen] = useState(null);

  useEffect(() => {
    if (nextOpen !== null && nextOpen !== curOpen) {
      const timer = setTimeout(() => {
        setCurOpen(nextOpen);
        setNextOpen(null);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [nextOpen, curOpen]);

  const handleClick = (index) => {
    if (index === curOpen) {
      setCurOpen(null);
    } else {
      if (curOpen !== null) {
        setNextOpen(index);
        setCurOpen(null);
      } else {
        setCurOpen(index);
      }
    }
  };

  return (
    <section className="faqs-section py-12 container flex bg-white">
      <div className="container mx-auto w-[50rem] h-[40rem] px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          FAQs
        </h2>
        <div>
          {faqs.map((faq, index) => {
            const isOpen = index === curOpen;
            return (
              <div
                key={faq.id}
                className="mb-4 gap-y-2 flex justify-center flex-col">
                <div
                  className={`border-t-2 bg-[#f8f8f8d3] border-solid ${
                    isOpen ? "border-[#7ef29d]" : "border-transparent"
                  } box-border bg-white shadow-noOffset rounded-lg p-4 flex justify-between items-center cursor-pointer transition-all duration-500 ease-in-out`}
                  onClick={() => handleClick(index)}>
                  <div className="text-4xl tracking-widest font-extrabold text-[#60c07aa1] ml-2">
                    {faq.id}
                  </div>
                  <h3 className="text-xl font-bold">{faq.question}</h3>
                  <span className="text-lg flex justify-center items-center w-5">
                    {isOpen ? "-" : "+"}
                  </span>
                </div>
                <div
                  className={`transition-max-height duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-96" : "max-h-0"
                  }`}>
                  <div className="mt-3 p-4 bg-white shadow- rounded-lg text-lg bg-[#60c07a57]">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQS;
