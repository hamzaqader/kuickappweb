"use client";
import { useState } from "react";
import Image from "next/image";
import { ICapabilities } from "@/types/types";

export default function Capabilities(props: ICapabilities) {
  const { title, capabilities, testimonial } = props;
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0); // First item expanded by default

  const toggleExpanded = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 sm:px-8 md:px-12 lg:px-[164px]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Capabilities */}
          <div>
            {title && (
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-12">
                {title}
              </h2>
            )}

            <div className="space-y-4">
              {capabilities.map((capability, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  {/* Header */}
                  <button
                    onClick={() => toggleExpanded(index)}
                    className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors duration-200"
                  >
                    <h3 className="text-xl font-semibold text-gray-900">
                      {capability.title}
                    </h3>
                    <div className="ml-4 flex-shrink-0">
                      <div
                        className={`w-6 h-6 flex items-center justify-center transition-transform duration-300 ${
                          expandedIndex === index ? 'rotate-45' : 'rotate-0'
                        }`}
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-gray-600"
                        >
                          <path
                            d="M12 5V19M5 12H19"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </button>

                  {/* Collapsible Content */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      expandedIndex === index
                        ? 'max-h-96 opacity-100'
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">
                        {capability.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Testimonial */}
          {testimonial && (
            <div className="lg:pl-8">
              <div className="bg-gray-50 rounded-2xl p-8">
                {/* Company Logo */}
                {testimonial.companyLogo && (
                  <div className="mb-6">
                    <Image
                      src={testimonial.companyLogo}
                      alt={testimonial.companyName}
                      width={150}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                )}

                {/* Quote */}
                <blockquote className="text-lg text-gray-700 leading-relaxed mb-6">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div>
                  <div className="font-semibold text-gray-900 text-lg">
                    {testimonial.authorName}
                  </div>
                  <div className="text-gray-600">
                    {testimonial.authorTitle}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}