import { useEffect, useState } from 'react';
import bgHeroDesk from '../assets/images/bg-hero-desk.webp';
import bgHeroMob from '../assets/images/bg-hero-mob.webp';

export function Background() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const bgImage = isDesktop ? bgHeroDesk : bgHeroMob;

  return (
    <div
      className="bg-layer"
      role="presentation"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
      aria-hidden="true"
    />
  );
}
