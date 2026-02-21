import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ENABLE_PARTICLES = true;
const MOBILE_BREAKPOINT = 768;

export function ParticlesLayer() {
  const [init, setInit] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const motionMq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setPrefersReducedMotion(motionMq.matches);
    updateMotion();
    motionMq.addEventListener("change", updateMotion);
    return () => motionMq.removeEventListener("change", updateMotion);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!ENABLE_PARTICLES) return;
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const options = useMemo(() => {
    const reduced = prefersReducedMotion;

    return {
      fullScreen: false,
      background: { color: { value: "transparent" } },
      fpsLimit: 60,

      interactivity: {
        detectsOn: "window",
      
        events: {
          onHover: {
            enable: !reduced && !isMobile,
            mode: "attract",
          },
          resize: true,
        },
      
        modes: {
          attract: {
            distance: 140,
            duration: 0.25,
            factor: 0.35,
            maxSpeed: 0.6,
            speed: 0.7,
          },
        },
      },

      particles: {
        number: {
          value: reduced ? 0 : isMobile ? 200 : 125,
          density: {
            enable: true,
            area: isMobile ? 550 : 650,
          },
        },

        color: { value: "#ffffff" },

        opacity: {
          value: { min: 0.15, max: 0.35 },
        },

        size: {
          value: { min: 2.0, max: 4.0 },
        },

        move: {
          enable: !reduced,
          speed: 0.20,
          random: true,
          outModes: { default: "out" },
        },

        links: {
          enable: !reduced,
          distance: 75,
          color: "#ffffff",
          opacity: 0.08,
          width: 0.6,
        },
      },

      detectRetina: true,
    };
  }, [prefersReducedMotion, isMobile]);

  if (!ENABLE_PARTICLES || !init) return null;

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
      aria-hidden="true"
    >
      <Particles
        id="tsparticles-layer"
        options={options}
        style={{
          position: "absolute",
          inset: 0,
        }}
      />
    </div>
  );
}