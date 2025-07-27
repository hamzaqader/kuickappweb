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