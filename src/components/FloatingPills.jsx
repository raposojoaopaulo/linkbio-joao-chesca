import { links } from '../data/links';
import { Icon } from './Icon';

const desktopOrder = ['atendimentos', 'instagram', 'tiktok', 'youtube', 'ebook'];

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
              aria-label={`${link.label}`}
            >
              <span className="icon-wrap" aria-hidden="true">
                <Icon name={link.icon} />
              </span>
              {link.label}
            </a>
        ))}
      </div>
    </div>
  );
}
