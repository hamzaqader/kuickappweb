import Accordion from "@/components/ui/Accordian/Accordian";
import { IFaq } from "@/types/types";

export default function Faq({ title, items }: IFaq) {
  return (
    <section className="max-w-5xl mx-auto mb-[240px] px-4 py-12">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 text-left">
        {title}
      </h2>
      <Accordion items={items} />
    </section>
  );
}
