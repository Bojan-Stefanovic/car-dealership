/* eslint-disable react/prop-types */
const ProgressBar = ({ progress }) => {
  return (
    <div className="max-w-full  flex justify-center bg-white rounded-md my-5">
      <div
        className={`bg-[#7ef29d]/80 h-[2px] rounded-md transition-all duration-[75ms] ease-in-out`}
        style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default ProgressBar;
