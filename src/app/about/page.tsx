import { DynamicImport } from "@/components/dynamicImport";
import data from '@/app/_lib/about.data.json'

export default function AboutPage() {
  return (
    <div>
      <DynamicImport components={data.components}/>
    </div>
  );
}