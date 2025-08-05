import Image from "next/image";
import Button from "@/components/ui/Button/Button";
import { EditorialButton, ButtonVariant, ButtonSize } from "@/types/types";

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingPlan {
  id: number;
  name: string;
  price: string;
  priceSubtext: string;
  features: PricingFeature[];
  cta: EditorialButton;
  highlighted?: boolean;
}

interface PricingPlansProps {
  plans: PricingPlan[];
}

export default function PricingPlans(props: PricingPlansProps) {
  const { plans } = props;

  return (
    <section className="py-16 px-4 sm:px-8 md:px-12 lg:px-[164px] bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`bg-white rounded-2xl p-8 shadow-sm border transition-all duration-300 hover:shadow-lg ${
                plan.highlighted ? 'border-blue-500 ring-2 ring-blue-100' : 'border-gray-200'
              }`}
            >
              {/* Plan Name */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-600 mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline mb-2">
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                </div>
                <p className="text-sm text-gray-500">
                  {plan.priceSubtext}
                </p>
              </div>

              {/* Features List */}
              <div className="mb-8">
                <ul className="space-y-4">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <div className="flex-shrink-0 w-5 h-5 mr-3">
                        {feature.included ? (
                         
                           <Image
                              src="/assets/icons/righticon.svg"
                              alt="Check"
                              width={20}
                              height={20}
                            /> 
                       
                        ) : (
                          <div className="w-5 h-5 bg-gray-300 rounded-full flex items-center justify-center">
                            <svg className="w-3 h-3 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </div>
                        )}
                      </div>
                      <span className="text-sm text-gray-700">
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <Button
                variant={plan.cta.variant}
                size={plan.cta.size}
                className={`w-full ${plan.cta.classname || ""}`}
              >
                {plan.cta.title}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}