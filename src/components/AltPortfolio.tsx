import { useState } from 'react';
import { Header } from './sections/Header';
import { Hero } from './sections/Hero';
import { Portfolio } from './sections/Portfolio';
import { About } from './sections/About';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';
import { ArtworkModal } from './ArtworkModal';
import { AnimatedBackground } from './AnimatedBackground';

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

export function AltPortfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <AnimatedBackground />
      
      <Header 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
      />
      
      <Hero />
      
      <Portfolio 
        onSelectItem={(item) => setSelectedItem(item as PortfolioItem)} 
      />
      
      <About />
      
      <Contact />
      
      <Footer />
      
      <ArtworkModal 
        selectedItem={selectedItem} 
        onClose={() => setSelectedItem(null)} 
      />
    </div>
  );
}