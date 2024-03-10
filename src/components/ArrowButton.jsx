/* eslint-disable react/prop-types */
function ArrowButton({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>;
}

export default ArrowButton;
