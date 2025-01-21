"use client";

import React, { useEffect, useRef } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Timeline = ({ timelineData }) => {
  const timelineRef = useRef(null);

  useEffect(() => {
    const timelineItems = timelineRef.current.querySelectorAll(".timeline-item");

    timelineItems.forEach((item, index) => {
      gsap.fromTo(
        item,
        {
          opacity: 0,
          x: index % 2 === 0 ? -100 : 100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            end: "top 30%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    gsap.to(".vertical-line", {
      backgroundColor: "#ff4d4d",
      duration: 1,
      scrollTrigger: {
        trigger: timelineRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="relative flex flex-col items-center py-3 p-6" ref={timelineRef}>
      {/* Vertical Line */}
      <div
        className="absolute vertical-line w-1 rounded-full bg-gray-300 h-full 
        lg:left-1/2 md:left-1/2 sm:left-10 transform -translate-x-1/2"
      ></div>

      {timelineData.map((item, index) => (
        <div
          key={item.id}
          className={`timeline-item w-full flex items-center justify-between gap-6
            ${index % 2 === 0 ? "lg:flex-row md:flex-row sm:flex-col" : "lg:flex-row-reverse md:flex-row sm:flex-col"} 
            sm:justify-start sm:items-start`}
        >
          {/* Timeline Card */}
          <div
            className={`relative lg:w-1/2 md:w-[80%] sm:w-full 
              ${index % 2 === 0 ? "lg:pr-10 md:pr-10 sm:pl-12" : "lg:pl-10 md:pl-10 sm:pl-12"}`}
          >
            <div
              className={`w-full text-sm font-medium text-white mb-4 
                ${index % 2 === 0 ? "lg:text-right md:text-right sm:text-left sm:pl-6" : "lg:text-left md:text-left sm:text-left sm:pl-6"}`}
            >
              {item.date}
            </div>
            <div className="relative bg-white shadow-lg rounded-lg p-6 border">
              {/* Connector Dot - Fixed Left-Side Icon Position */}
              <div
                className={`absolute top-1/2 w-10 h-10 bg-red-500 rounded-full border-4 border-white 
                  ${index % 2 === 0 ? "lg:-right-5 md:-right-5 sm:-right-5" : "lg:-left-5 md:-left-5 sm:-left-5"} 
                  transform -translate-y-1/2 flex items-center justify-center`}
              >
                <FaRegCalendarAlt className="text-white" />
              </div>

              <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
              <p className="text-sm font-medium text-gray-500">{item.location}</p>
              <p className="text-gray-700 mt-2">{item.description}</p>
              <button
                onClick={() => window.open(item.buttonLink, "_blank")}
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-600 transition"
              >
                {item.buttonText}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
