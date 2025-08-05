"use client";

import React from "react";
import LoaderLink from "@/components/ui/LoaderLink/LoaderLink";
import clsx from "clsx";

export type AnchorLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: React.ReactNode;
  external?: boolean;
};

export default function AnchorLink({
  href,
  children,
  className,
  external = false,
  ...props
}: AnchorLinkProps) {
  const classes = clsx(
    "inline-block transition-colors duration-200 text-base hover:text-primary",
    className
  );

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <LoaderLink href={href} className={classes} {...props}>
      {children}
    </LoaderLink>
  );
}
