import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Clock, AlertCircle, ArrowRight, X, Mail } from 'lucide-react';

import { CONTACT_QUOTE_EMAIL, LOGO } from '../globals';

interface CustomOrderItem {
  id: string;
  name: string;
  description: string;
  price: number;
  available: boolean;
  deposit: number;
  image: string;
  type: 'hoodie' | 'tshirt' | 'other';
  estimatedDelivery: string;
  popular?: boolean;
}

interface OrderFormData {
  name: string;
  email: string;
  phone: string;
  details: string;
  size?: string;
  color?: string;
}

const CustomOrder = () => {
  const [selectedItem, setSelectedItem] = useState<CustomOrderItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<OrderFormData>({
    name: '',
    email: '',
    phone: '',
    details: '',
    size: '',
    color: ''
  });

  const currency = 'AUD'; // Default currency

  const [customItems] = useState<CustomOrderItem[]>([
    {
      id: 'custom-hoodie-1',
      name: 'Custom Hoodie',
      description: 'Handmade custom hoodie with your unique design.',
      price: 250-500,
      deposit: 50,
      available: true,
      // image: 'assets/images/1.jpeg',
      image: LOGO,
      type: 'hoodie',
      estimatedDelivery: '4-6 weeks',
      popular: false
    }
    // ,{
    //   id: 'custom-other-1',
    //   name: 'Custom Item',
    //   description: 'Completely custom clothing item. Let\'s discuss your vision!',
    //   price: 0,
    //   deposit: 50,
    //   available: true,
    //   image: 'assets/images/3.jpeg',
    //   type: 'other',
    //   estimatedDelivery: 'TBD'
    // }
  ]);

  const handleOrderClick = (item: CustomOrderItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedItem) return;

      // REMOVED AS PRICE IS DICTATED BY OWNER.
    // - Price: $${selectedItem.price > 0 ? selectedItem.price : 'Contact for pricing'}

    const emailBody = `
New Custom Order Request
------------------------------------------------------------

Order Details:
- Item: ${selectedItem.name}
- Type: ${selectedItem.type}
- Deposit Required: $${selectedItem.deposit} ${currency}
- Estimated Delivery: ${selectedItem.estimatedDelivery}

Customer Information:
- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone}

Customization Details:
- Size: ${formData.size || 'Not specified'}
- Color: ${formData.color || 'Not specified'}
- Additional Details: ${formData.details || 'None'}
    `;

    const mailtoLink = `mailto:${CONTACT_QUOTE_EMAIL}?subject=New Custom Order: ${selectedItem.name}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section className="relative bg-background-dark py-16 overflow-visible">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text">
            Custom Orders
          </h2>
          <p className="text-lg text-content-white max-w-2xl mx-auto subtle-text">
            Handcrafted custom clothing items. Limited spots available. A deposit is required to secure your order.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="max-w-md w-full">
            {customItems.map((item) => (
              <div 
                key={item.id}
                className={`group relative bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${
                  !item.available ? 'opacity-80' : ''
                }`}
              >
                {item.popular && (
                  <div className="absolute top-4 right-4 bg-primary text-content-white text-xs font-bold px-3 py-1 rounded-full z-10">
                    Most Popular
                  </div>
                )}
                
                <div className="relative h-48 overflow-hidden">
                  <div 
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url('${item.image}')` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-xl font-bold text-content-white">{item.name}</h3>
                    <div className="flex items-center text-sm text-content-white">
                      <Clock className="w-4 h-4 mr-1 text-content-white" />
                      <span>{item.estimatedDelivery}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
                  <p className="text-content-white mb-4">{item.description}</p>
                  
                  <div className="mt-auto">
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between py-2 border-b border-border/30">
                        <span className="text-content-white">Total Price</span>
                        <span className="font-medium text-content-white">
                          {item.price > 0 ? `$${item.price}` : 'Contact for pricing'}
                        </span>
                      </div>
                      {/* <div className="flex justify-between py-2 border-b border-border/30">
                        <span className="text-content-white">Deposit Required</span>
                        <span className="font-medium text-content-secondary">${item.deposit}</span>
                      </div> */}
                    </div>

                    {item.available ? (
                      <button
                        onClick={() => handleOrderClick(item)}
                        className="w-full py-3 px-6 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium flex items-center justify-center gap-2 transition-colors"
                      >
                        <ShoppingBag className="w-5 h-5" />
                        Order Now (${item.deposit} {currency} deposit)
                      </button>
                    ) : (
                      <div className="w-full py-3 px-6 bg-muted text-muted-foreground rounded-lg font-medium flex items-center justify-center gap-2">
                        <AlertCircle className="w-5 h-5" />
                        Currently Unavailable
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="mb-4 text-content-white">
            Have something special in mind?
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center text-content-secondary hover:text-content-secondary/80 font-medium transition-colors group"
          >
            Let's discuss your custom request
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Order Modal */}
      {isModalOpen && selectedItem && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-card rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">Order: {selectedItem.name}</h3>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-background border border-border rounded-md"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-background border border-border rounded-md"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-background border border-border rounded-md"
                  />
                </div>

                {selectedItem.type === 'hoodie' && (
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="size" className="block text-sm font-medium mb-1">Size</label>
                      <select
                        id="size"
                        name="size"
                        value={formData.size}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-background border border-border rounded-md"
                      >
                        <option value="">Select size</option>
                        <option value="S">Small</option>
                        <option value="M">Medium</option>
                        <option value="L">Large</option>
                        <option value="XL">XL</option>
                        <option value="2XL">2XL</option>
                        <option value="3XL">3XL</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="color" className="block text-sm font-medium mb-1">Color</label>
                      <input
                        type="text"
                        id="color"
                        name="color"
                        placeholder="Desired color"
                        value={formData.color}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-background border border-border rounded-md"
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label htmlFor="details" className="block text-sm font-medium mb-1">
                    {selectedItem.type === 'other' ? 'Tell us about your custom item' : 'Additional Details'}
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    rows={4}
                    required={selectedItem.type === 'other'}
                    value={formData.details}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-background border border-border rounded-md"
                    placeholder="Please provide any specific details about your custom order..."
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full py-3 px-6 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium flex items-center justify-center gap-2 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    Send Order Request
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CustomOrder;
