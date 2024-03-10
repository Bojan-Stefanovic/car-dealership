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

function Home() {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center mx-auto max-w-full">
      <Hero />

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
