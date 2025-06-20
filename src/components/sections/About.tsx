import { Crown, Heart, Moon, Skull } from 'lucide-react';
import { OWNER_PIC, OWNER_NAME } from '../../globals';

export function About() {
  return (
    <section id="about" className="py-20 relative bg-gradient-to-b from-black via-accent/10 to-black">
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23dc2626\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            backgroundSize: '60px 60px'
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center items-center mb-6">
            <div className="w-24 h-px bg-gradient-to-r from-transparent to-primary"></div>
            <Moon className="w-8 h-8 text-primary mx-4" />
            <div className="w-24 h-px bg-gradient-to-l from-transparent to-accent"></div>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            ABOUT {OWNER_NAME.toUpperCase()}
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-left">
            <p className="text-gray-300 text-lg leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi doloribus at hic enim culpa cumque amet in illum soluta adipisci. Reiciendis voluptatibus assumenda saepe? Repellat blanditiis quis temporibus odit expedita.
            </p>
            <div className="flex justify-center space-x-6 pt-4">
              <Skull className="w-8 h-8 text-primary animate-pulse" style={{ animationDelay: '0.2s' }} />
              <Heart className="w-8 h-8 text-accent animate-pulse" style={{ animationDelay: '0.4s' }} />
              <Crown className="w-8 h-8 text-primary animate-pulse" style={{ animationDelay: '0.6s' }} />
            </div>
          </div>
          
          <div className="relative">
            <div className="w-80 h-80 mx-auto relative">
              <img
                src={OWNER_PIC}
                alt={`${OWNER_NAME}'s Portrait`}
                className="w-full h-full object-cover rounded-full border-4 border-primary/30"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = '/placeholder.svg';
                }}
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
