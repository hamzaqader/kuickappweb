import React from "react";
import clsx from "clsx";
import Icon from "../Icon/Icon";

interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export default function Tag({ children, className }: TagProps) {
  return (
    <span
      className={clsx(
        `inline-flex items-center gap-2 transition-colors
         bg-white rounded-lg
         px-4 py-2 text-base
         sm:px-5 sm:py-[10px] sm:text-lg`,
        className
      )}
    >
      {children}
      <Icon
        name="arrow-right.svg"
        size="12"
        fill="#0069D5"
        className="bg-[#0069D5] p-[6px] sm:p-1 rounded-lg"
      />
    </span>
  );
}
