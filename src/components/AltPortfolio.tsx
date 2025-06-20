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

// import { useState, useEffect } from 'react';
// import { Mail, Instagram, Facebook, Menu, X, ArrowRight, Crown, Heart, Moon, Skull } from 'lucide-react';
// import { Button } from './ui/Button';
// import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from './ui/card';
// import { BRAND_NAME, UNICODE_CHAR, UNICODE_CHAR_2, UNICODE_CHAR_3, BRIEF_DESCRIPTION, ELEVATOR_PITCH, STYLED_BRAND_NAME, OWNER_PIC, INSTAGRAM_NAME, FACEBOOK_NAME } from '../globals'
// import { AltBorder } from './ui/AltBorder';
// import { INSTAGRAM_LINK, FACEBOOK_LINK, CONTACT_QUOTE_EMAIL } from '../globals';

// interface MousePosition {
//   x: number;
//   y: number;
// }


// // Sample portfolio data
// const portfolioItems = [
//   {
//     id: 1,
//     title: 'Dark Elegance',
//     category: 'Digital Art',
//     image: '/placeholder.svg?height=400&width=300',
//     description: 'A description here.'
//   },
//   // Add more portfolio items as needed
// ];

// const categories = ['All', 'Sketch', 'Digital Art', 'Illustration'];


// // Custom cursor component
// // const CustomCursor: React.FC<{ position: MousePosition }> = ({ position }) => (
// //   <div 
// //     className="fixed w-8 h-8 pointer-events-none z-50 mix-blend-difference"
// //     style={{
// //       left: `${position.x - 16}px`,
// //       top: `${position.y - 16}px`,
// //       transition: 'all 0.1s ease-out'
// //     }}
// //   >
// //     <div className="relative w-full h-full">
// //       <div className="absolute inset-0 border-2 border-red-400 rounded-full animate-ping opacity-30"></div>
// //       <div className="absolute inset-1 border border-red-400 rounded-full"></div>
// //     </div>
// //   </div>
// // );

// // AltBorder component is imported from './ui/AltBorder'
// export function AltPortfolio() {
//   const [activeFilter, setActiveFilter] = useState('All');
//   const [selectedItem, setSelectedItem] = useState<typeof portfolioItems[0] | null>(null);
//   const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });

//   // Track mouse position for custom cursor
//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };
    
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const filteredItems = activeFilter === 'All' 
//     ? portfolioItems 
//     : portfolioItems.filter(item => item.category === activeFilter);

//   return (
//     <div className="min-h-screen bg-black text-white relative overflow-hidden "> {/*cursor-none */}
//       {/* <CustomCursor position={mousePosition} /> */}
      
//       {/* Animated Background Elements */}
//       <div className="fixed inset-0 pointer-events-none">
//         <div className="absolute top-1/4 left-1/4 text-primary/10 text-8xl transform -translate-x-1/2 -translate-y-1/2">
//           <span className="animate-pulse" style={{ animationDuration: '8s' }}>{UNICODE_CHAR}</span>
//         </div>
//         <div className="absolute top-3/4 right-1/4 text-accent/10 text-6xl transform translate-x-1/2 -translate-y-1/2">
//           <span className="animate-pulse" style={{ animationDuration: '10s', animationDelay: '1s' }}>{UNICODE_CHAR_2}</span>
//         </div>
//       </div>
//       {/* Header */}
//       <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-primary/30">
//         <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//           <div className="text-2xl font-gothic font-bold text-primary">{BRAND_NAME}</div>
          
//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex space-x-8">
//             {['Home', 'Portfolio', 'About', 'Contact'].map((item) => (
//               <a
//                 key={item}
//                 href={`#${item.toLowerCase()}`}
//                 className="text-gray-300 hover:text-primary transition-colors duration-300 relative group"
//               >
//                 {item}
//                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
//               </a>
//             ))}
//           </nav>

