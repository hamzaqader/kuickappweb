import Image from "next/image";
import Button from "@/components/ui/Button/Button";
import Tag from "@/components/ui/Tag/Tag";
import { IEditorialHero } from "@/types/types";

export default function EditorialHero(props: IEditorialHero) {
  const { tagText, title, titleHighlights, description, image, ctas } = props;

  const renderTitle = () => {
    if (!titleHighlights || titleHighlights.length === 0) {
      return <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">{title}</h2>;
    }

    let titleText = title;
    const highlightedTitle = titleHighlights.reduce((acc, highlight) => {
      return acc.replace(highlight, `<span class="inline-block bg-yellow-200 px-2 py-1 rounded mx-1">${highlight}</span>`);
    }, titleText);

    return (
      <h2 
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
        dangerouslySetInnerHTML={{ __html: highlightedTitle }}
      />
    );
  };

  return (
    <section className="py-16 px-4 sm:px-8 md:px-12 lg:px-[164px]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative">
              <Image
                src={image.url}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="object-contain"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2 flex flex-col">
           
    

            {renderTitle()}
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center">
              <div className="flex space-x-2 mb-4">
                <span className="bg-[#FFF4DD] text-black px-4 py-2 rounded">Build</span>
                <span className="bg-[#EFF9F9] text-black px-4 py-2 rounded transform -rotate-15">Mange</span>
                <span className="bg-[#FFF1EF] text-black px-4 py-2 rounded">Scale</span>
              </div>
            </div>
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
        </div>
      </div>
    </section>
  );
}