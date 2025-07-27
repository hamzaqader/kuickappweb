import React from "react";
import dynamic from "next/dynamic";
import ErrorBoundary from "./ErrorBoundary";

// Raw Strapi component type
type RawStrapiComponent = {
  __component: string;
  [key: string]: any;
};

// Map of component names to dynamically imported components
const COMPONENTS: Record<string, any> = {
  editorialheader: dynamic(
    () => import("@/components/functional/EditorialHeader/EditorialHeader")
  ),
  editorialbanner: dynamic(
    () => import("@/components/functional/EditorialBanner/EditorialBanner")
  ),
  editorialsinglecolumn: dynamic(
    () =>
      import(
        "@/components/functional/EditorialSingleColumn/EditorialSingleColumn"
      )
  ),
  editorialimagecarousel: dynamic(
    () =>
      import(
        "@/components/functional/EditorialImageCarousel/EditorialImageCarousel"
      )
  ),
  testimonials: dynamic(
    () =>
      import(
        "@/components/functional/Testimonials/Testimonials"
      )
  ),
  footer: dynamic(() => import("@/components/functional/Footer/Footer")),
  faq: dynamic(() => import("@/components/functional/FAQ/Faq")),
};

type Props = {
  components: RawStrapiComponent[]; // raw data directly from Strapi
};

// Normalize function: "editorial.header" → "editorialheader"
function normalizeComponentName(name: string): string {
  return name.replace(/\./g, "").toLowerCase();
}

export function DynamicImport({ components }: Props) {
  return (
    <>
      {components.map((entry, idx) => {
        const { __component, ...data } = entry;
        const name = normalizeComponentName(__component);
        const Component = COMPONENTS[name];

        if (Component) {
          return (
            <ErrorBoundary
              key={`${name}-${idx}`}
              fallback={<p>{`Failed to load ${name}`}</p>}
            >
              <Component {...data} />
            </ErrorBoundary>
          );
        }

        return <p key={`${name}-${idx}`}>{`Missing component: ${name}`}</p>;
      })}
    </>
  );
}