//           {/* Mobile Menu Button */}
//           <button 
//             className="md:hidden text-gray-300 hover:text-primary"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             aria-label="Toggle menu"
//           >
//             {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="md:hidden bg-gray-900/95 border-t border-red-900/30 py-4">
//             <nav className="flex flex-col space-y-4 px-4">
//               {['Home', 'Portfolio', 'About', 'Contact'].map((item) => (
//                 <a
//                   key={item}
//                   href={`#${item.toLowerCase()}`}
//                   className="text-gray-300 hover:text-primary py-2 px-4 rounded transition-colors duration-300"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   {item}
//                 </a>
//               ))}
//             </nav>
//           </div>
//         )}
//       </header>

//       {/* Hero Section */}
//       <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-radial from-primary/30 via-black to-black"></div>

//         {/* Alt Ornaments */}
//         <div className="absolute top-20 left-10 text-primary/20 text-6xl">{UNICODE_CHAR_3}</div>
//         <div className="absolute top-32 right-16 text-accent/20 text-4xl">{UNICODE_CHAR}</div>
//         <div className="absolute bottom-32 left-20 text-primary/20 text-5xl">{UNICODE_CHAR_2}</div>
//         <div className="absolute bottom-20 right-12 text-accent/20 text-6xl">{UNICODE_CHAR_3}</div>

//         <div className="relative z-10 text-center px-4">
//           {/* Crown Icon */}
//           <div className="mb-8">
//             <Crown className="w-16 h-16 text-primary mx-auto mb-4 animate-pulse" strokeWidth={1.5} />
//           </div>

//           {/* Brand Name with Alt Border */}
//           <AltBorder className="inline-block p-8 mb-8">
//             <h1 className="text-6xl md:text-8xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-b from-primary via-accent to-primary-dark tracking-wider">
//               {STYLED_BRAND_NAME}
//             </h1>
//             <div className="flex justify-center items-center space-x-4 text-primary/60">
//               <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary"></div>
//               <Skull className="w-6 h-6" />
//               <div className="w-16 h-px bg-gradient-to-l from-transparent to-primary"></div>
//             </div>
//           </AltBorder>

//           {/* Tagline */}
//           <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed">
//             <span className="bg-gradient-to-r from-primary via-accent to-primary text-transparent bg-clip-text">
//               {BRIEF_DESCRIPTION}
//             </span>
//             <br />
//             {/* <span className="text-red-400/80 italic">
//              {ELEVATOR_PITCH}
//             </span> */}
//           </p>

//           {/* Action Buttons */}
//           <div className="flex flex-wrap justify-center gap-6">
//             <AltBorder className="group">
//               <Button
//                 variant="ghost"
//                 className="relative overflow-hidden border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500 px-8 py-3 text-lg tracking-wide"
//                 onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
//               >
//                 <span className="relative z-10">{UNICODE_CHAR_2} Gallery {UNICODE_CHAR_2}</span>
//                 <span className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
//               </Button>
//             </AltBorder>
//             <AltBorder className="group">
//               <Button
//                 variant="ghost"
//                 className="relative overflow-hidden text-accent hover:text-accent-foreground transition-colors duration-300 px-8 py-3 text-lg tracking-wide"
//                 onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
//               >
//                 <span className="relative z-10">{UNICODE_CHAR} Contact {UNICODE_CHAR}</span>
//                 <span className="absolute inset-0 bg-gradient-to-r from-accent/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
//               </Button>
//             </AltBorder>
//           </div>
//         </div>

//         <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
//       </section>

//       {/* Portfolio Section */}
//       <section id="portfolio" className="py-20 relative">
//         {/* Decorative elements */}
//         <div className="absolute top-20 left-1/4 text-primary/10 text-6xl transform -translate-x-1/2 -translate-y-1/2">
//           <span className="animate-pulse" style={{ animationDuration: '12s' }}>{UNICODE_CHAR_3}</span>
//         </div>
//         <div className="absolute bottom-20 right-1/4 text-accent/10 text-8xl transform translate-x-1/2 -translate-y-1/2">
//           <span className="animate-pulse" style={{ animationDuration: '15s', animationDelay: '2s' }}>{UNICODE_CHAR_2}</span>
//         </div>
        
