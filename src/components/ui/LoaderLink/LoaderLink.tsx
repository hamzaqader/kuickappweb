"use client";

import React from "react";
import Link from "next/link";
import { usePageTransition } from "@/components/providers/PageTransitionProvider";

interface LoaderLinkProps extends React.ComponentProps<typeof Link> {
  children: React.ReactNode;
  showLoader?: boolean;
}

export default function LoaderLink({ 
  children, 
  showLoader = true, 
  onClick,
  ...props 
}: LoaderLinkProps) {
  const { setLoading } = usePageTransition();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Only show loader for different routes
    const currentPath = window.location.pathname;
    const targetPath = typeof props.href === 'string' ? props.href : props.href.pathname || '';
    
    if (showLoader && currentPath !== targetPath) {
      setLoading(true);
    }

    if (onClick) {
      onClick(e);
    }
  };

  return (
    <Link {...props} onClick={handleClick}>
      {children}
    </Link>
  );
}

// Export named version for convenience
export { LoaderLink };