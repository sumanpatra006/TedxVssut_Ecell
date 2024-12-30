"use client";

import React, { useState, useEffect, useRef } from 'react'
import * as THREE from 'three';
import FOG from 'vanta/dist/vanta.fog.min.js'

const useVanta = (effect) => {
  const [vantaEffect, setVantaEffect] = useState(null)

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(effect())
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
};

export const HeroSection = () => {
  const backRef = useRef(null);

  const fogEffect = useVanta(() => FOG({
    el: backRef.current,
    THREE: THREE,
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    highlightColor: 0xff0000,
    midtoneColor: 0x0,
    lowlightColor: 0x0,
    baseColor: 0x0,
    blurFactor: 0.81,
    speed: 0.00,
    zoom: 0.60
  }));

  return <div className='bg-black sm:h-[80vh] md:h-screen flex flex-col items-center justify-center space-y-16 font-helvetica'>
    <div ref={backRef} className='absolute sm:h-[80vh] md:h-screen w-screen opacity-50'></div>

    <h1 className="text-white text-center font-bold sm:text-5xl md:text-7xl z-10">
      Ideas Worth Spreading
    </h1>

    <div className="flex flex-col items-center w-screen z-10 space-y-2">
      <p className="text-white font-medium sm:text-lg md:text-2xl">
        Empowering Ideas That Shape the Future
      </p>
      <p className="text-[#6d6d6d] text-xl sm:w-[80%] md:w-[35%] text-center">
        Join us for a day of inspiring talks, innovative ideas, and transformative conversations.
      </p>
    </div>

    <div className="flex sm:flex-col md:flex-row items-center sm:space-y-2 md:space-x-10 z-10">
      <a className="bg-white text-black px-7 py-3 rounded font-medium">
        Register Now
      </a>
      <a className="text-white px-7 py-3 rounded-sm font-bold">
        Learn More
      </a>
    </div>
  </div>;
};
