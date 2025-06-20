import { Mail, Instagram, Facebook } from 'lucide-react';
import { CardContent } from '../ui/card';
import { AltBorder } from '../ui/AltBorder';
import { CONTACT_QUOTE_EMAIL, FACEBOOK_NAME, INSTAGRAM_NAME } from '../../globals';

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-black via-accent/10 to-black">
      <div className="max-w-4xl mx-auto text-center">
        <div className="text-center mb-16">
          <div className="flex justify-center items-center mb-6">
            <div className="w-24 h-px bg-gradient-to-r from-transparent to-accent"></div>
            <Mail className="w-8 h-8 text-accent mx-4" />
            <div className="w-24 h-px bg-gradient-to-l from-transparent to-accent"></div>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            CONTACT
          </h2>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
            Interested in commissioning a piece or collaborating? Reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <ContactCard 
            icon={<Mail className="w-12 h-12 text-primary mx-auto mb-4" />}
            title="Email"
            content={CONTACT_QUOTE_EMAIL}
            href={`mailto:${CONTACT_QUOTE_EMAIL}`}
          />
          
          <ContactCard 
            icon={<Instagram className="w-12 h-12 text-primary mx-auto mb-4" />}
            title="Instagram"
            content={INSTAGRAM_NAME}
            href={`https://instagram.com/${INSTAGRAM_NAME}`}
          />
          
          <ContactCard 
            icon={<Facebook className="w-12 h-12 text-primary mx-auto mb-4" />}
            title="Facebook"
            content={FACEBOOK_NAME}
            href={`https://facebook.com/${FACEBOOK_NAME}`}
          />
        </div>
      </div>
    </section>
  );
}

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  href: string;
}

function ContactCard({ icon, title, content, href }: ContactCardProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="block">
      <AltBorder className="bg-gray-900/50 border-gray-800 hover:border-primary/50 transition-all duration-300 h-full">
        <CardContent className="p-8 text-center h-full flex flex-col">
          {icon}
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-400 mt-auto">{content}</p>
        </CardContent>
      </AltBorder>
    </a>
  );
}
