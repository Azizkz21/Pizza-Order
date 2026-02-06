import { useContext } from "react";
import type { FormPizza, SizePizza } from "../../types/Types";
import { icons } from "../icons";
import { MyContext } from "../../context/CartContext";

type Props = {
  id: string;
  title: string;
  size: SizePizza;
  dough: FormPizza;
  imageUrl: string;
  priceAtAdd: number;
  count: number;
};

export default function BasketCard({
  id,
  title,
  size,
  dough,
  imageUrl,
  priceAtAdd,
  count,
}: Props) {
  const ctx = useContext(MyContext);
  if (!ctx) return;
  const { dispatch } = ctx;
  const sumPriceCard = priceAtAdd * count;
  return (
    <li className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div className="flex items-center w-full gap-3 md:w-auto">
        <img src={imageUrl} width={80} height={80} loading="lazy" alt={title} />
        <div className="flex flex-col gap-1">
          <p className="text-2xl font-bold">{title}</p>
          <p className="text-base text-textGray">
            {dough === "thin" ? "тонкое" : "традиционное"} тесто, {size} см.
          </p>
        </div>
      </div>
      <div className="flex flex-col w-full gap-3 sm:flex-row sm:items-center sm:justify-between md:max-w-80">
        <div className="flex items-center w-24 gap-2">
          <button
            onClick={() => dispatch({ type: "dec", payload: id })}
            className="rounded-full size-8"
          >
            <img
              src={icons.minus}
              width={32}
              height={32}
              loading="lazy"
              alt="minus"
            />
          </button>
          <span className="text-2xl font-bold">{count}</span>
          <button
            onClick={() => dispatch({ type: "inc", payload: id })}
            className="rounded-full size-8"
          >
            <img
              src={icons.plus}
              width={32}
              height={32}
              loading="lazy"
              alt="plus"
            />
          </button>
        </div>
        <p className="text-2xl font-bold">{sumPriceCard} ₽ </p>
        <button
          onClick={() => dispatch({ type: "remove", payload: id })}
          className="rounded-full size-8"
        >
          <img
            src={icons.deleted}
            width={32}
            height={32}
            loading="lazy"
            alt="deleted"
          />
        </button>
      </div>
    </li>
  );
}
