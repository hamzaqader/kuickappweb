"use client";

import React from "react";
import { ReactSVG } from "react-svg";
import clsx from "clsx";

export interface LoaderProps {
  size?: number;
  className?: string;
  text?: string;
  showText?: boolean;
}

export default function Loader({ 
  size = 48, 
  className,
  text = "Loading...",
  showText = true 
}: LoaderProps) {
  return (
    <div className={clsx("flex flex-col items-center justify-center gap-3", className)}>
      {/* Rotating KuickApp Icon */}
      <div 
        className="animate-spin"
        style={{ 
          width: `${size}px`, 
          height: `${size}px`,
          animationDuration: '1s'
        }}
      >
        <ReactSVG
          src="/assets/images/kuickappicon.svg"
          beforeInjection={(svg: SVGSVGElement) => {
            svg.setAttribute("width", size.toString());
            svg.setAttribute("height", size.toString());
            svg.classList.add("text-primary");
          }}
          fallback={() => (
            <div 
              className="border-4 border-gray-200 border-t-primary rounded-full animate-spin"
              style={{ width: `${size}px`, height: `${size}px` }}
            />
          )}
        />
      </div>
      
      {/* Loading Text */}
      {showText && (
        <p className="text-sm text-gray-600 font-medium animate-pulse">
          {text}
        </p>
      )}
    </div>
  );
}

// Page Loading Overlay Component
export function PageLoader({ 
  isLoading, 
  size = 64,
  text = "Loading page..." 
}: { 
  isLoading: boolean; 
  size?: number;
  text?: string;
}) {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg border">
        <Loader size={size} text={text} />
      </div>
    </div>
  );
}

// Inline Loader for components
export function InlineLoader({ 
  size = 32, 
  text = "Loading...",
  showText = false 
}: LoaderProps) {
  return (
    <div className="flex items-center justify-center py-8">
      <Loader size={size} text={text} showText={showText} />
    </div>
  );
}