import React from "react";
import { Button } from "~/components/ui/button";

const Navbar: React.FC = () => {
  return (
    <nav className="mb-6 border-2 border-black bg-yellow-300 p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <span className="text-3xl">⭐</span>
          <span className="text-2xl font-bold">Gizmo</span>
        </div>

        {/* Action Buttons and Icons */}
        <div className="flex items-center gap-4">
          {/* Add Deck Button */}
          <Button variant="default" className="border-black bg-white shadow-md">
            Add deck
          </Button>

          {/* Learn Button */}
          <Button
            variant="default"
            className="bg-purple-900 text-white shadow-md"
          >
            Learn
          </Button>

          {/* Icon Group */}
          <div className="flex items-center gap-3">
            <i className="bi bi-gift text-xl"></i>
            <i className="bi bi-search text-xl"></i>
            <i className="bi bi-bell text-xl"></i>
            {/* Profile Circle */}
            <div className="h-8 w-8 rounded-full border-2 border-black bg-green-400 shadow-lg"></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
