import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { TiLocationArrow } from "react-icons/ti";
import { useRef, useState } from "react";

import Button from "./Button";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [loading, setLoading] = useState(true);
  const [isHacked, setIsHacked] = useState(false);
  const videoRef = useRef(null);

  const handleVideoLoad = () => {
    setLoading(false);
  };

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
      borderRadius: "0% 0% 40% 10%",
    });
    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  return (
    <div className="relative h-dvh bg-black overflow-x-hidden">
      {loading && (
        <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
          {/* https://uiverse.io/G4b413l/tidy-walrus-92 */}
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>
      )}

      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75 "
      >
        <video
          ref={videoRef}
          src="videos/hero-1.mp4"
          autoPlay
          loop
          muted
          className="absolute left-0 top-0 size-full object-cover object-center"
          onLoadedData={handleVideoLoad}
        />

        <div className="absolute left-0 top-0 z-40 flex h-full w-full flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="special-font hero-heading text-blue-100 mb-4 drop-shadow-[0_0_40px_rgba(0,0,0,1)]" style={{textShadow: '0 0 40px rgba(0,0,0,1), 0 0 80px rgba(0,0,0,0.8)'}}>
              CYS<b>C</b>OM
            </h1>

            <p className="mb-5 max-w-64 font-robert-regular text-blue-100 hero-text">
              Think Before You Click <br /> CyberSecurity Student Committee
            </p>

            <div className="flex justify-center">
              <Button
                id="watch-trailer"
                title={isHacked ? "You are hacked!" : "Click here"}
                leftIcon={isHacked ? null : <TiLocationArrow />}
                containerClass={`${isHacked ? 'bg-red-600 text-white' : 'bg-yellow-300 text-black'} flex-center gap-1`}
                onClick={() => setIsHacked(true)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