//         <div className="container mx-auto px-4 relative z-10">
//           <div className="text-center mb-16">
//             <AltBorder className="inline-block p-6 md:p-8 mb-8">
//               <h2 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-b from-primary via-accent to-primary-dark tracking-wider">
//                 {UNICODE_CHAR} GALLERY {UNICODE_CHAR}
//               </h2>
//               <div className="flex justify-center items-center space-x-4 text-primary/60 mb-6">
//                 <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary"></div>
//                 <Moon className="w-6 h-6" />
//                 <div className="w-16 h-px bg-gradient-to-l from-transparent to-primary"></div>
//               </div>
//               <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
//                 <span className="text-primary/80 italic">
//                   {ELEVATOR_PITCH}
//                 </span>
//               </p>
//             </AltBorder>
//           </div>
          
//           {/* Category Filters */}
//           <div className="flex flex-wrap justify-center gap-2 mb-12">
//             {categories.map((category) => (
//               <Button
//                 key={category}
//                 variant={activeFilter === category ? 'default' : 'outline'}
//                 className="rounded-full px-6"
//                 onClick={() => setActiveFilter(category)}
//               >
//                 {category}
//               </Button>
//             ))}
//           </div>

//           {/* Portfolio Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filteredItems.map((item) => (
//               <AltBorder key={item.id} className="overflow-hidden">
//                 <Card 
//                   className="bg-transparent border-0 cursor-pointer hover:scale-[1.02] transition-transform duration-300"
//                   onClick={() => setSelectedItem(item)}
//                 >
//                   <div className="aspect-square bg-gray-900/50 relative overflow-hidden">
//                     <img 
//                       src={item.image} 
//                       alt={item.title}
//                       className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
//                     />
//                   </div>
//                   <CardHeader>
//                     <CardTitle className="text-xl">{item.title}</CardTitle>
//                     <CardDescription className="text-gray-400">{item.category}</CardDescription>
//                   </CardHeader>
//                 </Card>
//               </AltBorder>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="about" className="py-20 relative bg-gradient-to-b from-black via-accent/10 to-black">
//         <div className="absolute inset-0 opacity-10">
//           <div 
//             className="w-full h-full"
//             style={{
//               backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23dc2626\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
//               backgroundSize: '60px 60px'
//             }}
//           />
//         </div>
        
//         <div className="container mx-auto px-4 relative z-10">
//           <div className="text-center mb-16">
//             <div className="flex justify-center items-center mb-6">
//               <div className="w-24 h-px bg-gradient-to-r from-transparent to-primary"></div>
//               <Moon className="w-8 h-8 text-primary mx-4" />
//               <div className="w-24 h-px bg-gradient-to-l from-transparent to-accent"></div>
//             </div>
//           <h2 className="text-4xl md:text-6xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
//             ABOUT THE ARTIST
//           </h2>
//           </div>
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div className="space-y-6 text-left">
//               {/* <p className="text-gray-300 text-lg leading-relaxed">
//                 Welcome, I am {BRAND_NAME}, lorem ipsum dolor sit amet consectetur adipisicing elit. Animi doloribus at hic enim culpa cumque amet in illum soluta adipisci. Reiciendis voluptatibus assumenda saepe? Repellat blanditiis quis temporibus odit expedita.
//               </p> */}
//                  <p className="text-gray-300 text-lg leading-relaxed">
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi doloribus at hic enim culpa cumque amet in illum soluta adipisci. Reiciendis voluptatibus assumenda saepe? Repellat blanditiis quis temporibus odit expedita.
//                 </p>
//                 {/*<p className="text-gray-300 text-lg leading-relaxed">
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi doloribus at hic enim culpa cumque amet in illum soluta adipisci. Reiciendis voluptatibus assumenda saepe? Repellat blanditiis quis temporibus odit expedita.
//                 </p> */}
              
//               <div className="flex justify-center space-x-6 pt-4">
//                 <Skull className="w-8 h-8 text-primary animate-pulse" style={{ animationDelay: '0.2s' }} />
//                 <Heart className="w-8 h-8 text-accent animate-pulse" style={{ animationDelay: '0.4s' }} />
//                 <Crown className="w-8 h-8 text-primary animate-pulse" style={{ animationDelay: '0.6s' }} />
//               </div>
//             </div>
            
