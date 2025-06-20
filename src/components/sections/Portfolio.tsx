import { useState } from 'react';
import { Moon } from 'lucide-react';
import { Button } from '../ui/Button';
import { CardDescription, CardHeader, CardTitle } from '../ui/card';
import { AltBorder } from '../ui/AltBorder';
import { ELEVATOR_PITCH, UNICODE_CHAR, UNICODE_CHAR_2, UNICODE_CHAR_3 } from '../../globals';

interface ImageItem {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  title: string;
  description: string;
  category: string;
}

interface PortfolioItem {
  id: number;
  title: string;
  alt: string;
  description: string;
  category: string;
  image: string;
}

// Generate random square images from picsum.photos
const generateRandomImages = (count: number, startIndex = 0): ImageItem[] => {
  const categories = ['Sketch', 'Digital Art', 'Illustration'];
  
  return Array.from({ length: count }, (_, i) => {
    const id = startIndex + i + 1;
    const size = 500;
    const category = categories[Math.floor(Math.random() * categories.length)];
    
    return {
      id: `img-${id}`,
      src: `https://picsum.photos/seed/art-${id}/${size}/${size}`,
      alt: `Artwork ${id}`,
      width: size,
      height: size,
      title: `Artwork ${id}`,
      description: `Description for artwork ${id}`,
      category: category
    };
  });
};

// Generate 10 random portfolio items
const portfolioItems: PortfolioItem[] = generateRandomImages(10).map((img, index) => ({
  id: index + 1,
  title: img.title,
  category: img.category,
  image: img.src,
  description: img.description,
  alt: img.alt
}));

const categories = ['All', ...Array.from(new Set(portfolioItems.map(item => item.category)))];

interface PortfolioProps {
  onSelectItem: (item: PortfolioItem) => void;
}

export function Portfolio({ onSelectItem }: PortfolioProps) {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredItems = activeFilter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 relative">
      {/* Decorative elements */}
      <div className="absolute top-20 left-1/4 text-primary/10 text-6xl transform -translate-x-1/2 -translate-y-1/2">
        <span className="animate-pulse" style={{ animationDuration: '12s' }}>{UNICODE_CHAR_3}</span>
      </div>
      <div className="absolute bottom-20 right-1/4 text-accent/10 text-8xl transform translate-x-1/2 -translate-y-1/2">
        <span className="animate-pulse" style={{ animationDuration: '15s', animationDelay: '2s' }}>{UNICODE_CHAR_2}</span>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <AltBorder className="inline-block p-6 md:p-8 mb-8">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-b from-primary via-accent to-primary-dark tracking-wider">
              {UNICODE_CHAR} GALLERY {UNICODE_CHAR}
            </h2>
            <div className="flex justify-center items-center space-x-4 text-primary/60 mb-6">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary"></div>
              <Moon className="w-6 h-6" />
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-primary"></div>
            </div>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              <span className="text-primary/80 italic">
                {ELEVATOR_PITCH}
              </span>
            </p>
          </AltBorder>
        </div>
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? 'default' : 'outline'}
              className="rounded-full px-6"
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <AltBorder key={item.id} className="overflow-hidden">
              <div 
                className="bg-transparent border-0 cursor-pointer hover:scale-[1.02] transition-transform duration-300"
                onClick={() => onSelectItem(item)}
              >
                <div className="aspect-square bg-gray-900/50 relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription className="text-gray-400">{item.category}</CardDescription>
                </CardHeader>
              </div>
            </AltBorder>
          ))}
        </div>
      </div>
    </section>
  );
}
