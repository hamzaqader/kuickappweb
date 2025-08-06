import Button from "@/components/ui/Button/Button";
import { EditorialButton, ButtonVariant, ButtonSize } from "@/types/types";

interface CareerHeroProps {
  title: string;
  subtitle: string;
  description: string;
  cta: EditorialButton;
}

export default function CareerHero(props: CareerHeroProps) {
  const { title, subtitle, description, cta } = props;

  return (
    <section className="mt-[100px] py-20 px-4 sm:px-8 md:px-12 lg:px-[164px] bg-white text-center">
      <div className="max-w-4xl mx-auto">
        {/* Main title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-4">
          {title}
        </h1>

        {/* Subtitle */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-8">
          {subtitle}
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-10 max-w-3xl mx-auto">
          {description}
        </p>

        {/* CTA Button */}
        <Button
          variant={cta.variant}
          size={cta.size}
          className={cta.classname || ""}
        >
          {cta.title}
        </Button>
      </div>
    </section>
  );
}