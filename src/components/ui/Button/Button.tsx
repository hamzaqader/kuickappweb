import React from "react";
import clsx from "clsx";
import { ButtonVariant, ButtonSize } from "@/types/types";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const variantClasses: Record<ButtonVariant, string> = {
  [ButtonVariant.BTN_PRIMARY]: "bg-[#0069D5] text-white",
  [ButtonVariant.BTN_SECONDARY]: "bg-[#EFF8FF] text-[#2F70B1]",
  [ButtonVariant.BTN_TERTIARY] : "bg-[#000000] text-white"
};

// Now includes rounded corners & font-weight
const sizeClasses: Record<ButtonSize, string> = {
  [ButtonSize.BTN_SMALL]: "px-3 py-1 text-sm font-medium rounded-md",
  [ButtonSize.BTN_MEDIUM]: "px-6 py-2 text-base font-semibold rounded-lg",
  [ButtonSize.BTN_LARGE]: "px-8 py-3 text-lg font-bold rounded-2xl",
};

export default function Button({
  variant = ButtonVariant.BTN_PRIMARY,
  size = ButtonSize.BTN_MEDIUM,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "transition duration-200 cursor-pointer",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
