/* eslint-disable react-refresh/only-export-components */
import { useState, useEffect } from "react";

function FAQS() {
  const faqs = [
    {
      id: 1,
      question: "Do you offer financing options?",
      answer:
        "Yes, we offer competitive financing options tailored to your financial situation. Our finance team will work with you to find the best rates and terms.",
    },
    {
      id: 2,
      question: "Do you provide maintenance services?",
      answer:
        "Yes, we offer a range of maintenance services to keep your car running smoothly. From oil changes to major repairs, our skilled technicians have you covered.",
    },
    {
      id: 3,
      question: "Can I test drive cars before purchasing?",
      answer:
        "Absolutely! We encourage customers to schedule test drives for any vehicle they're interested in to ensure they're comfortable with their potential new car.",
    },
    {
      id: 4,
      question: "Can I buy a car online?",
      answer:
        "Yes, with The Wheel Deal, you can browse our inventory, finance, and purchase your next car all online. We can even arrange for delivery to your home.",
    },
    {
      id: 5,
      question: "What safety measures are in place for in-person visits?",
      answer:
        "Your safety is our top priority. We adhere to all public health guidelines, including sanitization, social distancing, and mask-wearing to ensure a safe environment for all our customers and staff.",
    },
  ];

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
