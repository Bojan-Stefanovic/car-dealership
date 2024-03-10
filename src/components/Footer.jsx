function Footer() {
  return (
    <footer className="bg-gradient-to-l w-full from-[#7ef29d] to-[#264653] text-white p-6">
      <div className="container mx-auto text-center">
        <p className="font-normal tracking-wider">
          &copy; {new Date().getFullYear()} The Wheel Deal. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
