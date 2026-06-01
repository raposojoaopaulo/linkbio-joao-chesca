import { LiquidGlass } from '@liquidglass/react';
import { links } from '../data/links';
import { Icon } from './Icon';

const desktopOrder = ['atendimentos', 'instagram', 'tiktok', 'youtube'];

const orderedLinks = desktopOrder.map((id) => links.find((l) => l.id === id)).filter(Boolean);

export function FloatingPills() {
  return (
    <div className="floating-pills">
      <div className="floating-pills__inner">
        {orderedLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className={`floating-pills__link floating-pills__link--${link.id}`}
            aria-label={link.label}
          >
            <LiquidGlass
              borderRadius={9999}
              blur={0.65}
              contrast={1.15}
              brightness={1.15}
              saturation={1}
              shadowIntensity={0.08}
              elasticity={0.4}
              zIndex={0}
              className="links-card-glass"
            >
              <span className="links-card__icon" aria-hidden="true">
                <Icon name={link.icon} />
              </span>
              {link.label}
            </LiquidGlass>
          </a>
        ))}
      </div>
    </div>
  );
}
