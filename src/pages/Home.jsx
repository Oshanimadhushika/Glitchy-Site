import React, { useEffect, useRef } from "react";
import { Button } from "antd";

const HomePage = () => {
  const circleRef1 = useRef(null);
  const circleRef2 = useRef(null);

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

  return (
    <div className="relative h-screen flex flex-col justify-center items-center text-center bg-black text-white overflow-hidden">
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
      <div className="flex flex-col items-center justify-center min-h-screen z-10 text-center ">
        <p className="text-[88px] font-bold leading-none">
          Community Driven <p className="">Digital Marketing!</p>
        </p>
        <p className="mt-4 text-lg md:text-xl max-w-[620px] text-gray-300 text-center">
          At Glitchy, we strive to help YOU harness the true power of Digital
          Marketing for FREE.
        </p>
        <div className="mt-8 flex justify-center gap-4 mb-20">
          <button
            type="default"
            size="large"
            className="px-6 p-3 bg-white  text-black rounded-md hover:text-lg hover:text-black hover:bg-white"
          >
            Join Today
          </button>
         
          <button
           
            className="px-10 p-3 bg-black text-white rounded-md border-2 hover:border-white "
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

      <div className="absolute inset-0 flex justify-center items-end ">
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

      <br />
      <br />
      <br />
    </div>
  );
};

export default HomePage;
