import { LiquidGlass } from '@liquidglass/react';
import { links } from '../data/links';
import { Icon } from './Icon';

export function LinksCard() {
  return (
    <div className="links-card">
      <ul className="links-card__list">
        {links.map((link) => (
          <li key={link.id}>
            <a
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="links-card__link"
              aria-label={`${link.label} (abre em nova aba)`}
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
          </li>
        ))}
      </ul>
    </div>
  );
}
