/* eslint-disable react/prop-types */
function LandingImg({ className }) {
  const imageUrl =
    // "https://www.wsupercars.com/wallpapers-super-ultrawide/Alfa-Romeo/2009-Alfa-Romeo-8C-Competizione-002-1440sw.jpg";
    "https://www.wsupercars.com/wallpapers-regular/Volkswagen/2025-Volkswagen-ID.7-GTX-Tourer-008-1080.jpg";
  return (
    <div className="flex items-center justify-center">
      <link rel="preload" href={imageUrl} as="image" />
      <img className={className} src={imageUrl} alt="alfa romeo" />
    </div>
  );
}

export default LandingImg;
