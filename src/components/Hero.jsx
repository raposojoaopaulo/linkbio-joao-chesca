import { useEffect, useState } from 'react';
import heroDesk from '../assets/images/joao_hero_desk.webp';
import heroMob from '../assets/images/joao_hero_mob.webp';

export function Hero() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const src = isDesktop ? heroDesk : heroMob;

  return (
    <div className="hero">
      <img
        src={src}
        alt="João Chesca Psicólogo"
        className="hero__img"
      />
    </div>
  );
}
