import { DynamicImport } from "@/components/dynamicImport";
import data from '@/app/_lib/blog.data.json'

export default function BlogPage() {
  return (
    <div>
      <DynamicImport components={data.components}/>
    </div>
  );
}