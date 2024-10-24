/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

import CosmeticPage from "../pages/CosmeticPage";  
import SkinPage from "../pages/SkinPage";        

const Navbar = () => {
  const [activePage, setActivePage] = useState('Cosmetic');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      console.log('Searching for:', searchQuery);
      // Handle the search functionality here
    }
  };

  return (
    <div className="bg-black text-white py-5">
      {/* Yushu Logo */}
      <div className="flex justify-center mb-4">
        <h1 className="text-2xl font-bold">Yushu</h1>
      </div>

      {/* Navbar Section */}
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4">
        {/* Left navigation */}
        <nav className="flex space-x-4">
          <NavLink to="/" className="hover:text-gray-400">Home</NavLink>
          <NavLink to="/shop" className="hover:text-gray-400">Shop</NavLink>
          <NavLink to="/best-seller" className="hover:text-gray-400">Best seller</NavLink>
          <NavLink to="/about-us" className="hover:text-gray-400">About us</NavLink>
        </nav>

        {/* Right Section (Cart, Wishlist, Search Bar) */}
        <div className="flex items-center space-x-4">
          <button className="text-gray-400 hover:text-white">
            <i className="far fa-heart"></i>
          </button>
          <button className="text-gray-400 hover:text-white">
            <i className="fas fa-shopping-cart"></i>
          </button>
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-600 text-white px-4 py-2 rounded-full focus:outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleSearch}
          />
        </div>
      </div>

      {/* Toggle Buttons (Cosmetic / Skin) */}
      <div className="flex justify-center mt-8">
        <div className="flex space-x-4 bg-gray-800 p-2 rounded-full">
          <button
            onClick={() => setActivePage('Cosmetic')}
            className={`${
              activePage === 'Cosmetic' ? 'bg-white text-black' : 'text-white'
            } px-4 py-2 rounded-full`}
          >
            Cosmetic
          </button>
          <button
            onClick={() => setActivePage('Skin')}
            className={`${
              activePage === 'Skin' ? 'bg-white text-black' : 'text-white'
            } px-4 py-2 rounded-full`}
          >
            Skin
          </button>
        </div>
      </div>

      {/* Page Content (Landing Pages) */}
      <div className="mt-12 text-center">
        {activePage === 'Cosmetic' ? <CosmeticPage /> : <SkinPage />}
      </div>
    </div>
  );
};

export default Navbar;