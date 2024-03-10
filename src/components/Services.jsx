import { useEffect, useState } from "react";
import Icons from "../utils/Icons";

function Services() {
  const [dynamicStyle, setDynamicStyle] = useState({});
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

  useEffect(() => {
    const applyDynamicStyle = () => {
      if (window.innerWidth > 1024) {
        setDynamicStyle({
          transform: "scale(0.80)",
          transformOrigin: "top center",
          marginBottom: "-10%",
        });
      } else {
        setDynamicStyle({});
      }
    };

    applyDynamicStyle();

    window.addEventListener("resize", applyDynamicStyle);

    return () => window.removeEventListener("resize", applyDynamicStyle);
  }, []);

  return (
    <section className="services-section py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Services
        </h2>
        <div
          style={dynamicStyle}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white flex flex-col gap-4 shadow-noOffset shadow-black/25 rounded-lg overflow-hidden p-6">
              <Icons
                name={service.icon}
                size="5rem"
                fillColor="#81c292e7"
                className="p-2 m-2 self-center"
              />
              <h3 className="text-xl text-center  text-[#264653] font-bold h-16">
                {service.title}
              </h3>
              <p className="text-lg">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
