

import React, { useEffect, useRef, useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// import PhoneSec from "./PhoneSec";
import Phone from "../asserts/phone.jpg";

const HomePage = () => {
  const circleRef1 = useRef(null);
  const circleRef2 = useRef(null);
  const [isTextFixed, setIsTextFixed] = useState(false);
  const [isPhoneScrolled, setIsPhoneScrolled] = useState(false);
  const textRef = useRef(null);
  const phoneRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Adjust scaling based on scroll position
      const scaleValue = Math.max(1 - scrollPosition / 1000, 0.5);

      if (circleRef1.current && circleRef2.current) {
        circleRef1.current.style.transform = `translate(-50%, -50%) scale(${scaleValue})`;
        circleRef2.current.style.transform = `translate(-50%, -50%) scale(${scaleValue})`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const textRect = textRef.current.getBoundingClientRect();
  //     const phoneRect = phoneRef.current.getBoundingClientRect();

  //     // Check if the text is in the center of the viewport
  //     if (textRect.top <= window.innerHeight / 2 && textRect.bottom > window.innerHeight / 2) {
  //       setIsTextFixed(true);
  //     } else {
  //       setIsTextFixed(false);
  //     }

  //     // Check if the phone has scrolled past the text
  //     if (phoneRect.top <= textRect.bottom + phoneRect.height) {
  //       setIsPhoneScrolled(true);
  //     } else {
  //       setIsPhoneScrolled(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <div className="relative bg-black text-white overflow-y-auto">
      {/* First Section */}
      <div className="relative h-screen flex flex-col justify-center items-center text-center">
        {/* Animated Circles */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div
            ref={circleRef1}
            className="absolute w-[1000px] h-[1000px] border-2 border-purple-500 rounded-full animate-spin-reverse"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          ></div>
          <div
            ref={circleRef2}
            className="absolute w-[1400px] h-[1400px] border-2 border-purple-500 rounded-full animate-spin-reverse"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          ></div>
        </div>

        {/* Content */}
        <div className="flex flex-col items-center justify-center h-auto z-10 text-center">
          <div className="flex rounded-xl bg-[#181818] items-center gap-2">
            <div className="rounded-full text-purple-600 font-semibold bg-[#383e47] px-2">
              New
            </div>
            <p className="text-white font-semibold">Launch Your Offer</p>
            <div className="text-purple-600 text-center text-lg">
              <MdOutlineKeyboardArrowRight />
            </div>
          </div>
          <p className="text-[88px] font-bold leading-none">
            Community Driven 
            <br/>
            <span>Digital Marketing!</span>
          </p>
          <p className="mt-4 text-lg md:text-xl max-w-[620px] text-gray-300 text-center">
            At Glitchy, we strive to help YOU harness the true power of Digital
            Marketing for FREE.
          </p>
          <div className="mt-8 flex justify-center gap-4 mb-20">
            <button className="px-8 p-3 bg-white text-black rounded-md hover:text-lg hover:text-black hover:bg-white min-w-[180px]">
              Join Today
            </button>

            <button
              className="px-14 p-3 bg-black text-white rounded-md border-2 hover:border-white min-w-[180px]"
              style={{
                borderImageSource:
                  "linear-gradient(to right, #fff, #dcacff 30%, #ad68f3 60%, #2b2883 80%, #2b2883)",
                borderImageSlice: 3,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderImageSource = "none";
                e.currentTarget.style.borderColor = "white";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderImageSource =
                  "linear-gradient(to right, #fff, #dcacff 30%, #ad68f3 60%, #2b2883 80%, #2b2883)";
              }}
            >
              Login
            </button>
          </div>

         
          </div>
          <div className="relative mt-32 w-full">
            <div className="absolute inset-0 flex justify-center items-center ">
              <p
                style={{
                  WebkitTextFillColor: "transparent",
                  backgroundImage:
                    "linear-gradient(#fff, #dcacff 30%, #ad68f3 60%, #2b2883 80%, #0c0c0c)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  fontSize: "14vw",
                  fontWeight: "800",
                }}
              >
                Meet Glitchy
              </p>
            </div>
        </div>
      </div>

      {/* Second Section */}

      {/* Phone Section */}
     
       <div className="h-screen flex items-center justify-center bg-black text-white overflow-hidden">
        <div
          // ref={phoneRef}
          className="absolute w-full flex justify-center"
          style={{ transition: "transform 0.3s ease" }}
        >
          <img src={Phone} alt="Phone" className="w-1/5 h-[700px]" />
        </div>
      </div> 

       {/* Phone Section */}
     
    </div>
  );
};

export default HomePage;
