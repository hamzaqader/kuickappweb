import Image from "next/image";

interface Office {
  name: string;
  image: string;
  alt: string;
}

interface OfficeShowcaseProps {
  offices: Office[];
}

export default function OfficeShowcase(props: OfficeShowcaseProps) {
  const { offices } = props;

  return (
    <section className="py-16 px-4 sm:px-8 md:px-12 lg:px-[164px] bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {offices.map((office, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm">
              {/* Office Image */}
              <div className="relative w-full h-64 bg-gray-200">
                <Image
                  src={office.image}
                  alt={office.alt}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              
              {/* Office Name */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {office.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}