import Tag from "@/components/ui/Tag/Tag";

interface BlogHeroProps {
  tagText: string;
  title: string;
}

export default function BlogHero(props: BlogHeroProps) {
  const { tagText, title } = props;

  return (
    <section className="py-20 px-4 sm:px-8 md:px-12 lg:px-[164px] bg-white">
      <div className="max-w-4xl mx-auto text-center">
        {/* Tag */}
        <div className="flex justify-center mb-8">
          <Tag>{tagText}</Tag>
        </div>

        {/* Main title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 leading-tight">
          {title}
        </h1>
      </div>
    </section>
  );
}