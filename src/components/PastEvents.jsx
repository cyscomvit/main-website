import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const EventCard = ({ name, date, description, image }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const cardRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!cardRef.current) return;

    const { left, top, width, height } =
      cardRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 8;
    const tiltY = (relativeX - 0.5) * -8;

    const newTransform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={cardRef}
      className="group relative overflow-hidden rounded-lg border border-white/10 bg-gradient-to-br from-blue-950/20 to-black p-6 transition-all duration-500 hover:border-blue-500/30"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      data-event-card
      style={{ 
        transform: transformStyle,
        transitionProperty: 'transform, border-color',
        transitionDuration: '0.3s',
        transitionTimingFunction: 'ease-out',
      }}
    >
      {/* Animated gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-600/0 opacity-0 transition-opacity duration-500 group-hover:from-blue-500/5 group-hover:to-purple-600/5 group-hover:opacity-100" />
      
      <div className="relative z-10">
        {/* Event Image */}
        <div className="mb-4 flex h-32 items-center justify-center overflow-hidden rounded-md bg-black/40 p-4">
          <img
            src={image}
            alt={name}
            className="h-full w-auto object-contain opacity-80 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100"
          />
        </div>

        {/* Event Details */}
        <div className="space-y-3">
          <h3 className="special-font text-xl font-black uppercase text-blue-100 transition-colors duration-300 group-hover:text-blue-50 md:text-2xl">
            {name}
          </h3>
          
          <p className="font-general text-xs uppercase tracking-wider text-blue-300/70">
            {date}
          </p>
          
          <p className="font-circular-web text-sm leading-relaxed text-blue-50/70 transition-colors duration-300 group-hover:text-blue-50/90">
            {description}
          </p>
        </div>
      </div>

      {/* Corner accent */}
      <div className="absolute -bottom-10 -right-10 size-32 rounded-full bg-blue-500/5 blur-2xl transition-all duration-500 group-hover:bg-blue-500/10" />
    </div>
  );
};

const PastEvents = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray('[data-event-card]');
    
    cards.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top bottom-=100",
          end: "top center",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 60,
        rotateX: -15,
        duration: 0.8,
        ease: "power3.out",
        delay: index * 0.1,
      });
    });
  }, { scope: sectionRef });

  const events = [
    {
      name: "Cyber Defender",
      date: "April 19-20, 2022",
      description: "A 2-day technical and fun event for cyber enthusiasts, including a workshop and CTF.",
      image: "/img/logo.png"
    },
    {
      name: "HackOverflow",
      date: "September 27 - October 2, 2022",
      description: "Flagship hackathon with an online ideathon and 24-hour offline event focused on NGO technological problems, with a ₹25,000 prize pool.",
      image: "/img/logo.png"
    },
    {
      name: "ICRTAC-2018",
      date: "2018",
      description: "International Conference on Recent Trends in Advanced Computing.",
      image: "/img/logo.png"
    },
    {
      name: "ICRTAC-2019",
      date: "2019",
      description: "International Conference on Recent Trends in Advanced Computing.",
      image: "/img/logo.png"
    },
    {
      name: "Outreach Programs",
      date: "Various dates",
      description: "Student outreach programs to spread cybersecurity awareness.",
      image: "/img/logo.png"
    },
    {
      name: "OPENGOV",
      date: "Undated",
      description: "Event focused on open government and cybersecurity.",
      image: "/img/logo.png"
    },
    {
      name: "2020HACK",
      date: "2020",
      description: "Hackathon event.",
      image: "/img/logo.png"
    },
    {
      name: "Tetraflip",
      date: "Undated",
      description: "Cybersecurity-related event.",
      image: "/img/logo.png"
    },
    {
      name: "TOVC 1.0",
      date: "Undated",
      description: "Event possibly related to cybersecurity challenges.",
      image: "/img/logo.png"
    },
    {
      name: "Waspcon",
      date: "Undated",
      description: "Workshop or conference on web application security.",
      image: "/img/logo.png"
    },
    {
      name: "Informational Session on Malware",
      date: "Undated",
      description: "Session providing information on malware threats and prevention.",
      image: "/img/logo.png"
    },
    {
      name: "CyberConverge 2025",
      date: "2025",
      description: "CTF and hacking event with learning and collaboration opportunities.",
      image: "/img/logo.png"
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="past-events"
      className="min-h-screen bg-black pb-32 pt-20"
    >
        
      <div className="container mx-auto px-5 md:px-10">
        
        {/* Section Header */}
        
        <div className="mb-16 flex flex-col items-center gap-5 text-center">
          <p className="font-general text-sm uppercase tracking-wider text-blue-300 md:text-[10px]">
            Our Journey
          </p>

          <AnimatedTitle
            title="P<b>a</b>st Ev<b>e</b>nts <br /> Th<b>r</b>ough the Ye<b>a</b>rs"
            containerClass="mt-5 !text-blue-100 text-center"
          />

          <p className="mt-5 max-w-2xl font-circular-web text-lg text-blue-50/70">
            Explore the legacy of CYSCOM through our flagship events, workshops, and conferences 
            that have shaped the cybersecurity community at VIT Chennai.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {events.map((event, index) => (
            <EventCard
              key={index}
              name={event.name}
              date={event.date}
              description={event.description}
              image={event.image}
              index={index}
            />
          ))}
        </div>

        {/* Bottom Text */}
        <div className="mt-20 text-center">
          <p className="font-circular-web text-base text-blue-50/50">
            Many more events and memories to come...
          </p>
        </div>
      </div>
    </section>
  );
};

export default PastEvents;
