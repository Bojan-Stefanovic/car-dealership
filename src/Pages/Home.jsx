/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from "react";
import Brands from "../components/Brands";
import FAQS from "../components/FAQS";
import FeaturedCars from "../components/FeaturedCars";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Offers from "../components/Offers";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Tour from "../components/Tour";
import WhyUs from "../components/WhyUs";
import Contact from "./Contact";
import { useAppContext } from "../context/AppContext";

function Home() {
  const { setIsHeaderFixed } = useAppContext();
  const heroRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeaderFixed(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, [setIsHeaderFixed]);
  return (
    <div className="flex flex-col min-h-screen justify-center items-center mx-auto max-w-full">
      <div ref={heroRef} className="mx-auto w-full">
        <Hero />
      </div>
      <FeaturedCars />
      <Offers />
      <Testimonials />
      <Services />
      <WhyUs />
      <Contact />
      <Brands />
      <Tour />
      <FAQS />
      <Footer />
    </div>
  );
}

export default Home;
