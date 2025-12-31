import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { ReactNode } from "react";
interface ListWithChecksProps {
  items: (string | ReactNode)[];
  className?: string;
}
const ListWithChecks = ({ items, className }: Readonly<ListWithChecksProps>) => {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {items.map((item, index) => (
        <div key={index} className="flex flex-row gap-2 items-baseline">
          <Check className="size-4" />
          <p>{item}</p>
        </div>
      ))}
    </div>
  );
};

export default ListWithChecks;
