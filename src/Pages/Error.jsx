import Footer from "../components/Footer";

function Error() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="bg-violet-400 h-full">404 Not Found</div>
      <Footer />
    </div>
  );
}

export default Error;
