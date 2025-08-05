import { IStatistics } from "@/types/types";

export default function Statistics(props: IStatistics) {
  const { stats } = props;

  return (
    <section className="py-20 px-4 sm:px-8 md:px-12 lg:px-[164px]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-2">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-gray-600 font-medium leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}