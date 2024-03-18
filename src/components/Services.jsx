import { useEffect, useState } from "react";
import Icons from "../utils/Icons";
import { useAppContext } from "../context/AppContext";

function Services() {
  const [dynamicStyle, setDynamicStyle] = useState({});
  const { services } = useAppContext();
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
