import { useContext, useState } from "react";
import type { FormPizza, SizePizza, Variant } from "../../types/types";
import { MyContext } from "../../context/CartContext";


type Props = {
  title: string;
  imageUrl: string;
  variants: Variant[];
  id: number;
};

export default function PizzaCard({ title, imageUrl, variants, id }: Props) {
  const ctx = useContext(MyContext);
  if (!ctx) return;
  const { cartItems, dispatch } = ctx;
  const [selectedDough, setSelectedDough] = useState<FormPizza>(
    variants[0].dough,
  );
  const [selectedSize, setSelectedSize] = useState<SizePizza>(variants[0].size);

  const currentVariant =
    variants.find(
      (item) => item.dough === selectedDough && item.size === selectedSize,
    ) ?? variants[0];

  const totalCountCard = cartItems.reduce((acc, item) => {
    return item.productId === id ? acc + item.count : acc;
  }, 0);

  return (
    <li className="flex flex-col items-center w-full gap-4" data-id={id}>
      <div className="flex flex-col items-center gap-2">
        <img
          className="object-contain max-w-full max-h-full "
          width={260}
          height={260}
          loading="lazy"
          src={imageUrl}
          alt={title}
        />
        <p className="text-xl font-extrabold text-center">{title}</p>
      </div>

      <div className="flex flex-col w-full gap-2 mt-auto">
        <div className="flex flex-col w-full gap-1 p-1 bg-cardBg rounded-xl">
          <div className="flex items-center gap-1">
            <button
              className={`font-bold text-black py-1 px-3 rounded-md text-sm flex items-center justify-center w-full hover:bg-white transition ${selectedDough === "thin" ? "bg-white" : "bg-transparent"}`}
              onClick={() => setSelectedDough("thin")}
            >
              тонкое
            </button>
            <button
              className={`font-bold text-black py-1 px-3 rounded-md flex items-center justify-center text-sm w-full hover:bg-white transition ${selectedDough === "traditional" ? "bg-white" : "bg-transparent"}`}
              onClick={() => setSelectedDough("traditional")}
            >
              традиционное
            </button>
          </div>
          <div className="flex items-center gap-1 ">
            <button
              className={`font-bold text-black py-1 px-3 rounded-md flex items-center justify-center text-sm w-full hover:bg-white transition ${selectedSize === 26 ? "bg-white" : "bg-transparent"}`}
              onClick={() => setSelectedSize(26)}
            >
              26 см.
            </button>
            <button
              className={`font-bold text-black py-1 px-3 rounded-md flex items-center justify-center text-sm w-full hover:bg-white transition ${selectedSize === 30 ? "bg-white" : "bg-transparent"}`}
              onClick={() => setSelectedSize(30)}
            >
              30 см.
            </button>
            <button
              className={`font-bold text-black py-1 px-3 rounded-md flex items-center justify-center text-sm w-full hover:bg-white transition ${selectedSize === 40 ? "bg-white" : "bg-transparent"}`}
              onClick={() => setSelectedSize(40)}
            >
              40 см.
            </button>
          </div>
        </div>
        <div className="flex flex-col w-full gap-3 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-lg font-bold sm:text-xl">от {currentVariant.price} ₽</span>
          <button
            onClick={() =>
              dispatch({
                type: "add",
                payload: {
                  productId: id,
                  variantId: currentVariant.id,
                  cartKey: id + "_" + currentVariant.id,
                  title: title,
                  size: selectedSize,
                  dough: selectedDough,
                  imageUrl: imageUrl,
                  priceAtAdd: currentVariant.price,
                  count: 1,
                },
              })
            }
            className="flex items-center justify-center w-full gap-2 px-3 py-2 text-base font-bold transition border-2 rounded-rounded4xl border-link text-link hover:text-white hover:bg-link group sm:w-auto"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              fill="none"
              className="transition text-link group-hover:text-white"
            >
              <path
                fill="currentColor"
                d="M10.8 4.8H7.2V1.2C7.2.5373 6.6627 0 6 0S4.8.5373 4.8 1.2v3.6H1.2C.5373 4.8 0 5.3373 0 6s.5373 1.2 1.2 1.2h3.6v3.6c0 .6627.5373 1.2 1.2 1.2s1.2-.5373 1.2-1.2V7.2h3.6c.6627 0 1.2-.5373 1.2-1.2s-.5373-1.2-1.2-1.2Z"
              />
            </svg>
            Добавить
            {totalCountCard > 0 && (
              <span className="flex items-center justify-center text-xs font-bold text-white rounded-full bg-link size-6 group-hover:text-link group-hover:bg-white">
                {totalCountCard}
              </span>
            )}
          </button>
        </div>
      </div>
    </li>
  );
}
