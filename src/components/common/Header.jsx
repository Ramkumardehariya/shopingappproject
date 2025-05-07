import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  return (
    <>
      {/* Top notification bar */}
      <div className="bg-black w-full h-8 flex items-center justify-center">
        <div className="container mx-auto flex justify-center">
          <div className="flex items-center mx-8">
            <img src="/images/img_element4.svg" alt="" className="h-4 w-4 mr-2" />
            <span className="text-xs tracking-wider text-accent">Lorem ipsum dolor</span>
          </div>
          <div className="flex items-center mx-8">
            <img src="/images/img_element4.svg" alt="" className="h-4 w-4 mr-2" />
            <span className="text-xs tracking-wider text-accent">Lorem ipsum dolor</span>
          </div>
          <div className="flex items-center mx-8">
            <img src="/images/img_element4.svg" alt="" className="h-4 w-4 mr-2" />
            <span className="text-xs tracking-wider text-accent">Lorem ipsum dolor</span>
          </div>
        </div>
      </div>
      
      {/* Main header */}
      <header className="bg-white w-[1280px] mx-auto h-[188px] border-b border-primary-dark">
        <div className="container mx-auto px-4 py-10 flex flex-col items-center">
          <div className="flex justify-between items-center w-full">
            <div className="flex-1 flex justify-start">
              <img src="/images/img_logo.svg" alt="Logo" className="h-9 w-9" />
            </div>
            
            <div className="flex-1 flex justify-center">
              <h1 className="text-4xl font-extrabold tracking-wide">LOGO</h1>
            </div>
            
            <div className="flex-1 flex justify-end items-center space-x-6">
              <button 
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="focus:outline-none"
              >
                <img src="/images/searchbar.jpg" alt="Search" className="h-6 w-6" />
              </button>
              <Link to="/wishlist">
                <img src="/images/img_heart.svg" alt="Wishlist" className="h-6 w-6" />
              </Link>
              <Link to="/cart">
                <img src="/images/img_shoppingbag.svg" alt="Cart" className="h-6 w-6" />
              </Link>
              <Link to="/profile">
                <img src="/images/img_profile.svg" alt="Profile" className="h-6 w-6" />
              </Link>
              <div className="flex items-center">
                <span className="text-base font-bold tracking-wider mr-1">ENG</span>
                <img src="/images/img_arrowleft.svg" alt="Language" className="h-4 w-4 transform rotate-90" />
              </div>
            </div>
          </div>
          
          {/* Navigation */}
          <nav className="mt-10 flex space-x-16">
            <Link to="/shop" className="text-xl font-bold tracking-wider">SHOP</Link>
            <Link to="/skills" className="text-xl font-bold tracking-wider">SKILLS</Link>
            <Link to="/stories" className="text-xl font-bold tracking-wider">STORIES</Link>
            <Link to="/about" className="text-xl font-bold tracking-wider">ABOUT</Link>
            <Link to="/contact" className="text-xl font-bold tracking-wider">CONTACT US</Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;