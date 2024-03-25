/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import { useTransition, animated } from "react-spring";
import Icons from "../utils/Icons";
import { useAppContext } from "../context/AppContext";

function Testimonials() {
  const [index, setIndex] = useState(0);
  const { testimonials } = useAppContext();
  const transitions = useTransition(index, {
    from: { opacity: 0, transform: "translateX(100%)" },
    enter: { opacity: 1, transform: "translateX(0%)" },
    leave: { opacity: 0, transform: "translateX(-100%)" },
    config: { duration: 500 },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-12 h-[40rem] md:mb-20 lg:mb-0 xs:mb-10 sm:mb-10 smallest:mb-[65%] container px-4 sm:px-10 md:px-20 lg:px-28">
      <h2 className="text-2xl sm:text-3xl md:text-4xl mb-8 sm:mb-12 md:mb-16 font-bold text-center">
        What our customers say
      </h2>
      <div className="flex flex-col">
        <div className="relative">
          {transitions((style, i) => (
            <animated.div
              style={style}
              className="container absolute jsut mx-auto flex flex-col md:flex-row items-center content-center rounded-md shadow-noOffset shadow-black/30 p-2 sm:p-6 md:p-10 bg-[#0e691d6c]/25"
              key={i}>
              <div className="flex justify-center md:justify-start md:w-1/3 lg:w-1/4">
                <img
                  src={testimonials[i].image}
                  alt={testimonials[i].name}
                  className="ring-[#7ef29d]/50 ring-8 w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full sm:mb-4 md:mx-6"
                />
              </div>
              <div className="flex flex-col md:w-2/3 lg:w-3/4 px-4 py-2 text-center md:text-left">
                <div className="text-lg relative md:text-xl p-8 rounded-br-[5rem] rounded-tl-[5rem] bg-[#eaffef] font-normal italic">
                  <Icons
                    name="Quote"
                    size="3rem"
                    className="absolute top-[-5%] left-0"></Icons>
                  {testimonials[i].comment}
                  <Icons
                    name="Quote"
                    size="3rem"
                    className="rotate-180 absolute bottom-[-5%] right-0"></Icons>
                </div>
                <p className="mt-8 text-md font-semibold">
                  {testimonials[i].name}, {testimonials[i].location}
                </p>
              </div>
            </animated.div>
          ))}
        </div>
        <div className="flex justify-center relative items-center mt-4">
          {testimonials.map((_, i) => (
            <button
              onClick={() => setIndex(i)}
              key={i}
              className={`mr-2 2xl:mt-[20rem] xl:mt-[21rem] lg:mt-[22rem] md:mt-[30rem] sm:mt-[28rem] xxs:mt-[30rem] smallest:mt-[43rem] xxxs:mt-[33rem] mt-[30rem] bg-green-400/50 w-3 h-3 sm:w-4 sm:h-4 rounded-full ${
                i === index ? "bg-green-600" : ""
              }`}
              aria-label={`Go to testimonial ${i + 1}`}></button>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Testimonials;
