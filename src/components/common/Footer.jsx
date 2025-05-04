import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState('');
  
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you for subscribing with: ${email}`);
      setEmail('');
    }
  };
  
  return (
    <footer className="bg-black text-white pt-20 pb-4">
      <div className="container w-[1280px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Newsletter Section */}
          <div>
            <h3 className="text-xl font-bold uppercase mb-4">Be the first to know</h3>
            <p className="text-base mb-6">Sign up for updates from mettā muse.</p>
            
            <form onSubmit={handleSubscribe} className="flex mb-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your e-mail..." className="bg-white text-gray-400 py-3 px-6 w-full mr-0"
                required
              />
              <button 
                type="submit" className="bg-black bg-opacity-50 border border-white border-opacity-50 py-3 px-6 uppercase font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold uppercase mb-4">mettā muse</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-lg">About Us</Link></li>
              <li><Link to="/stories" className="text-lg">Stories</Link></li>
              <li><Link to="/artisans" className="text-lg">Artisans</Link></li>
              <li><Link to="/boutiques" className="text-lg">Boutiques</Link></li>
              <li><Link to="/contact" className="text-lg">Contact Us</Link></li>
              <li><Link to="/eu-compliance" className="text-lg">EU Compliances Docs</Link></li>
            </ul>
          </div>
          
          {/* Quick Links 2 */}
          <div>
            <h3 className="text-xl font-bold uppercase mb-4">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/orders" className="text-lg">Orders & Shipping</Link></li>
              <li><Link to="/seller" className="text-lg">Join/Login as a Seller</Link></li>
              <li><Link to="/payment" className="text-lg">Payment & Pricing</Link></li>
              <li><Link to="/returns" className="text-lg">Return & Refunds</Link></li>
              <li><Link to="/faqs" className="text-lg">FAQs</Link></li>
              <li><Link to="/privacy" className="text-lg">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-lg">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Contact Section */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-xl font-bold uppercase mb-4">CONTACT US</h3>
            <p className="text-base mb-1">+44 221 133 5360</p>
            <p className="text-base mb-6">customercare@mettamuse.com</p>
            
            <h3 className="text-xl font-bold uppercase mb-4">CURRENCY</h3>
            <div className="flex items-center mb-2">
              <img src="/images/img_group_24x24.svg" alt="Currency" className="h-6 w-6 mr-2" />
              <span className="font-bold text-base tracking-wider">USD</span>
            </div>
            <p className="text-xs">Transactions will be completed in Euros and a currency reference is available on hover.</p>
          </div>
          
          {/* Social Media */}
          <div className="col-span-2 md:col-span-1 md:col-start-3">
            <h3 className="text-xl font-bold uppercase mb-4">Follow Us</h3>
            <div className="flex space-x-3 mb-8">
              <Link to="#" className="h-8 w-8">
                <img src="/images/img_insta.svg" alt="Instagram" />
              </Link>
              <Link to="#" className="h-8 w-8 border border-white rounded-full flex items-center justify-center">
                <img src="/images/img_mdilinkedin.svg" alt="LinkedIn" className="h-6 w-6" />
              </Link>
            </div>
            
            <h3 className="text-xl font-bold mb-4">mettā muse Accepts</h3>
            <div className="flex flex-wrap gap-2">
              <div className="h-9 w-14 bg-white rounded flex items-center justify-center border border-white">
                <img src="/images/img_group_136187.svg" alt="Payment" className="h-4" />
              </div>
              <div className="h-9 w-14 bg-white rounded flex items-center justify-center border border-white">
                <img src="/images/img_group_136189.svg" alt="Payment" className="h-5" />
              </div>
              <div className="h-9 w-14 bg-white rounded flex items-center justify-center border border-white">
                <img src="/images/img_group_136191.svg" alt="Payment" className="h-4" />
              </div>
              <div className="h-9 w-14 bg-[#006fcf] rounded flex items-center justify-center border border-white">
                <img src="/images/img_vector.svg" alt="Payment" className="h-3" />
              </div>
              <div className="h-9 w-14 bg-white rounded flex items-center justify-center border border-white">
                <img src="/images/img_group.svg" alt="Payment" className="h-4" />
              </div>
              <div className="h-9 w-14 bg-[#5a31f4] rounded flex items-center justify-center border border-white">
                <img src="/images/img_vector_16x40.svg" alt="Payment" className="h-4" />
              </div>
            </div>
          </div>
        </div>
        
        <hr className="border-t border-white opacity-20 mb-8" />
        
        <div className="text-center">
          <p className="text-sm">Copyright © 2023 mettamuse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;