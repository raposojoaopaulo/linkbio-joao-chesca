import { Background } from './components/Background';
import { ParticlesLayer } from './components/ParticlesLayer';
import { Hero } from './components/Hero';
import { FloatingPills } from './components/FloatingPills';
import { LinksCard } from './components/LinksCard';
import { FooterPill } from './components/FooterPill';
import './styles/globals.css';
import './styles/app.css';

export default function App() {
  return (
    <div className="app">
      <Background />
      <ParticlesLayer />
      <div className="app__content">
        <div className="hero-area">
          <Hero />
          <FloatingPills />
        </div>
        <LinksCard />
        {/* <FooterPill /> */}
      </div>
    </div>
  );
}
