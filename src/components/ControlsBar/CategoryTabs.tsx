import type { MenuCategory } from "../../types/Types";

interface Props {
  category: MenuCategory;
  setCategory: (next: MenuCategory) => void;
}

export default function CategoryTabs({ category, setCategory }: Props) {
  return (
    <ul className="flex items-center gap-2 overflow-x-auto pb-2 sm:flex-wrap sm:pb-0">
      <li>
        <button
          className={`px-4 py-2 text-sm font-bold whitespace-nowrap rounded-rounded4xl transition hover:bg-black hover:text-white sm:px-8 sm:py-3 sm:text-base ${category == "all" ? "bg-black text-white" : "bg-tabBg text-black"}`}
          onClick={() => setCategory("all")}
        >
          Все
        </button>
      </li>
      <li>
        <button
          className={`px-4 py-2 text-sm font-bold whitespace-nowrap rounded-rounded4xl transition hover:bg-black hover:text-white sm:px-8 sm:py-3 sm:text-base ${category == "meat" ? "bg-black text-white" : "bg-tabBg text-black"}`}
          onClick={() => setCategory("meat")}
        >
          Мясные
        </button>
      </li>
      <li>
        <button
          className={`px-4 py-2 text-sm font-bold whitespace-nowrap rounded-rounded4xl transition hover:bg-black hover:text-white sm:px-8 sm:py-3 sm:text-base ${category == "vegetarian" ? "bg-black text-white" : "bg-tabBg text-black"}`}
          onClick={() => setCategory("vegetarian")}
        >
          Вегетарианская
        </button>
      </li>
      <li>
        <button
          className={`px-4 py-2 text-sm font-bold whitespace-nowrap rounded-rounded4xl transition hover:bg-black hover:text-white sm:px-8 sm:py-3 sm:text-base ${category == "grill" ? "bg-black text-white" : "bg-tabBg text-black"}`}
          onClick={() => setCategory("grill")}
        >
          Гриль
        </button>
      </li>
      <li>
        <button
          className={`px-4 py-2 text-sm font-bold whitespace-nowrap rounded-rounded4xl transition hover:bg-black hover:text-white sm:px-8 sm:py-3 sm:text-base ${category == "spicy" ? "bg-black text-white" : "bg-tabBg text-black"}`}
          onClick={() => setCategory("spicy")}
        >
          Острые
        </button>
      </li>
      <li>
        <button
          className={`px-4 py-2 text-sm font-bold whitespace-nowrap rounded-rounded4xl transition hover:bg-black hover:text-white sm:px-8 sm:py-3 sm:text-base ${category == "calzone" ? "bg-black text-white" : "bg-tabBg text-black"}`}
          onClick={() => setCategory("calzone")}
        >
          Закрытые
        </button>
      </li>
    </ul>
  );
}
