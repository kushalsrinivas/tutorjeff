import React from "react";

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 flex flex-col gap-4">
      <div className="neo-brutal-box bg-white p-4">
        <ul className="space-y-4">
          <li className="flex items-center gap-2">
            <i className="bi bi-collection"></i> My decks
          </li>
          <li className="flex items-center gap-2">
            <i className="bi bi-graph-up"></i> Progress
          </li>
          <li className="flex items-center gap-2">
            <i className="bi bi-person"></i> Profile
          </li>
          <li className="flex items-center gap-2">
            <i className="bi bi-globe"></i> Public decks
          </li>
        </ul>
      </div>
      <button className="neo-brutal-button bg-purple-900 text-white p-3 w-full">Learn</button>
      <button className="neo-brutal-button bg-white p-3 w-full">Add</button>
    </aside>
  );
};

export default Sidebar;
