'use client'

import { useState } from 'react';

interface BlogSidebarProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  searchTerm: string;
  onSearchChange: (search: string) => void;
}

export default function BlogSidebar({
  categories,
  selectedCategory,
  onCategoryChange,
  searchTerm,
  onSearchChange
}: BlogSidebarProps) {
  return (
    <div className="w-full lg:w-80 bg-white p-6">
      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-900 mb-6">All Blogs</h2>
      
      {/* Search Input */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search Blogs"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 placeholder-gray-400"
        />
      </div>

      {/* Categories */}
      <div className="space-y-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
              selectedCategory === category
                ? 'bg-blue-50 text-blue-600 font-semibold border-l-4 border-blue-600'
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Additional Info */}
      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <p className="text-sm text-gray-600 leading-relaxed">
          Thoughts on the future of work, from the people and team creating it.
        </p>
      </div>
    </div>
  );
}