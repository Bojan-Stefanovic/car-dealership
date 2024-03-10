/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useMemo, useState } from "react";
import ArrowButton from "./ArrowButton";
import Icons from "../utils/Icons";
import ProgressBar from "../utils/ProgressBar";

function Carousel({ children }) {
  const [page, setPage] = useState(0);
  const [progress, setProgress] = useState(0);
  const [transX, setTransX] = useState(getTransXValue(window.innerWidth));

  const childrenArray = useMemo(() => {
    return [...React.Children.toArray(children)[0].props.children];
  }, [children]);

  const groups = useMemo(
    () => [
      [...childrenArray.slice(0, 3)],
      [...childrenArray.slice(3, 6)],
      [...childrenArray.slice(6, 9)],
    ],
    [childrenArray]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      handleTranslateRight();
      setProgress(0); // Reset progress on interval tick
    }, 5000);

    // Update progress every 50ms to simulate a loading bar for 5 seconds
    const progressInterval = setInterval(() => {
      setProgress((prevProgress) => {
        const increment = 100 / (5000 / 50); // Calculate increment to reach 100% in 5s
        return prevProgress + increment > 100 ? 100 : prevProgress + increment;
      });
    }, 50);

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, []);

  const handleTranslateRight = () => {
    setPage((prevPage) => {
      switch (prevPage) {
        case 0:
          return prevPage + 1;
        case 1:
          return prevPage + 1;
        case 2:
          return 0;
        default:
          return prevPage;
      }
    });
  };

  const handleTranslateLeft = () => {
    setPage((prevPage) => {
      switch (prevPage) {
        case 0:
          return 2;
        case 1:
          return prevPage - 1;
        case 2:
          return prevPage - 1;
        default:
          return prevPage;
      }
    });
  };
  useEffect(() => {
    const handleResize = () => {
      setTransX(getTransXValue(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  function getTransXValue(width) {
    if (width >= 1536) {
      // 2xl
      return 1834;
    } else if (width >= 1280) {
      // xl
      return 1834; // Assuming you want the same value for xl, adjust if necessary
    } else if (width >= 1024) {
      // lg
      return 1780;
    } else if (width >= 768) {
      // md
      return 1250;
    } else if (width >= 640) {
      // sm
      return 1180;
    } else {
      width < 640;
      // smaller than sm
      return 1120;
    }
  }

  return (
    <>
      <ProgressBar progress={progress} />
      <div className="overflow-hidden">
        <div
          className="transition-transform lg:flex flex justify-center space-x-[50rem] ease-in-out duration-500"
          style={{
            transform: `translateX(${
              page === 0 ? transX : page === 2 ? -transX : "0"
            }px)`,
          }}>
          {/* 2xl: 1834 lg: 1780 md: 1250 sm: 1180 rest: 1120*/}
          <div className="lg:flex-row justify-center flex flex-col items-center xl:space-x-9 lg:space-x-2 2xl:space-x-9">
            {groups[0]}
          </div>
          <div className="lg:flex-row justify-center flex flex-col items-center xl:space-x-9 lg:space-x-2 2xl:space-x-9">
            {groups[1]}
          </div>
          <div className="lg:flex-row justify-center flex flex-col items-center xl:space-x-9 lg:space-x-2 2xl:space-x-9">
            {groups[2]}
          </div>
        </div>
        <div>
          <ArrowButton onClick={handleTranslateLeft}>
            <Icons
              name="ArrowLeft"
              size="3rem"
              className="top-[50%] left-[-1rem] hover:bg-white/70 transition-all ease-in-out delay-75 bg-white/50  absolute rounded-full shadow-noOffset bg-white"
            />
          </ArrowButton>
          <ArrowButton onClick={handleTranslateRight}>
            <Icons
              name="ArrowRight"
              size="3rem"
              className="right-[-1rem] top-[50%] hover:bg-white/70 transition-all ease-in-out delay-75 bg-white/50  absolute rounded-full  shadow-noOffset bg-white"
            />
          </ArrowButton>
        </div>
      </div>
    </>
  );
}

export default Carousel;
