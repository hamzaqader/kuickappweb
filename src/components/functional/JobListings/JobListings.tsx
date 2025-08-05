'use client'

import { useState, useEffect, useMemo } from 'react';
import JobFilters from '../JobFilters/JobFilters';
import { ShimmerGrid } from '../../ui/ShimmerLoader/ShimmerLoader';

interface Job {
  id: number;
  title: string;
  department: string;
  location: string;
  employmentType: string;
  description: string;
  category: string;
}

interface JobListingsProps {
  jobs: Job[];
  departments: string[];
  locations: string[];
  employmentTypes: string[];
}

function JobShimmer() {
  return (
    <div className="animate-pulse space-y-6">
      {/* Filters shimmer */}
      <div className="mb-8">
        <div className="h-4 w-16 bg-gray-200 rounded mb-4"></div>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 h-12 bg-gray-200 rounded-lg"></div>
          <div className="flex-1 h-12 bg-gray-200 rounded-lg"></div>
          <div className="flex-1 h-12 bg-gray-200 rounded-lg"></div>
        </div>
      </div>
      
      {/* Job listings shimmer */}
      <div className="space-y-8">
        <div>
          <div className="h-6 w-48 bg-gray-200 rounded mb-4"></div>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-50 p-4 rounded-lg">
                <div className="h-5 w-32 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 w-64 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function JobListings({ jobs, departments, locations, employmentTypes }: JobListingsProps) {
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedEmploymentType, setSelectedEmploymentType] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Simulate loading when filters change
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, [selectedDepartment, selectedLocation, selectedEmploymentType]);

  // Filter jobs based on selected filters
  const filteredJobs = useMemo(() => {
    let filtered = jobs;

    if (selectedDepartment) {
      filtered = filtered.filter(job => job.department === selectedDepartment);
    }

    if (selectedLocation) {
      filtered = filtered.filter(job => job.location === selectedLocation);
    }

    if (selectedEmploymentType) {
      filtered = filtered.filter(job => job.employmentType === selectedEmploymentType);
    }

    return filtered;
  }, [jobs, selectedDepartment, selectedLocation, selectedEmploymentType]);

  // Group jobs by category
  const jobsByCategory = useMemo(() => {
    const grouped: { [key: string]: Job[] } = {};
    filteredJobs.forEach(job => {
      if (!grouped[job.category]) {
        grouped[job.category] = [];
      }
      grouped[job.category].push(job);
    });
    return grouped;
  }, [filteredJobs]);

  const totalJobs = filteredJobs.length;

  return (
    <section className="py-16 px-4 sm:px-8 md:px-12 lg:px-[164px] bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Open Positions ({totalJobs})
          </h2>

          {/* Filters */}
          <JobFilters
            departments={departments}
            locations={locations}
            employmentTypes={employmentTypes}
            selectedDepartment={selectedDepartment}
            selectedLocation={selectedLocation}
            selectedEmploymentType={selectedEmploymentType}
            onDepartmentChange={setSelectedDepartment}
            onLocationChange={setSelectedLocation}
            onEmploymentTypeChange={setSelectedEmploymentType}
          />
        </div>

        {/* Job Listings */}
        {isLoading ? (
          <JobShimmer />
        ) : (
          <div className="space-y-12">
            {Object.keys(jobsByCategory).length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No jobs found matching your criteria.</p>
              </div>
            ) : (
              Object.entries(jobsByCategory).map(([category, categoryJobs]) => (
                <div key={category}>
                  <h3 className="text-xl font-bold text-gray-900 mb-6">
                    {category}
                  </h3>
                  <div className="space-y-4">
                    {categoryJobs.map((job) => (
                      <div
                        key={job.id}
                        className="bg-gray-50 hover:bg-gray-100 p-6 rounded-lg transition-colors cursor-pointer border border-transparent hover:border-gray-200"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">
                              {job.title}
                            </h4>
                            <p className="text-sm text-gray-600">
                              {job.department} • {job.location} • {job.employmentType}
                            </p>
                          </div>
                          <div className="mt-4 sm:mt-0 sm:ml-4">
                            <button className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors">
                              Apply Now →
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </section>
  );
}