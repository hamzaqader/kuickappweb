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
  editorialhero: dynamic(
    () => import("@/components/functional/EditorialHero/EditorialHero")
  ),
  features: dynamic(
    () => import("@/components/functional/Features/Features")
  ),
  kuickappstandsout: dynamic(
    () =>
      import(
        "@/components/functional/KuickAppStandsOut/KuickAppStandsOut"
      )
  ),
  editorialimagecarousel: dynamic(
    () =>
      import(
        "@/components/functional/EditorialImageCarousel/EditorialImageCarousel"
      )
  ),


  editorialsinglecolumn: dynamic(
    () =>
      import(
        "@/components/functional/EditorialSingleColumn/EditorialSingleColumn"
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
  statistics: dynamic(() => import("@/components/functional/Statistics/Statistics")),
  abouthero: dynamic(() => import("@/components/functional/AboutHero/AboutHero")),
  aboutfeatures: dynamic(() => import("@/components/functional/AboutFeatures/AboutFeatures")),
  capabilities: dynamic(() => import("@/components/functional/Capabilities/Capabilities")),
  solutionhero: dynamic(() => import("@/components/functional/SolutionHero/SolutionHero")),
  bloghero: dynamic(() => import("@/components/functional/BlogHero/BlogHero")),
  bloglist: dynamic(() => import("@/components/functional/BlogList/BlogList")),
  blogsidebar: dynamic(() => import("@/components/functional/BlogSidebar/BlogSidebar")),
  blogcard: dynamic(() => import("@/components/functional/BlogCard/BlogCard")),
  blogdetail: dynamic(() => import("@/components/functional/BlogDetail/BlogDetail")),
  careerhero: dynamic(() => import("@/components/functional/CareerHero/CareerHero")),
  officeshowcase: dynamic(() => import("@/components/functional/OfficeShowcase/OfficeShowcase")),
  joblistings: dynamic(() => import("@/components/functional/JobListings/JobListings")),
  jobfilters: dynamic(() => import("@/components/functional/JobFilters/JobFilters")),
  pricinghero: dynamic(() => import("@/components/functional/PricingHero/PricingHero")),
  pricingplans: dynamic(() => import("@/components/functional/PricingPlans/PricingPlans")),
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
