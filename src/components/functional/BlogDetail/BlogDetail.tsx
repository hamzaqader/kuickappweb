'use client'

import { useState, useEffect } from 'react';
import Image from "next/image";
import LoaderLink from "@/components/ui/LoaderLink/LoaderLink";
import { ShimmerGrid } from '../../ui/ShimmerLoader/ShimmerLoader';

interface BlogDetailProps {
  post: {
    id: number;
    title: string;
    content: string;
    image?: string;
    author: {
      name: string;
      avatar?: string;
      title?: string;
    };
    tag: string;
    publishedDate: string;
    category: string;
  };
}

function BlogDetailShimmer() {
  return (
    <div className="flex max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 py-12 gap-8 animate-pulse">
      {/* Left Sidebar shimmer */}
      <div className="hidden lg:block w-32 flex-shrink-0">
        <div className="h-4 w-20 bg-gray-200 rounded mb-4"></div>
        <div className="flex flex-col space-y-3">
          <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
          <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
          <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
        </div>
      </div>

      {/* Main Content shimmer */}
      <div className="flex-1 max-w-4xl">
        {/* Back link shimmer */}
        <div className="flex items-center mb-6">
          <div className="w-6 h-6 bg-gray-200 rounded-full mr-3"></div>
          <div className="h-4 w-16 bg-gray-200 rounded"></div>
        </div>
        
        {/* Meta info shimmer */}
        <div className="h-4 w-64 bg-gray-200 rounded mb-6"></div>
        
        {/* Title shimmer */}
        <div className="space-y-4 mb-8">
          <div className="h-12 bg-gray-200 rounded w-full"></div>
          <div className="h-12 bg-gray-200 rounded w-3/4"></div>
        </div>
        
        {/* Author shimmer */}
        <div className="flex items-center space-x-4 mb-8">
          <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
          <div className="space-y-2">
            <div className="h-4 w-24 bg-gray-200 rounded"></div>
            <div className="h-3 w-20 bg-gray-200 rounded"></div>
          </div>
        </div>
        
        {/* Main image shimmer */}
        <div className="w-full h-96 bg-gray-200 rounded-lg mb-8"></div>
        
        {/* Content shimmer */}
        <div className="space-y-4">
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          <div className="h-4 bg-gray-200 rounded w-4/5"></div>
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        </div>
      </div>
    </div>
  );
}

export default function BlogDetail({ post }: BlogDetailProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <BlogDetailShimmer />;
  }

  return (
    <div className="flex max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 py-12 gap-8">
      {/* Left Sidebar - Share This Post */}
      <div className="hidden lg:block w-32 flex-shrink-0">
        <div className="sticky top-8">
          <p className="text-sm text-gray-600 mb-4">Share This Post</p>
          <div className="flex flex-col space-y-3">
            <button className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </button>
            <button className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
              </svg>
            </button>
            <button className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}  
      <article className="flex-1 max-w-4xl">
        {/* Back to all posts */}
        <div className="mb-6">
          <LoaderLink 
            href="/blog" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3">
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </div>
            All post
          </LoaderLink>
        </div>

        {/* Published info */}
        <div className="mb-6">
          <p className="text-sm text-gray-500">
            Published {post.publishedDate} in {post.category}
          </p>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-8">
          {post.title}
        </h1>

        {/* Author info */}
        <div className="flex items-center space-x-4 mb-8">
          <div className="relative w-12 h-12 bg-gray-300 rounded-full overflow-hidden flex-shrink-0">
            {post.author.avatar ? (
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                fill
                style={{ objectFit: "cover" }}
              />
            ) : (
              <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-600 text-lg font-medium">
                {post.author.name.charAt(0)}
              </div>
            )}
          </div>
          <div>
            <p className="font-semibold text-gray-900">{post.author.name}</p>
            {post.author.title && (
              <p className="text-sm text-gray-500">{post.author.title}</p>
            )}
          </div>
        </div>

        {/* Main content image */}
        <div className="relative w-full h-96 bg-gray-200 rounded-lg mb-8 overflow-hidden">
          {post.image ? (
            <Image
              src={post.image}
              alt={post.title}
              fill
              style={{ objectFit: "cover" }}
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-400">Blog Image Placeholder</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <div className="text-gray-700 leading-relaxed space-y-6">
            {post.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-base leading-7">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}