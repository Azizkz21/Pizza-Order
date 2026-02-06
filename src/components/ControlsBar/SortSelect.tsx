import type { ProductSort } from "../../types/Types";
import { icons } from "../icons";

interface Props {
  filter: ProductSort;
  handleSort: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function SortSelect({ filter, handleSort }: Props) {
  return (
    <form className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-1">
      <label
        className="flex items-center gap-1 text-sm cursor-pointer sm:text-base"
        htmlFor="productSort"
      >
        <img
          src={icons.sortArrow}
          width={10}
          height={6}
          loading="lazy"
          alt="arrow"
        />
        Сортировка по:
      </label>
      <select
        className="text-sm appearance-none cursor-pointer text-link sm:text-base"
        name="productSort"
        id="productSort"
        value={filter}
        onChange={handleSort}
      >
        <option className="text-black" value="popular">
          популярности
        </option>
        <option className="text-black" value="price">
          по цене
        </option>
        <option className="text-black" value="alphabet">
          по алфавиту
        </option>
      </select>
    </form>
  );
}
