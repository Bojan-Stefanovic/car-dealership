/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import { useTransition, animated } from "react-spring";
import Icons from "../utils/Icons";

function Testimonials() {
  const [index, setIndex] = useState(0);
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      location: "New York, NY",
      comment:
        "I had an amazing experience at The Wheel Deal. The staff was incredibly friendly, and I found the perfect car at a great price! It was a seamless process from start to finish, making it by far the best car buying experience I've ever had.",
      image: "../../public/FakePeople/John doe.jpg",
    },
    {
      id: 2,
      name: "Maria Martinez",
      location: "Toronto, Canada",
      comment:
        "The Wheel Deal exceeded my expectations! The selection of cars was impressive, and the staff made sure I drove off with a smile. Best car shopping experience! Everyone was so helpful and transparent through the entire process.",
      image: "../../public/FakePeople/maria martinez.jpg",
    },
    {
      id: 3,
      name: "Aarav Patel",
      location: "Mumbai, India",
      comment:
        "Incredible service at The Wheel Deal! The staff was knowledgeable and helped me choose the perfect vehicle for my family. Very satisfied with my purchase. They took the time to understand my needs and offered testimonialsalized advice.",
      image: "../../public/FakePeople/AaravPatel.jpg",
    },
    {
      id: 4,
      name: "Lia Wei",
      location: "Beijing, China",
      comment:
        "I was amazed by the professionalism at The Wheel Deal. They have a great selection of cars and offer honest advice. Highly recommend to anyone looking for a new car. Their attention to detail and customer care is unmatched.",
      image: "../../public/FakePeople/lia wei.jpg",
    },
    {
      id: 5,
      name: "Emma Dubois",
      location: "Paris, France",
      comment:
        "Fantastic experience at The Wheel Deal! The staff was extremely welcoming and patient, helping me find exactly what I was looking for. A truly exceptional service! I felt valued and respected throughout my visit.",
      image: "../../public/FakePeople/Ema Dubios.jpg",
    },
    {
      id: 6,
      name: "Mohamed Al-Fayed",
      location: "Hurgada, Egypt",
      comment:
        "The Wheel Deal is the go-to place for cars! Their expertise and selection are unparalleled. I found a luxury car at an unbeatable price. Thank you for the wonderful service! Their dedication to excellence is evident in every interaction.",
      image: "../../public/FakePeople/Al-Fayed.jpg",
    },
  ];

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
