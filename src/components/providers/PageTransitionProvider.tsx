"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { PageLoader } from "@/components/ui/Loader/Loader";

interface PageTransitionContextType {
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
}

const PageTransitionContext = createContext<PageTransitionContextType>({
  isLoading: false,
  setLoading: () => {},
});

export const usePageTransition = () => useContext(PageTransitionContext);

interface PageTransitionProviderProps {
  children: React.ReactNode;
  showLoader?: boolean;
  loaderDelay?: number;
}

export default function PageTransitionProvider({ 
  children, 
  showLoader = true,
  loaderDelay = 100 // Small delay to avoid flashing for fast transitions
}: PageTransitionProviderProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (isLoading && showLoader) {
      // Add a small delay before showing the loader to avoid flashing
      timeoutId = setTimeout(() => {
        setShowLoading(true);
      }, loaderDelay);
    } else {
      setShowLoading(false);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [isLoading, showLoader, loaderDelay]);

  // Hide loader when pathname changes (navigation complete)
  useEffect(() => {
    setIsLoading(false);
    setShowLoading(false);
  }, [pathname]);

  const setLoading = (loading: boolean) => {
    setIsLoading(loading);
  };

  return (
    <PageTransitionContext.Provider value={{ isLoading, setLoading }}>
      {children}
      {showLoader && <PageLoader isLoading={showLoading} />}
    </PageTransitionContext.Provider>
  );
}

// Hook for programmatic navigation with loader
export function useNavigationWithLoader() {
  const router = useRouter();
  const { setLoading } = usePageTransition();

  const navigateTo = (href: string) => {
    setLoading(true);
    router.push(href);
  };

  const replaceTo = (href: string) => {
    setLoading(true);
    router.replace(href);
  };

  return {
    navigateTo,
    replaceTo,
    router,
  };
}