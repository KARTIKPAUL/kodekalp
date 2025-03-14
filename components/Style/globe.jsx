"use client";

import { useCallback, useEffect, useRef } from "react";
import createGlobe from "cobe";
import { useSpring } from "react-spring";

import { cn } from "@/lib/utils";

const GLOBE_CONFIG = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [251 / 255, 100 / 255, 21 / 255],
  glowColor: [1, 1, 1],
  markers: [
    { location: [19.4326, -99.1332], size: 0.05 }, // Mexico City, Mexico
    { location: [40.7128, -74.006], size: 0.05 }, // New York City, USA
    { location: [12.9716, 77.5946], size: 0.07 }, // Bangalore, India
    { location: [26.9124, 75.7873], size: 0.05 }, // Jaipur, India
    { location: [22.5726, 88.3639], size: 0.08 }, // Kolkata, India
    { location: [15.2993, 74.124], size: 0.03 }, // Goa, India
    { location: [19.076, 72.8777], size: 0.1 }, // Mumbai, India
    { location: [19.4326, -99.1332], size: 0.01 }, // Mexico City, Mexico
    { location: [40.7128, -74.006], size: 0.03 }, // New York City, USA
    { location: [21.4602, 80.192], size: 0.2 }, // Gondia, Maharashtra

  ],
};

export default function Globe({
  className,
  config = GLOBE_CONFIG
}) {
  let phi = 0;
  let width = 0;
  const canvasRef = useRef(null);
  const pointerInteracting = useRef(null);
  const pointerInteractionMovement = useRef(0);
  const [{ r }, api] = useSpring(() => ({
    r: 0,
    config: {
      mass: 1,
      tension: 280,
      friction: 40,
      precision: 0.001,
    },
  }));

  const updatePointerInteraction = (value) => {
    pointerInteracting.current = value;
    canvasRef.current.style.cursor = value ? "grabbing" : "grab";
  };

  const updateMovement = (clientX) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      api.start({ r: delta / 200 });
    }
  };

  const onRender = useCallback((state) => {
    if (!pointerInteracting.current) phi += 0.005;
    state.phi = phi + r.get();
    state.width = width * 2;
    state.height = width * 2;
  }, [pointerInteracting, phi, r]);

  const onResize = () => {
    if (canvasRef.current) {
      width = canvasRef.current.offsetWidth;
    }
  };

  useEffect(() => {
    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvasRef.current, {
      ...config,
      width: width * 2,
      height: width * 2,
      onRender,
    });

    setTimeout(() => (canvasRef.current.style.opacity = "1"));
    return () => globe.destroy();
  }, []);

  return (
    (<div
      className={cn("absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]", className)}>
      <canvas
        className={cn(
          "h-full w-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]"
        )}
        ref={canvasRef}
        onPointerDown={(e) =>
          updatePointerInteraction(e.clientX - pointerInteractionMovement.current)
        }
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        } />
    </div>)
  );
}
