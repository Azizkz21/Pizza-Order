import React, { useContext } from "react";
import { icons } from "../components/icons";

import { Link } from "react-router-dom";
import BasketGrid from "../components/BasketGrid/BasketGrid";
import { MyContext } from "../context/CartContext";

export default function Basket() {
  const ctx = useContext(MyContext);
  if (!ctx) return;
  const { cartItems, dispatch, totalCount, totalPrice } = ctx;
  return (
    <section className="flex flex-col h-full px-3 pt-8 pb-10 md:pt-10">
      {cartItems.length > 0 ? (
        <>
          <div className="flex flex-col w-full gap-4 pb-8 mx-auto max-w-mainContainer md:flex-row md:items-center md:justify-between md:pb-10">
            <div className="flex items-center gap-3">
              <img
                src={icons.basketMain}
                width={29}
                height={29}
                loading="lazy"
                alt="basket-icon"
              />
              <h1 className="text-3xl font-bold text-black">Корзина</h1>
            </div>
            <button
              onClick={() => dispatch({ type: "clear" })}
              className="flex items-center gap-2 text-base transition text-gray2 hover:text-link"
            >
              <img
                src={icons.basketDeleted}
                width={20}
                height={20}
                loading="lazy"
                alt="basket-deled-all"
              />
              Очистить корзину
            </button>
          </div>
          <div className="w-full gap-2 pb-10 mx-auto max-w-mainContainer">
            <BasketGrid />
          </div>
          <div className="flex flex-col w-full gap-4 pb-10 mx-auto max-w-mainContainer">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <p>
                Всего пицц: <span className="font-bold">{totalCount} шт.</span>
              </p>
              <p>
                Сумма заказа:
                <span className="font-bold text-link">{totalPrice} ₽</span>
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <Link
                to={"/"}
                className="flex items-center justify-center w-full gap-2 px-3 py-3 border-2 border-back rounded-rounded4xl text-back hover:text-link hover:border-link sm:w-auto sm:justify-start"
              >
                <img
                  src={icons.backArrow}
                  width={6}
                  height={12}
                  loading="lazy"
                  alt="back-arrow"
                />
                Вернуться назад
              </Link>
              <button className="flex items-center justify-center w-full gap-2 px-5 py-3 text-base font-bold text-white transition border-2 border-transparent bg-link rounded-rounded4xl hover:text-link hover:border-link hover:bg-transparent sm:w-auto">
                Оплатить сейчас
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center w-full h-full gap-4 pb-10 mx-auto max-w-mainContainer">
          <div className="flex flex-col items-center justify-center">
            <p className="text-2xl font-bold text-center sm:text-3xl">Корзина пустая </p>
            <div className="flex flex-col">
              <p className="text-base text-center text-gray3 sm:text-lg">
                Вероятней всего, вы не заказывали ещё пиццу.
              </p>
              <p className="text-base text-center text-gray3 sm:text-lg">
                Для того, чтобы заказать пиццу, перейди на главную страницу.
              </p>
            </div>
          </div>
          <img
            className=""
            src={icons.empty}
            width={300}
            height={255}
            loading="lazy"
            alt="empty"
          />

          <Link
            to={"/"}
            className="flex items-center gap-2 px-5 py-3 text-base font-bold text-white transition border-2 border-transparent bg-link rounded-rounded4xl hover:text-link hover:border-link hover:bg-transparent"
          >
            Вернуться назад
          </Link>
        </div>
      )}
    </section>
  );
}
