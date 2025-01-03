import { useEffect, useRef } from "react";
import Phone from "../asserts/phone.jpg";


const PhoneSec = () => {
  const phoneRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      if (phoneRef.current) {
        // Adjust the translateY value to ensure a smoother scroll effect
        const translateY = scrollPosition * 0.3; // Adjust the multiplier for desired effect
        phoneRef.current.style.transform = `translateY(${translateY}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <section className="relative w-full mt-32 overflow-hidden">
          <div className="absolute inset-0 flex justify-center items-center">
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

          <div
            ref={phoneRef}
            className="absolute w-full flex justify-center"
            style={{ transition: "transform 0.3s ease" }}
          >
            <img src={Phone} alt="Phone" className="w-1/3" />
          </div>
        </section>
    </>
  );
};
export default PhoneSec;
