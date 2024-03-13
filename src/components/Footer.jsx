import Icons from "../utils/Icons";

function Footer() {
  return (
    <footer className="bg-gradient-to-l w-full from-[#7ef29d] to-[#264653] text-white p-6 h-full">
      <div className="container my-20 flex mx-auto justify-between  text-center">
        <ul>
          <h3>Contact us</h3>
          <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li>
        </ul>
        <ul>
          <h3>Account</h3>
          <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li>
        </ul>
        <ul>
          <h3>Company</h3>
          <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li>
        </ul>
        <ul>
          <h3>Resources</h3>
          <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li>
        </ul>
        <div className="flex justify-between items-center flex-col">
          <div className="relative flex w-64 items-center">
            <h1 className="text-2xl bg-gradient-to-l from-30%  from-[#C10000] to-[#856b26] inline-block text-transparent bg-clip-text italic ml-8 font-extrabold absolute tracking-widest z-10 items-center left-[1px] bottom-[-25px]">
              The Wheel Deal
            </h1>
            <Icons
              fillColor="#C10000"
              name="Title"
              size="3.5rem"
              className="absolute left-[-0.5rem] top-[-2.05rem]"
            />
          </div>
          <p className="font-normal w-[20rem] tracking-wider">
            &copy; {new Date().getFullYear()} The Wheel Deal. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
