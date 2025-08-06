import Tag from "@/components/ui/Tag/Tag";

interface PricingHeroProps {
  specialOffer: string;
  title: string;
  description: string;
}

export default function PricingHero(props: PricingHeroProps) {
  const { specialOffer, title, description } = props;

  return (
    <section className="mt-[100px] py-20 px-4 sm:px-8 md:px-12 lg:px-[164px] bg-white text-center">
      <div className="max-w-4xl mx-auto">
        {/* Special Offer Tag */}
        <div className="flex justify-center mb-8">
          <Tag>{specialOffer}</Tag>
        </div>

        {/* Main title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-8">
          {title}
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
          {description}
        </p>
      </div>
    </section>
  );
}