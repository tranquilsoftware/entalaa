import { X, Instagram, ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { AltBorder } from './ui/AltBorder';

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

interface ArtworkModalProps {
  selectedItem: PortfolioItem | null;
  onClose: () => void;
}

export function ArtworkModal({ selectedItem, onClose }: ArtworkModalProps) {
  if (!selectedItem) return null;

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
      <button 
        className="absolute top-4 right-4 text-gray-400 hover:text-white"
        onClick={onClose}
        aria-label="Close modal"
      >
        <X size={32} />
      </button>
      
      <div className="max-w-4xl w-full">
        <AltBorder className="p-1">
          <Card className="bg-gray-900/80 border-0">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="aspect-square bg-gray-800">
                <img 
                  src={selectedItem.image} 
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-3xl">{selectedItem.title}</CardTitle>
                  <CardDescription className="text-primary">{selectedItem.category}</CardDescription>
                </CardHeader>
                <CardContent className="p-0 mb-6">
                  <p className="text-gray-300">{selectedItem.description}</p>
                </CardContent>
                <CardFooter className="p-0 gap-4">
                  <Button variant="default" className="flex-1">
                    View Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline">
                    <Instagram className="mr-2 h-4 w-4" />
                    Share
                  </Button>
                </CardFooter>
              </div>
            </div>
          </Card>
        </AltBorder>
      </div>
    </div>
  );
}
