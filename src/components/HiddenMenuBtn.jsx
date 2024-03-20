/* eslint-disable react/prop-types */

function HiddenMenuBtn({ onClick, children }) {
  return (
    <button onClick={onClick} className="text-white focus:outline-none">
      {children}
    </button>
  );
}

export default HiddenMenuBtn;
