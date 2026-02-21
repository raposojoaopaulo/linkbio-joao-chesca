import { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const ENABLE_PARTICLES = true; // false = desliga partículas
const MOBILE_BREAKPOINT = 768;

export function ParticlesLayer() {
  const [init, setInit] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const motionMq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotion = () => setPrefersReducedMotion(motionMq.matches);
    updateMotion();
    motionMq.addEventListener('change', updateMotion);
    return () => motionMq.removeEventListener('change', updateMotion);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (!ENABLE_PARTICLES) return;
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const options = useMemo(() => {
    const reduced = prefersReducedMotion;
    const count = reduced ? 0 : (isMobile ? 400 : 40);
    const densityArea = isMobile ? 400 : 1000;
    return {
      fullScreen: false,
      background: { color: { value: 'transparent' } },
      fpsLimit: 60,
      interactivity: {
        events: { onHover: { enable: false } },
        modes: {},
      },
      particles: {
        number: {
          value: count,
          density: { enable: true, area: densityArea },
        },
        color: { value: '#ffffff' },
        opacity: {
          value: { min: 0.3, max: 0.6 },
        },
        size: { value: { min: 1, max: 2 } },
        move: {
          enable: !reduced,
          speed: reduced ? 0 : 0.5,
          direction: 'none',
          random: true,
          straight: false,
          outModes: { default: 'out' },
        },
        links: {
          enable: !reduced,
          distance: 120,
          color: '#ffffff',
          opacity: 0.15,
          width: 0.5,
        },
      },
      detectRetina: true,
    };
  }, [prefersReducedMotion, isMobile]);

  if (!ENABLE_PARTICLES || !init) return null;

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}
      aria-hidden="true"
    >
      <Particles
        id="tsparticles-layer"
        options={options}
        style={{ position: 'absolute', inset: 0 }}
      />
    </div>
  );
}
