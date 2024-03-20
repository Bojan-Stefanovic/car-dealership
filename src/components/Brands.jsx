import { useGetCarLogo } from "../hooks/useGetCarLogo";

function Brands() {
  const logos = useGetCarLogo();
  return (
    <section className="py-8 container w-full bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Featured Brands
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-14 lg:grid-col-28 gap-x-1 gap-y-6">
          {logos.map((logo) => (
            <div key={logo} className="flex justify-center">
              <img
                src={logo}
                alt={logo}
                className="h-4 md:h-6 lg:h-8 xl:h-12 w-auto object-fill"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Brands;
