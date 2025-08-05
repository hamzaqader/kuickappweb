export type BaseEntry = {
  name: string;
  data: any;
};

export enum ButtonVariant {
  BTN_PRIMARY = "btn-primary",
  BTN_SECONDARY = "btn-secondary",
  BTN_TERTIARY = "btn-tertiary",
}

export enum ButtonSize {
  "BTN_SMALL" = "btn-small",
  "BTN_LARGE" = "btn-large",
  "BTN_MEDIUM" = "btn-medium",
}

export interface EditorialImage {
  url: string;
  alt: string;
  width: number;
  height: number;
  position?: {
    left: string;
    bottom: string;
  };
}

export interface EditorialButton {
  title: string;
  variant: ButtonVariant;
  size: ButtonSize;
  classname?: string;
}

export interface IEditorialBanner {
  backgroundImage: string;
  tagText: string;
  title: string;
  description: string;
  ctas: EditorialButton[];
  staticImages: {
    src: string;
    alt: string;
  }[];
}

export interface IEditorialSingleColumnData {
  tagline: string;
  title: string;
  description: string;
  image: EditorialImage;
  ctas: EditorialButton[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface IFaq {
  title: string;
  items: FaqItem[];
}

export interface IEditorialImageCarouselProps {
  images: EditorialImage[];
}

export interface IEditorialHero {
  tagText?: string;
  title: string;
  titleHighlights?: string[];
  description: string;
  image: {
    url: string;
    alt: string;
    width: number;
    height: number;
    position?: string;
  };
  ctas: EditorialButton[];
}

export interface FeatureItem {
  title: string;
  description: string;
  image: {
    url: string;
    alt: string;
    width: number;
    height: number;
  };
}

export interface IFeatures {
  tagline?: string;
  title: string;
  subtitle?: string;
  features: FeatureItem[];
  ctas?: EditorialButton[];
}

export interface StandOutFeature {
  title: string;
  description: string;
}

export interface StandOutBenefit {
  icon: string;
  title: string;
  description: string;
  backgroundColor: string;
}

export interface IKuickAppStandsOut {
  title: string;
  subtitle: string;
  features: StandOutFeature[];
  benefits: StandOutBenefit[];
}

export interface TestimonialItem {
  companyName: string;
  quote: string;
  avatar?: string;
}

export interface ITestimonials {
  title: string;
  subtitle: string;
  userAvatars: string[];
  testimonials: TestimonialItem[];
}

export interface StatisticItem {
  number: string;
  label: string;
}

export interface IStatistics {
  stats: StatisticItem[];
}

export interface IAboutHero {
  tagText?: string;
  title: string;
  description: string;
  image: {
    url: string;
    alt: string;
    width: number;
    height: number;
  };
  ctas: EditorialButton[];
}

export interface AboutFeatureItem {
  icon: string;
  title: string;
  description: string;
  backgroundColor?: string;
}

export interface IAboutFeatures {
  title?: string;
  subtitle?: string;
  features: AboutFeatureItem[];
}

export interface CapabilityItem {
  title: string;
  description: string;
}

export interface CapabilityTestimonial {
  companyName: string;
  companyLogo?: string;
  quote: string;
  authorName: string;
  authorTitle: string;
}

export interface ICapabilities {
  title?: string;
  capabilities: CapabilityItem[];
  testimonial?: CapabilityTestimonial;
}