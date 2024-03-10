/* eslint-disable react/prop-types */
function PagiButton({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>;
}

export default PagiButton;
