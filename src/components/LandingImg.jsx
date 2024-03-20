/* eslint-disable react/prop-types */
function LandingImg({ className }) {
  const imageUrl =
    "https://www.wsupercars.com/wallpapers-super-ultrawide/Alfa-Romeo/2009-Alfa-Romeo-8C-Competizione-002-1440sw.jpg";

  return (
    <div className="flex items-center justify-center">
      <link rel="preload" href={imageUrl} as="image" />
      <img className={className} src={imageUrl} alt="chevrolet-corvette" />
    </div>
  );
}

export default LandingImg;
