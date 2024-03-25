/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

import { createContext, useContext, useMemo, useState } from "react";

const AppContext = createContext();
const locations = [
  {
    name: "New York Office",
    address: "123 Main Street, New York, NY, 10001",
    coords: [40.7128, -74.006], // New York
  },
  {
    name: "Los Angeles Branch",
    address: "456 Elm Street, Los Angeles, CA, 90001",
    coords: [34.0522, -118.2437], // Los Angeles
  },
  {
    name: "London Office",
    address: "789 Piccadilly, London, W1J 9HU",
    coords: [51.5074, -0.1278], // London
  },
  {
    name: "Paris Branch",
    address: "101 Rue de Rivoli, 75001 Paris, France",
    coords: [48.8566, 2.3522], // Paris
  },
  {
    name: "Beijing Office",
    address: "102 Chaoyang, Beijing, China",
    coords: [39.9042, 116.4074], // Beijing
  },
  {
    name: "Dubai Branch",
    address: "103 Sheikh Zayed Road, Dubai, UAE",
    coords: [25.2048, 55.2708], // Dubai
  },
];
const reasons = [
  {
    id: 1,
    title: "Trusted by Thousands",
    description:
      "Over 10,000 happy customers and counting. Our commitment to quality service has made us a leading choice for car buyers.",
    icon: "Trust",
  },
  {
    id: 2,
    title: "Award-Winning Service",
    description:
      "Recognized for excellence in customer service, we've received multiple awards from industry associations.",
    icon: "Trophy",
  },
  {
    id: 3,
    title: "Unbeatable Deals",
    description:
      "Exclusive offers and discounts you won't find anywhere else. We work hard to give you the best deals.",
    icon: "Deal",
  },
  {
    id: 4,
    title: "Comprehensive Support",
    description:
      "From financing to after-sales support, our team is here to assist you every step of the way.",
    icon: "Support",
  },
];
const services = [
  {
    id: 1,
    title: "Expert Maintenance & Repair",
    description:
      "Maintain your vehicle's peak performance with our professional maintenance and repair services. From routine oil changes to comprehensive diagnostics and repairs, our certified technicians ensure your car runs smoothly and reliably.",
    icon: "Wrench",
  },
  {
    id: 2,
    title: "Advanced Safety System Maintenance",
    description:
      "Keep your vehicle's safety systems operating at their best with our maintenance services. From airbags to ABS and stability control, we ensure your car's safety features are functional and up to date.",
    icon: "Safety",
  },
  {
    id: 3,
    title: "Advanced Tire Services",
    description:
      "From tire rotation and balancing to selection and installation of new tires, our tire experts ensure your wheels are ready for the road, offering a range of top brands and styles for performance and safety.",
    icon: "Tire",
  },
  {
    id: 4,
    title: "Genuine Parts & Accessories",
    description:
      "Enhance your vehicle with genuine OEM parts and accessories. Whether you're customizing your car's appearance or upgrading its performance, find everything you need from our comprehensive selection.",
    icon: "Parts",
  },
  {
    id: 5,
    title: "Home Vehicle Delivery",
    description:
      "Experience the ultimate convenience with our home vehicle delivery service. Purchase your next vehicle from the comfort of your home, and have it delivered directly to your driveway, ready to drive.",
    icon: "Delivery",
  },
  {
    id: 6,
    title: "24/7 Roadside Assistance",
    description:
      "Stay protected on the road with our 24/7 roadside assistance. Whether you need a tow, jump-start, tire change, or lock-out service, we're here to help you around the clock.",
    icon: "Assistance",
  },
];
const specialOffers = [
  {
    id: 1,
    title: "Year End Clearance Sale",
    description:
      "Don't miss out on our biggest sale of the year! Enjoy discounts up to 60% off MSRP on selected models. Limited time only.",
    fullDescription: `Wrap up the year with our most anticipated event, the Year End
      Clearance Sale! The Wheel Deal is offering incredible discounts of
      up to 60% off MSRP on select models. This once-a-year event
      features a diverse selection of vehicles, from the latest
      innovations to timeless classics, all awaiting to be discovered by
      you. Whether you're in the market for a sleek sedan, a rugged SUV,
      or a powerful truck, our Year End Clearance Sale has something for
      every car enthusiast. But don't delay – these deals are available
      for a limited time and only while supplies last. Visit The Wheel
      Deal today and drive away in your dream car at a dream price.`,
    image:
      "https://img.freepik.com/premium-vector/year-end-clearence-sale-offer-banner-white-background_774115-42.jpg",
  },
  {
    id: 2,
    title: "0% APR Financing",
    description:
      "Qualified buyers can enjoy 0% APR financing for up to 60 months on select vehicles. Drive your dream car home today!",
    fullDescription: `At The Wheel Deal, we understand that financing can often be the
      most daunting aspect of purchasing a new vehicle. That's why we're
      excited to offer qualified buyers 0% APR financing for up to 60
      months on select vehicles. This exclusive offer is designed to
      make owning your dream car more affordable and stress-free than
      ever before. With 0% APR, you can enjoy the benefits of a lower
      monthly payment without the added cost of interest, allowing you
      to allocate funds to customize your new ride or simply save for
      the future. Speak with our finance experts today to learn more and
      take the first step towards driving away in the vehicle you've
      always wanted, with the financial peace of mind you deserve.`,
    image:
      "https://t4.ftcdn.net/jpg/01/00/12/75/360_F_100127563_8v6vUyyLDHggQn88ZNFqo2JhOCMVFGtD.jpg",
  },
  {
    id: 3,
    title: "Lease Specials",
    description:
      "Lease your next vehicle at an unbeatable rate. Exclusive deals starting as low as $199/month for 36 months with $2,999 due at signing.",
    fullDescription: `Discover the flexibility and affordability of leasing with The
      Wheel Deal's exclusive Lease Specials. Starting at just $199/month
      for 36 months with $2,999 due at signing, you can drive away in
      the latest model without the long-term commitment of purchasing.
      Leasing with us means you'll enjoy lower monthly payments,
      comprehensive warranty coverage throughout your lease term, and
      the option to upgrade to the newest model every few years. It's
      the perfect choice for drivers who love experiencing the latest in
      automotive innovation and style. Visit us to explore our wide
      range of lease options and find the perfect vehicle that fits your
      lifestyle and budget, all with the unmatched terms our Lease
      Specials offer.`,
    image:
      "https://media.istockphoto.com/id/1140138706/vector/lease-vector-home-rent-blank-document-lease-contract-loan-property-illustration.jpg?s=612x612&w=0&k=20&c=fk94EoZ9Uh0o66eFH9a5FeGUEwwth9V7ONIgWW0WWJ4=",
  },
  {
    id: 4,
    title: "Trade-In Extra Value",
    description:
      "Receive an additional $1,000 towards your trade-in vehicle. Make your switch to a new car smoother and more affordable.",
    fullDescription: `Upgrade your ride and maximize your investment with The Wheel
      Deal's Trade-In Extra Value offer. For a limited time, receive an
      additional $1,000 towards your trade-in vehicle when you choose to
      purchase or lease with us. Our straightforward and transparent
      evaluation process ensures you get the best possible value for
      your current vehicle, making your upgrade to a new car smoother
      and more affordable. Whether you're eyeing a sporty convertible or
      a family-friendly SUV, our extra trade-in value deal adds to the
      excitement of getting behind the wheel of your new car. Don't miss
      out on this opportunity to turn your old car into extra savings!`,
    image:
      "https://www.pngall.com/wp-content/uploads/2016/04/50-off-PNG-HD.png",
  },
  {
    id: 5,
    title: "Loyalty Reward Discount",
    description:
      "Our way of saying 'Thank You' - exclusive discounts for returning customers. Save up to 10% on your next vehicle purchase.",
    fullDescription: `At The Wheel Deal, we value our returning customers and are
      delighted to offer a Loyalty Reward Discount as a token of our
      appreciation. This exclusive discount saves you up to an
      additional 10% on your next vehicle purchase. It's our way of
      saying thank you for your continued trust and loyalty. Whether
      you've shopped with us before or you're a long-time patron, this
      discount is designed to make your next purchase even more
      rewarding. Explore our extensive selection of vehicles and enjoy
      even greater savings on top of our already competitive prices. Let
      us help you find your next dream car and reward you for your
      loyalty.`,
    image:
      "https://static.vecteezy.com/system/resources/previews/029/922/954/original/loyalty-program-in-flat-style-discount-coupon-3d-coupon-reward-discount-loyalty-program-promotion-vector.jpg",
  },
  {
    id: 6,
    title: "Online Exclusive Offer",
    description:
      "Shop online and unlock exclusive deals not available in-store. Save an additional 5% on your purchase with code ONLINE5.",
    fullDescription: `Take advantage of the convenience of shopping online with our
      Online Exclusive Offer. Shop our digital showroom from the comfort
      of your home and unlock exclusive deals not available in-store.
      Save an additional 5% on your purchase just by using the code
      ONLINE5 at checkout. This offer includes our full lineup of
      vehicles, from eco-friendly hybrids to luxury sports cars,
      ensuring you find the perfect match for your driving preferences
      and lifestyle. Plus, enjoy personalized virtual assistance from
      our expert sales team, who are ready to guide you through the
      online shopping process, from selection to financing. Don't miss
      this chance to combine the ease of online shopping with unbeatable
      savings!`,
    image:
      "https://static.vecteezy.com/system/resources/previews/002/240/287/non_2x/online-exclusive-sale-tag-poster-design-template-discount-isolated-sticker-vector.jpg",
  },
];
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
const gallery = {
  images: [
    {
      id: 1,
      url: "../../public/Gallery/image1.gif",
      title: "Image One Title",
      description: "Description of Image One.",
    },
    {
      id: 2,
      url: "../../public/Gallery/image2.gif",
      title: "Image Two Title",
      description: "Description of Image Two.",
    },
    {
      id: 3,
      url: "../../public/Gallery/image3.gif",
      title: "Image Three Title",
      description: "Description of Image Three.",
    },
    {
      id: 4,
      url: "../../public/Gallery/image4.gif",
      title: "Image Four Title",
      description: "Description of Image Four.",
    },
    {
      id: 5,
      url: "../../public/Gallery/image5.gif",
      title: "Image Five Title",
      description: "Description of Image Five.",
    },
    {
      id: 6,
      url: "../../public/Gallery/image6.gif",
      title: "Image Six Title",
      description: "Description of Image Six.",
    },
    {
      id: 7,
      url: "../../public/Gallery/image7.gif",
      title: "Image Seven Title",
      description: "Description of Image Seven.",
    },
    {
      id: 8,
      url: "../../public/Gallery/image8.gif",
      title: "Image Eight Title",
      description: "Description of Image Eight.",
    },
    {
      id: 9,
      url: "../../public/Gallery/image9.gif",
      title: "Image Nine Title",
      description: "Description of Image Nine.",
    },
    {
      id: 10,
      url: "../../public/Gallery/image10.gif",
      title: "Image Ten Title",
      description: "Description of Image Ten.",
    },
  ],
};
const fixedHeaderStyle = {
  position: "fixed",
  top: 0,
  width: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  zIndex: 50,
  backdropFilter: "blur(10px)",
  animation: "slideDown 300ms ease-in-out",
};
const unfixedHeaderStyle = {
  position: "fixed",
  top: 0,
  width: "100%",
  backgroundColor: "transparent",
  zIndex: 9999,
};

export function useAppContext() {
  return useContext(AppContext);
}

export const AppProvider = ({ children }) => {
  const [isHeaderFixed, setIsHeaderFixed] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  const [isHomePage, setIsHomePage] = useState();

  const value = useMemo(
    () => ({
      isHeaderFixed,
      setIsHeaderFixed,
      specialOffers,
      services,
      reasons,
      locations,
      faqs,
      fixedHeaderStyle,
      unfixedHeaderStyle,
      testimonials,
      gallery,
      isMobile,
      setIsMobile,
      isHomePage,
      setIsHomePage,
    }),
    [isHeaderFixed, isMobile, isHomePage]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
