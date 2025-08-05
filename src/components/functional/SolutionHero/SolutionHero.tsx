import Image from "next/image";
import Button from "@/components/ui/Button/Button";
import Tag from "@/components/ui/Tag/Tag";
import { EditorialButton, ButtonVariant, ButtonSize } from "@/types/types";

interface SolutionHeroProps {
  backgroundImage: string;
  tagText: string;
  title: string;
  description: string;
  leftImage1: string;
  leftImage2: string;
  ctas: EditorialButton[];
}

export default function SolutionHero(props: SolutionHeroProps) {
  const { backgroundImage, tagText, title, description, leftImage1, leftImage2, ctas } = props;

  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-[164px] py-20"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Left decorative image */}
      <div className="absolute left-4 sm:left-8 md:left-16 top-1/2 transform -translate-y-1/2 hidden lg:block">
        <div className="relative w-16 h-16 opacity-70">
          <Image
            src={leftImage1}
            alt="Solution icon 1"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>

      {/* Right decorative image */}
      <div className="absolute right-4 sm:right-8 md:right-16 top-1/2 transform -translate-y-1/2 hidden lg:block">
        <div className="relative w-16 h-16 opacity-70">
          <Image
            src={leftImage2}
            alt="Solution icon 2"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto z-10">
        {/* Tag */}
        <div className="flex justify-center mb-6">
          <Tag>{tagText}</Tag>
        </div>

        {/* Main title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 leading-tight">
          {title}
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl text-center text-gray-700 mb-10 max-w-3xl leading-relaxed">
          {description}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {ctas.map((cta, index) => (
            <Button
              key={index}
              variant={cta.variant}
              size={cta.size}
              className={`w-full sm:w-auto ${cta.classname || ""}`}
            >
              {cta.title}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}