import Button from "@/components/ui/Button/Button";
import Tag from "@/components/ui/Tag/Tag";
import {
  IEditorialSingleColumnData,
} from "@/types/types";
import Image from "next/image";


export default function EditorialSingleColumn(props: IEditorialSingleColumnData) {
  const { tagline, title, description, image, ctas } = props;

  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-[164px] mb-[240px]">
      <section className="bg-[#F1F8FE] rounded-3xl overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center justify-end gap-12">
          <div className="w-full lg:w-1/2 relative aspect-[4/3] bottom-0">
            <Image
              src={image.url}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="absolute"
              style={{
                bottom: image.position?.bottom,
                left: image.position?.left,
              }}
            />
          </div>

          <div className="w-full py-12 pr-[85px] lg:w-1/2 text-center lg:text-left">
            <div className="mb-[24px]">
              <Tag className="!py-1 !px-2">{tagline}</Tag>
            </div>

            <h2 className="text-4xl md:text-[40px] font-semibold mb-6">
              {title}
            </h2>

            <p className="text-base font-light mb-8 max-w-xl">{description}</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {ctas.map((btn, index) => (
                <Button
                  key={index}
                  variant={btn.variant}
                  size={btn.size}
                  className={btn.classname || ""}
                >
                  {btn.title}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
