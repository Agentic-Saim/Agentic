"use client";

import React, { useRef } from "react";
import { MotionValue, useMotionValueEvent } from "framer-motion";

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
}

export default function Overlay({ scrollYProgress }: OverlayProps) {
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Clamp function
    const clamp = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max);

    // Section 1: 0% to 10%
    if (section1Ref.current) {
      let opacity = 0;
      let y = 0;
      if (latest <= 0.1) {
        const progress = latest / 0.1;
        opacity = 1 - progress;
        y = -20 * progress;
      } else {
        opacity = 0;
      }
      section1Ref.current.style.opacity = clamp(opacity, 0, 1).toString();
      section1Ref.current.style.transform = `translateY(calc(-50% + ${y}vh))`;
    }

    // Section 2: 15% to 45%
    if (section2Ref.current) {
      let opacity = 0;
      let y = 15;
      if (latest > 0.15 && latest <= 0.45) {
        if (latest < 0.25) {
          // Fade in and slide up to 0
          const progress = (latest - 0.15) / 0.1;
          opacity = progress;
          y = 15 - (progress * 15);
        } else if (latest <= 0.35) {
          // Pinned
          opacity = 1;
          y = 0;
        } else {
          // Fade out and slide up to -20
          const progress = (latest - 0.35) / 0.1;
          opacity = 1 - progress;
          y = -20 * progress;
        }
      }
      section2Ref.current.style.opacity = clamp(opacity, 0, 1).toString();
      section2Ref.current.style.transform = `translateY(calc(-50% + ${y}vh))`;
    }

    // Section 3: 50% to 85%
    if (section3Ref.current) {
      let opacity = 0;
      let y = 15;
      if (latest > 0.50 && latest <= 0.85) {
        if (latest < 0.60) {
          // Fade in and slide up to 0
          const progress = (latest - 0.50) / 0.1;
          opacity = progress;
          y = 15 - (progress * 15);
        } else if (latest <= 0.70) {
          // Pinned
          opacity = 1;
          y = 0;
        } else {
          // Fade out and slide up to -20
          const progress = (latest - 0.70) / 0.15;
          opacity = 1 - progress;
          y = -20 * progress;
        }
      }
      section3Ref.current.style.opacity = clamp(opacity, 0, 1).toString();
      section3Ref.current.style.transform = `translateY(calc(-50% + ${y}vh))`;
    }
  });

  return (
    <div className="absolute inset-0 z-10 pointer-events-none text-white overflow-hidden">
      <div 
        ref={section1Ref} 
        className="absolute top-1/2 left-0 w-full px-6 text-center"
        style={{ opacity: 1, transform: "translateY(-50%)" }}
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Muhammad Taha.</h1>
        <p className="text-xl md:text-3xl font-light text-neutral-400">Agentic AI & Backend Engineer.</p>
      </div>

      <div 
        ref={section2Ref} 
        className="absolute top-1/2 left-0 w-full px-8 md:px-[15%] lg:px-[20%] flex flex-col items-start"
        style={{ opacity: 0, transform: "translateY(calc(-50% + 15vh))" }}
      >
        <div className="max-w-md w-full">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
            I build digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500">experiences.</span>
          </h2>
        </div>
      </div>

      <div 
        ref={section3Ref} 
        className="absolute top-1/2 left-0 w-full px-8 md:px-[15%] lg:px-[20%] flex flex-col items-end text-right"
        style={{ opacity: 0, transform: "translateY(calc(-50% + 15vh))" }}
      >
        <div className="max-w-md w-full">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
            Bridging <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-500 to-white">design</span> <br/>
            and engineering.
          </h2>
        </div>
      </div>
    </div>
  );
}
