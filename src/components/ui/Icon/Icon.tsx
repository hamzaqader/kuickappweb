"use client";

import Image from "next/image";
import React, { useMemo } from "react";
import { ReactSVG } from "react-svg";
import clsx from "clsx";

export type IconSize =
  | "12"
  | "16"
  | "20"
  | "24"
  | "32"
  | "40"
  | "48"
  | "56"
  | "64"
  | "80"
  | "84";

export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  name: string;
  size?: IconSize;
  alt?: string;
  stroke?: string; // e.g., "currentColor"
  fill?: string; // e.g., "fill-current"
  bordered?: boolean;
  bg?: string; // e.g., "bg-gray-100"
}

export default function Icon({
  name,
  size = "24",
  alt = "",
  stroke,
  fill,
  bordered,
  bg,
  className,
  ...props
}: IconProps) {
  const src = useMemo(() => `/assets/icons/${name}`, [name]);
  const ext = name.split(".").pop()?.toLowerCase();

  const wrapperCls = clsx(
    bg,
    bordered && "border rounded-full",
    `inline-block`,
    className
  );

  const dimensionCls = `w-[${size}px] h-[${size}px]`;

  if (ext === "png" || ext === "jpg" || ext === "jpeg") {
    return (
      <span className={clsx(wrapperCls, dimensionCls)} {...props}>
        <Image src={src} alt={alt} width={+size} height={+size} />
      </span>
    );
  }

  return (
    <span className={clsx(wrapperCls, dimensionCls)} {...props}>
      <ReactSVG
        src={src}
        beforeInjection={(svg: SVGSVGElement) => {
          svg.setAttribute("width", size);
          svg.setAttribute("height", size);
          if (fill) svg.classList.add(fill);
          if (stroke) svg.setAttribute("stroke", stroke);
        }}
        title={alt}
        fallback={() => <span>{alt || name}</span>}
      />
    </span>
  );
}
