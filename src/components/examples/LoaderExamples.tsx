"use client";

import React, { useState } from "react";
import Loader, { PageLoader, InlineLoader } from "@/components/ui/Loader/Loader";
import LoaderLink from "@/components/ui/LoaderLink/LoaderLink";
import { useNavigationWithLoader } from "@/components/providers/PageTransitionProvider";
import Button from "@/components/ui/Button/Button";

export default function LoaderExamples() {
  const [showPageLoader, setShowPageLoader] = useState(false);
  const { navigateTo } = useNavigationWithLoader();

  const simulatePageLoader = () => {
    setShowPageLoader(true);
    setTimeout(() => setShowPageLoader(false), 3000);
  };

  return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl font-bold mb-6">KuickApp Loader Examples</h1>

      {/* Basic Loader */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Basic Rotating Loader</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <Loader size={48} text="Loading..." />
        </div>
      </section>

      {/* Different Sizes */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Different Sizes</h2>
        <div className="bg-gray-50 p-6 rounded-lg flex items-center gap-8">
          <div className="text-center">
            <Loader size={24} showText={false} />
            <p className="text-sm mt-2">Small (24px)</p>
          </div>
          <div className="text-center">
            <Loader size={48} showText={false} />
            <p className="text-sm mt-2">Medium (48px)</p>
          </div>
          <div className="text-center">
            <Loader size={72} showText={false} />
            <p className="text-sm mt-2">Large (72px)</p>
          </div>
        </div>
      </section>

      {/* Inline Loader */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Inline Loader</h2>
        <div className="bg-gray-50 rounded-lg">
          <InlineLoader size={32} />
        </div>
      </section>

      {/* Page Loader Demo */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Page Loader (Full Screen)</h2>
        <Button 
          onClick={simulatePageLoader}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Show Page Loader (3 seconds)
        </Button>
        <PageLoader isLoading={showPageLoader} />
      </section>

      {/* Navigation with Loader */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Navigation with Automatic Loader</h2>
        <div className="space-y-4">
          <p className="text-gray-600">These links will automatically show the loader during navigation:</p>
          <div className="flex gap-4">
            <LoaderLink href="/" className="text-blue-600 underline">
              Go to Home
            </LoaderLink>
            <LoaderLink href="/about" className="text-blue-600 underline">
              Go to About
            </LoaderLink>
            <LoaderLink href="/pricing" className="text-blue-600 underline">
              Go to Pricing
            </LoaderLink>
          </div>
        </div>
      </section>

      {/* Programmatic Navigation */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Programmatic Navigation</h2>
        <div className="space-y-4">
          <p className="text-gray-600">Use the hook for programmatic navigation with loader:</p>
          <div className="flex gap-4">
            <Button 
              onClick={() => navigateTo("/solution")}
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
              Navigate to Solution
            </Button>
            <Button 
              onClick={() => navigateTo("/blog")}
              className="bg-purple-600 text-white px-4 py-2 rounded"
            >
              Navigate to Blog
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}