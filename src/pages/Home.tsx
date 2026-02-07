import { useState } from "react";
import CategoryTabs from "../components/ControlsBar/CategoryTabs";
import SortSelect from "../components/ControlsBar/SortSelect";
import PizzaGrid from "../components/PizzaGrid/PizzaGrid";
import type { MenuCategory, Product, ProductSort } from "../types/types";
import { productData } from "../data/productData";

export default function Home() {
  const [category, setCategory] = useState<MenuCategory>("all");
  const [filter, setFilter] = useState<ProductSort>("popular");

  const visible = productData.filter((item) => {
    if (category === "all") {
      return true;
    } else {
      return item.category === category;
    }
  });

  const sorted: Product[] = [...visible].sort((a, b) => {
    if (filter === "popular") {
      return b.rating - a.rating;
    } else if (filter === "alphabet") {
      return a.title.localeCompare(b.title, "ru");
    } else if (filter === "price") {
      const priceA = Math.min(...a.variants.map((item) => item.price));
      const priceB = Math.min(...b.variants.map((item) => item.price));
      return priceA - priceB;
    } else {
      return 0;
    }
  });
  return (
    <section className="flex flex-col px-3 pt-8 pb-10 md:pt-10">
      <div className="flex flex-col w-full gap-4 pb-8 mx-auto max-w-mainContainer md:flex-row md:items-center md:justify-between md:pb-10">
        <CategoryTabs category={category} setCategory={setCategory} />
        <SortSelect
          filter={filter}
          handleSort={(e) => setFilter(e.target.value as ProductSort)}
        />
      </div>
      <div className="flex flex-col w-full gap-8 mx-auto max-w-mainContainer">
        <h1 className="text-2xl font-bold text-black md:text-3xl">Все пиццы</h1>
        <PizzaGrid sorted={sorted} />
      </div>
    </section>
  );
}
