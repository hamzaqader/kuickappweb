import Button from "@/components/ui/Button/Button";
import Tag from "@/components/ui/Tag/Tag";
import { IEditorialBanner } from "@/types/types";

export default function EditorialBanner(props: IEditorialBanner) {
  const { backgroundImage, tagText, title, description, ctas } = props;

  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center  px-4 sm:px-8 md:px-12 lg:px-[164px]"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex flex-wrap justify-center w-full">
        <div className="w-full lg:w-[60%]">
          <div className="flex justify-center mb-6">
            <Tag>{tagText}</Tag>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-center capitalize mb-8 leading-tight">
            {title}
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-center mb-10">
            {description}
          </p>

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
      </div>
    </section>
  );
}
