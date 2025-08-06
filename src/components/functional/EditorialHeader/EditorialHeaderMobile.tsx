"use client";

import React, { useState } from "react";
import Image from "next/image";
import AnchorLink from "@/components/ui/AnchorLink/AnchorLink";
import Button from "@/components/ui/Button/Button";
import { ButtonSize, ButtonVariant } from "@/types/types";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "@/components/ui/Icon/Icon";

interface EditorialHeaderMobileProps {
  onContactClick: () => void;
  onBookDemoClick: () => void;
}

export default function EditorialHeaderMobile({ onContactClick, onBookDemoClick }: EditorialHeaderMobileProps) {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Solution", href: "/solution" },
    { label: "Pricing", href: "/pricing" },
    { label: "Blog", href: "/blog" },
    { label: "Career", href: "/career" },
  ];

  return (
    <div className={`fixed top-[2%] left-1/2 -translate-x-1/2 z-50 w-[95%]`}>
      <nav className="relative w-full z-50 shadow-md lg:hidden bg-white rounded-xl max-w-[90%] mx-auto mt-[5%]">
        {/* Top bar with logo and toggle */}
        <div className="flex items-center justify-between px-4 py-3">
          <AnchorLink href="/">
            <Image src="/logo.svg" alt="KuickApp logo" width={150} height={30} />
          </AnchorLink>
          <Button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="text-sm font-medium px-3 py-2 rounded-md border border-gray-300"
            variant={ButtonVariant.BTN_SECONDARY}
            size={ButtonSize.BTN_SMALL}
          >
            <Icon name="menu.svg" />
          </Button>
        </div>

        {/* Mobile Menu (shown below navbar) */}
        <AnimatePresence>
          {open && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="absolute mt-[10px] top-full left-0 w-full bg-white z-40 flex flex-col px-4 pt-4 pb-6 rounded-xl shadow-md"
            >
              <div className="flex flex-col items-center space-y-6">
                {navItems.map((item, idx) => (
                  <AnchorLink
                    key={idx}
                    href={item.href}
                    className="text-lg font-medium"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </AnchorLink>
                ))}

                <Button
                  variant={ButtonVariant.BTN_SECONDARY}
                  size={ButtonSize.BTN_MEDIUM}
                  className="w-full"
                  onClick={() => {
                    onBookDemoClick();
                    setOpen(false);
                  }}
                >
                  Book Demo
                </Button>

                <Button
                  variant={ButtonVariant.BTN_PRIMARY}
                  size={ButtonSize.BTN_MEDIUM}
                  className="w-full"
                  onClick={() => {
                    onContactClick();
                    setOpen(false);
                  }}
                >
                  Contact Us
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}
