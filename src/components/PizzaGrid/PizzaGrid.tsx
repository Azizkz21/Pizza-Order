import PizzaCard from "./PizzaCard";

import type { Product } from "../../types/types";

interface Props {
  sorted: Product[];
}

export default function PizzaGrid({ sorted }: Props) {
  return (
    <ul className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {sorted.length > 0 &&
        sorted.map((item) => (
          <PizzaCard
            key={item.id}
            id={item.id}
            title={item.title}
            imageUrl={item.imageUrl}
            variants={item.variants}
          />
        ))}
    </ul>
  );
}
