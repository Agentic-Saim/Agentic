"use client";

import React, { useEffect, useRef, useCallback, useState } from "react";
import { useScroll, useMotionValueEvent, motion } from "framer-motion";
import Overlay from "./Overlay";

const FRAME_COUNT = 200;
const MOBILE_HERO_FRAME = "/sequence/ezgif-frame-100.png";

const currentFrame = (index: number) =>
  `/sequence/ezgif-frame-${String(index + 1).padStart(3, "0")}.png`;

// Hook to detect mobile (matches < 768px)
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 768px)");
    setIsMobile(mql.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  return isMobile;
}

// ─── MOBILE: Static hero image with parallax ───────────────────────
function MobileHero() {
  return (
    <div className="relative w-full bg-[#0a0a0a]" style={{ minHeight: "100dvh" }}>
      {/* Full-screen hero image */}
      <div className="relative w-full overflow-hidden" style={{ height: "100dvh" }}>
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <img
            src={MOBILE_HERO_FRAME}
            alt="Hero"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50 pointer-events-none" />

        {/* Hero text */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white px-6 text-center">
          <motion.h1
            className="text-5xl font-bold tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Agentic Saim.
          </motion.h1>
          <motion.p
            className="text-xl font-light text-neutral-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Agentic AI &amp; Backend Engineer.
          </motion.p>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <span className="text-neutral-500 text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent"
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </div>
  );
}

// ─── DESKTOP: Full scroll canvas animation ─────────────────────────
function DesktopCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fixedLayerRef = useRef<HTMLDivElement>(null);
  const cacheRef = useRef<Map<number, HTMLImageElement>>(new Map());
  const lastFrameRef = useRef(0);
  const rafRef = useRef<number>(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const renderImage = useCallback(
    (img: HTMLImageElement, canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
      const vw = window.visualViewport?.width ?? window.innerWidth;
      const vh = window.visualViewport?.height ?? window.innerHeight;

      if (canvas.width !== vw || canvas.height !== vh) {
        canvas.width = vw;
        canvas.height = vh;
      }

      const canvasRatio = canvas.width / canvas.height;
      const imgRatio = img.width / img.height;
      let drawWidth = canvas.width;
      let drawHeight = canvas.height;
      let offsetX = 0;
      let offsetY = 0;

      if (canvasRatio > imgRatio) {
        drawHeight = canvas.width / imgRatio;
        offsetY = (canvas.height - drawHeight) / 2;
      } else {
        drawWidth = canvas.height * imgRatio;
        offsetX = (canvas.width - drawWidth) / 2;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    },
    []
  );

  const loadFrame = useCallback((index: number): Promise<HTMLImageElement> => {
    const cache = cacheRef.current;
    const cached = cache.get(index);
    if (cached && cached.complete && cached.naturalWidth > 0) {
      return Promise.resolve(cached);
    }
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        cache.set(index, img);
        resolve(img);
      };
      img.onerror = () => resolve(null as unknown as HTMLImageElement);
      img.src = currentFrame(index);
    });
  }, []);

  const drawFrame = useCallback(
    (frameIndex: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const cached = cacheRef.current.get(frameIndex);
      if (cached && cached.complete && cached.naturalWidth > 0) {
        renderImage(cached, canvas, ctx);
        return;
      }
      loadFrame(frameIndex).then((img) => {
        if (img && canvasRef.current) {
          const c = canvasRef.current.getContext("2d");
          if (c) renderImage(img, canvasRef.current, c);
        }
      });
    },
    [renderImage, loadFrame]
  );

  const preloadAround = useCallback(
    (center: number) => {
      for (let i = Math.max(0, center - 3); i < Math.min(FRAME_COUNT, center + 10); i++) {
        if (!cacheRef.current.has(i)) loadFrame(i);
      }
    },
    [loadFrame]
  );

  // Load frame 0 immediately + preload first batch
  useEffect(() => {
    loadFrame(0).then((img) => {
      if (img && canvasRef.current) {
        const ctx = canvasRef.current.getContext("2d");
        if (ctx) renderImage(img, canvasRef.current, ctx);
      }
    });
    for (let i = 1; i < 20; i++) loadFrame(i);
  }, [loadFrame, renderImage]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (fixedLayerRef.current) {
      fixedLayerRef.current.style.visibility = latest >= 0.99 ? "hidden" : "visible";
    }

    const frameIndex = Math.min(FRAME_COUNT - 1, Math.floor(latest * FRAME_COUNT));
    if (frameIndex === lastFrameRef.current) return;
    lastFrameRef.current = frameIndex;

    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      drawFrame(frameIndex);
      preloadAround(frameIndex);
    });
  });

  useEffect(() => {
    const handleResize = () => drawFrame(lastFrameRef.current);
    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);
    window.visualViewport?.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
      window.visualViewport?.removeEventListener("resize", handleResize);
    };
  }, [drawFrame]);

  return (
    <div ref={containerRef} className="relative w-full bg-[#0a0a0a]" style={{ height: "500vh" }}>
      <div
        ref={fixedLayerRef}
        className="fixed top-0 left-0 w-full z-10 overflow-hidden"
        style={{ height: "100dvh" }}
      >
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply pointer-events-none" />
        <Overlay scrollYProgress={scrollYProgress} />
      </div>
    </div>
  );
}

// ─── MAIN EXPORT ───────────────────────────────────────────────────
export default function ScrollyCanvas() {
  const isMobile = useIsMobile();

  // On first render (SSR/hydration), render nothing briefly to avoid mismatch
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    // SSR placeholder — just a black screen to avoid hydration mismatch
    return <div className="relative w-full bg-[#0a0a0a]" style={{ height: "100vh" }} />;
  }

  return isMobile ? <MobileHero /> : <DesktopCanvas />;
}
