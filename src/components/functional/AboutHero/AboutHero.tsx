import Image from "next/image";
import Button from "@/components/ui/Button/Button";
import Tag from "@/components/ui/Tag/Tag";
import { IAboutHero } from "@/types/types";

export default function AboutHero(props: IAboutHero) {
  const { tagText, title, description, image, ctas } = props;

  return (
    <section className="pt-24 pb-16 px-4 sm:px-8 md:px-12 lg:px-[164px]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Content Section */}
          <div className="w-full lg:w-1/2 flex flex-col">
            {tagText && (
              <div className="mb-6">
                <Tag text={tagText} />
              </div>
            )}
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              {title}
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              {ctas.map((cta, index) => (
                <Button
                  key={index}
                  variant={cta.variant}
                  size={cta.size}
                  className={`${cta.classname || ""}`}
                >
                  {cta.title}
                </Button>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative">
              <Image
                src={image.url}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="object-contain max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}