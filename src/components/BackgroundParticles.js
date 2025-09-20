// src/components/BackgroundParticles.js
'use client'; // make it a client component

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function BackgroundParticles() {
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: "var(--background)" },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            resize: true,
          },
          modes: {
            repulse: { distance: 150, duration: 0.4 },
          },
        },
        particles: {
          color: { value: "#69927A" },
          links: { enable: true, color: "#69927A", distance: 150 },
          collisions: { enable: false },
          move: { enable: true, speed: 1, direction: "none", outModes: "bounce" },
          number: { value: 50 },
          opacity: { value: 0.7 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 4 } },
        },
        detectRetina: true,
      }}
    />
  );
}