//             <div className="relative">
//               <div className="w-80 h-80 mx-auto relative">
//                 <img
//                   src={OWNER_PIC}
//                   alt="Artist Portrait"
//                   className="w-full h-full object-cover rounded-full border-4 border-primary/30"
//                   onError={(e) => {
//                     const target = e.target as HTMLImageElement;
//                     target.onerror = null;
//                     target.src = '/placeholder.svg';
//                   }}
//                 />
//                 <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/50 to-transparent"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="py-20 px-4 bg-gradient-to-b from-black via-accent/10 to-black">
//         <div className="max-w-4xl mx-auto text-center">
//           <div className="text-center mb-16">
//             <div className="flex justify-center items-center mb-6">
//               <div className="w-24 h-px bg-gradient-to-r from-transparent to-accent"></div>
//               <Mail className="w-8 h-8 text-accent mx-4" />
//               <div className="w-24 h-px bg-gradient-to-l from-transparent to-accent"></div>
//             </div>
//             <h2 className="text-4xl md:text-6xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
//               CONTACT
//             </h2>
//             <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
//               Interested in commissioning a piece or collaborating? Reach out!
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             <AltBorder className="bg-gray-900/50 border-gray-800 hover:border-primary/50 transition-all duration-300">
//               <CardContent className="p-8 text-center">
//                 <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
//                 <h3 className="text-xl font-bold mb-2">Email</h3>
//                 <p className="text-gray-400">{CONTACT_QUOTE_EMAIL}</p>
//               </CardContent>
//             </AltBorder>

//             <AltBorder className="bg-gray-900/50 border-gray-800 hover:border-primary/50 transition-all duration-300">
//               <CardContent className="p-8 text-center">
//                 <Instagram className="w-12 h-12 text-primary mx-auto mb-4" />
//                 <h3 className="text-xl font-bold mb-2">Instagram</h3>
//                 <p className="text-gray-400">{INSTAGRAM_NAME}</p>
//               </CardContent>
//             </AltBorder>

//             <AltBorder className="bg-gray-900/50 border-gray-800 hover:border-primary/50 transition-all duration-300">
//               <CardContent className="p-8 text-center">
//                 <Facebook className="w-12 h-12 text-primary mx-auto mb-4" />
//                 <h3 className="text-xl font-bold mb-2">Facebook</h3>
//                 <p className="text-gray-400">{FACEBOOK_NAME}</p>
//               </CardContent>
//             </AltBorder>
//           </div>
//         </div>
//       </section>
                  
//       {/* Footer */}
//       <footer className="py-8 px-4 border-t border-primary/30 bg-black">
//         <div className="max-w-7xl mx-auto text-center">
//           <p className="text-gray-400">© {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.</p>
//         </div>
//       </footer>

//       {/* Artwork Modal */}
//       {selectedItem && (
//         <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
//           <button 
//             className="absolute top-4 right-4 text-gray-400 hover:text-white"
//             onClick={() => setSelectedItem(null)}
//           >
//             <X size={32} />
//           </button>
          
//           <div className="max-w-4xl w-full">
//             <AltBorder className="p-1">
//               <Card className="bg-gray-900/80 border-0">
//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div className="aspect-square bg-gray-800">
//                     <img 
//                       src={selectedItem.image} 
//                       alt={selectedItem.title}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                   <div className="p-6">
//                     <CardHeader className="p-0 mb-6">
//                       <CardTitle className="text-3xl">{selectedItem.title}</CardTitle>
//                       <CardDescription className="text-primary">{selectedItem.category}</CardDescription>
//                     </CardHeader>
//                     <CardContent className="p-0 mb-6">
//                       <p className="text-gray-300">{selectedItem.description}</p>
//                     </CardContent>
//                     <CardFooter className="p-0 gap-4">
//                       <Button variant="default" className="flex-1">
//                         View Project
//                         <ArrowRight className="ml-2 h-4 w-4" />
//                       </Button>
//                       <Button variant="outline">
//                         <Instagram className="mr-2 h-4 w-4" />
//                         Share
//                       </Button>
//                     </CardFooter>
//                   </div>
//                 </div>
//               </Card>
//             </AltBorder>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

