import { DynamicImport } from "@/components/dynamicImport";
import data from '@/app/_lib/pricing.data.json'

export default function PricingPage() {
  return (
    <div>
      <DynamicImport components={data.components}/>
    </div>
  );
}