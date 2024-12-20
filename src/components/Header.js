import React from "react";

const Header = () => {
  return (
    <header className="bg-red-500 text-white py-2 shadow-lg">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <a href="/"> {/* Clicking this will refresh the page */}
            <img
              src="/logo.png" // Update this path to match your logo's location
              alt="Eko Christmas Sales Logo"
              className="h-14 w-auto" // Adjust height for consistent sizing
            />
          </a>
        </div>
        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-4 mr-8">
           
            <li><a href="#products" className="hover:underline">Order Now</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
