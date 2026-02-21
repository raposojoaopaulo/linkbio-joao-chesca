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
              <span className="links-card__icon" aria-hidden="true">
                <Icon name={link.icon} />
              </span>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
