import { useState } from 'react';

function Sidebar() {
  const [selectedSort, setSelectedSort] = useState('relevancy');

  return (
    <div className="w-64 px-2 py-2 border-r border-gray-200 text-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-md">FILTER & SORT</h2>
        <button className="text-gray-400 text-xs hover:underline">Clear All</button>
      </div>

      {/* Sort By */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">SORT BY</h3>
        <div className="space-y-2">
          {['Price: Low to High', 'Price: High to Low', 'Relevancy', 'Newest'].map((label) => {
            const value = label.toLowerCase().replace(/[^a-z]/g, '');
            return (
              <label key={value} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="sort"
                  value={value}
                  checked={selectedSort === value}
                  onChange={() => setSelectedSort(value)}
                  className="accent-black"
                />
                <span>{label}</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Gender */}
      <div className="mb-4">
        <h3 className="font-bold cursor-pointer">GENDER</h3>
      </div>

      {/* Size */}
      <div className="mb-4">
        <h3 className="font-bold cursor-pointer">SIZE</h3>
      </div>

      {/* Activity */}
      <div className="mb-4">
        <h3 className="font-bold cursor-pointer">ACTIVITY</h3>
      </div>
    </div>
  );
}

export default Sidebar;
