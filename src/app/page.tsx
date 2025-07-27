import { DynamicImport } from "@/components/dynamicImport";
import data from '@/app/_lib/home.data.json'


export default function HomePage() {
  return (
    <div>
      <DynamicImport components={data.components}/>
    </div>
  );
}
