import { DynamicImport } from "@/components/dynamicImport";
import data from '@/app/_lib/career.data.json'

export default function CareerPage() {
  return (
    <div>
      <DynamicImport components={data.components}/>
    </div>
  );
}