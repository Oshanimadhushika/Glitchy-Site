import React, { useEffect, useRef } from 'react';
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
//     <div className="relative h-screen flex flex-col justify-center items-center text-center bg-black text-white overflow-hidden">
//     {/* Animated Circles */}
//     <div className="absolute inset-0 flex justify-center items-center">
//       <div
//         ref={circleRef1}
//         className="absolute w-[500px] h-[500px] border border-purple-500 rounded-full animate-spin"
//         style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
//       ></div>
//       <div
//         ref={circleRef2}
//         className="absolute w-[600px] h-[600px] border border-purple-500 rounded-full animate-spin-reverse"
//         style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
//       ></div>
//     </div>

//     {/* Content */}
//     <div className="z-10">
//       <h1 className="text-4xl md:text-6xl font-bold">
//         Community Driven Digital Marketing!
//       </h1>
//       <p className="mt-4 text-lg md:text-xl">
//         At Glitchy, we strive to help YOU harness the true power of Digital
//         Marketing for FREE.
//       </p>
//       <div className="mt-8 flex justify-center gap-4">
//         <Button className="px-6 py-3 bg-purple-500 text-white rounded-md hover:bg-purple-600">
//           Join Today
//         </Button>
//         <Button className="px-6 py-3 bg-white text-black rounded-md hover:bg-gray-200">
//           Login
//         </Button>
//       </div>
//     </div>
//   </div>

<div>
    <h1>hello</h1>
</div>
  );
};

export default HomePage;
