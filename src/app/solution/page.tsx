import { DynamicImport } from "@/components/dynamicImport";
import data from '@/app/_lib/solution.data.json'

export default function SolutionPage() {
  return (
    <div>
      <DynamicImport components={data.components}/>
    </div>
  );
}