import whatsappIcon from '../assets/images/icons/whatsapp.svg';
import instagramIcon from '../assets/images/icons/instagram.svg';
import youtubeIcon from '../assets/images/icons/youtube.svg';
import ebookIcon from '../assets/images/icons/ebook.svg';
import tiktokIcon from '../assets/images/icons/tiktok.svg';

const icons = {
  whatsapp: <img src={whatsappIcon} alt="Icone do whatsapp" aria-hidden="true" />,
  instagram: <img src={instagramIcon} alt="Icone do Instagram" aria-hidden="true" />,
  youtube: <img src={youtubeIcon} alt="Icone do YouTube" aria-hidden="true" />,
  ebook: <img src={ebookIcon} alt="Icone do Ebook" aria-hidden="true" />,
  tiktok: <img src={tiktokIcon} alt="Icone do TikTok" aria-hidden="true" />,
};

export function Icon({ name, className }) {
  const svg = icons[name];
  if (!svg) return null;
  return <span className={className}>{svg}</span>;
}
