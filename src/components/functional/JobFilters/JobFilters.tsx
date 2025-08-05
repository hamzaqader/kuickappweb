'use client'

import { useState } from 'react';

interface JobFiltersProps {
  departments: string[];
  locations: string[];
  employmentTypes: string[];
  selectedDepartment: string;
  selectedLocation: string;
  selectedEmploymentType: string;
  onDepartmentChange: (department: string) => void;
  onLocationChange: (location: string) => void;
  onEmploymentTypeChange: (type: string) => void;
}

export default function JobFilters({
  departments,
  locations,
  employmentTypes,
  selectedDepartment,
  selectedLocation,
  selectedEmploymentType,
  onDepartmentChange,
  onLocationChange,
  onEmploymentTypeChange
}: JobFiltersProps) {
  return (
    <div className="mb-8">
      <h3 className="text-sm font-medium text-gray-600 mb-4">Filters:</h3>
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Department Filter */}
        <div className="flex-1">
          <select
            value={selectedDepartment}
            onChange={(e) => onDepartmentChange(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-700"
          >
            <option value="">Department</option>
            {departments.map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
          </select>
        </div>

        {/* Location Filter */}
        <div className="flex-1">
          <select
            value={selectedLocation}
            onChange={(e) => onLocationChange(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-700"
          >
            <option value="">Location</option>
            {locations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>

        {/* Employment Type Filter */}
        <div className="flex-1">
          <select
            value={selectedEmploymentType}
            onChange={(e) => onEmploymentTypeChange(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-700"
          >
            <option value="">Employment Type</option>
            {employmentTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}