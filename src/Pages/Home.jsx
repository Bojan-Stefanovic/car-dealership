import Brands from "../components/Brands";
import FAQS from "../components/FAQS";
import FeaturedCars from "../components/FeaturedCars";
import Hero from "../components/Hero";
import Offers from "../components/Offers";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Tour from "../components/Tour";
import WhyUs from "../components/WhyUs";
import Contact from "../components/Contact";
import { useAppContext } from "../context/AppContext";
import { useEffect, useRef } from "react";

function Home() {
  const { setIsHeaderFixed, setIsHomePage } = useAppContext();
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsHeaderFixed(false);
          } else {
            setIsHeaderFixed(true);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    setIsHomePage(true);
    return () => {
      observer.disconnect();
    };
  }, [setIsHeaderFixed, heroRef, setIsHomePage]);

  return (
    <div className="flex flex-col justify-center items-center mx-auto max-w-full">
      <div ref={heroRef} className="mx-auto h-full w-full">
        <Hero />
      </div>
      <div style={{ height: "10vh" }} />
      <div className="bg-white w-screen flex flex-col items-center justify-center z-10">
        <FeaturedCars />
        <Offers />
        <Testimonials />
        <Services />
        <WhyUs />
        <Contact />
        <Brands />
        <Tour />
        <FAQS />
      </div>
    </div>
  );
}

export default Home;
