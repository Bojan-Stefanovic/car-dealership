import { useAppContext } from "../context/AppContext";
import Icons from "../utils/Icons";
function WhyUs() {
  const { reasons } = useAppContext();
  return (
    <section className="py-12 px-10 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.id}
              className="flex flex-col bg-white shadow-noOffset shadow-gray-600/30 rounded-lg overflow-hidden p-6">
              <div className="flex justify-start items-center mb-2">
                <Icons
                  name={reason.icon}
                  size="3rem"
                  fillColor="#81c292e7"
                  className="p-2 ml-2 self-center"
                />
                <h3 className="text-[#13232a] pr-2 text-xl font-bold">
                  {reason.title}
                </h3>
              </div>
              <p className="text-lg flex-grow">{reason.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="/about"
            className="px-6 py-3 bg-[#6faa63] rounded hover:bg-[#66b357]/70 text-white font-bold transition duration-200">
            Learn Why We Are the Best
          </a>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
