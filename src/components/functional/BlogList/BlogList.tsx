'use client'

import { useState, useEffect, useMemo } from 'react';
import BlogSidebar from '../BlogSidebar/BlogSidebar';
import BlogCard from '../BlogCard/BlogCard';
import { ShimmerGrid } from '../../ui/ShimmerLoader/ShimmerLoader';

interface BlogPost {
  id: number;
  title: string;
  description: string;
  image?: string;
  readMoreText: string;
  author: {
    name: string;
    avatar?: string;
    title?: string;
  };
  tag: string;
  category: string;
  slug: string;
}

interface BlogListProps {
  posts: BlogPost[];
  categories: string[];
}

export default function BlogList(props: BlogListProps) {
  const { posts, categories } = props;
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Simulate loading when filters change
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [selectedCategory, searchTerm]);

  // Filter posts based on category and search term
  const filteredPosts = useMemo(() => {
    let filtered = posts;

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  }, [posts, selectedCategory, searchTerm]);

  const allCategories = ['All', ...categories];

  return (
    <section className="py-12 px-4 sm:px-8 md:px-12 lg:px-[164px] bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:flex-shrink-0">
            <BlogSidebar
              categories={allCategories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
            />
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {isLoading ? (
              <ShimmerGrid count={4} />
            ) : (
              <>
                {filteredPosts.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-gray-500 text-lg">No blogs found matching your criteria.</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {filteredPosts.map((post, index) => (
                      <div
                        key={post.id}
                        className={`transform transition-all duration-300 hover:scale-105 ${
                          !isLoading ? `blog-card-enter blog-card-enter-${index % 8}` : ''
                        }`}
                      >
                        <BlogCard
                          title={post.title}
                          description={post.description}
                          image={post.image}
                          readMoreText={post.readMoreText}
                          author={post.author}
                          tag={post.tag}
                          slug={post.slug}
                          className="h-full"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}