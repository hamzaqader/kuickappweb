import { IKuickAppStandsOut } from "@/types/types";
import Icon from "@/components/ui/Icon/Icon";

export default function KuickAppStandsOut(props: IKuickAppStandsOut) {
  const { title, subtitle, features, benefits } = props;

  return (
    <section className="py-16 px-4 sm:px-8 md:px-12 lg:px-[164px]">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            {subtitle}
          </p>
        </div>

    
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
      
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
       
                <div className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-1">
                  <svg 
                    width="14" 
                    height="10" 
                    viewBox="0 0 14 10" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M1 5L5 9L13 1" 
                      stroke="white" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`${benefit.backgroundColor} rounded-2xl p-6 min-h-[200px] flex flex-col`}
              >
                {/* Icon */}
                <div className="mb-4">
                  <Icon 
                    name={benefit.icon} 
                    size="40"
                    className="text-gray-700"
                  />
                </div>
                
                {/* Content */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed flex-1">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 