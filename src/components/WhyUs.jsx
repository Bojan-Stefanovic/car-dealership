import Icons from "../utils/Icons";
function WhyUs() {
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
            className="px-6 py-3 bg-blue-500 text-white font-bold rounded-full hover:bg-blue-600 transition duration-150">
            Learn Why We Are the Best
          </a>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
