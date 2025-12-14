import { Check } from "lucide-react";
interface ListWithChecksProps {
  items: string[];
}
const ListWithChecks = ({ items }: ListWithChecksProps) => {
  return (
    <div>
      {items.map((item) => (
        <div key={item} className="flex flex-row gap-2 items-center">
          <Check className="size-4" />
          <p>{item}</p>
        </div>
      ))}
    </div>
  );
};

export default ListWithChecks;
