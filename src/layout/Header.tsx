import { useContext } from "react";
import { Link } from "react-router-dom";
import { icons } from "../components/icons";
import { MyContext } from "../context/CartContext";


export default function Header() {
  const ctx = useContext(MyContext);
  if (!ctx) return;
  const { totalCount, totalPrice } = ctx;

  return (
    <header className="px-3 pt-6 md:pt-14">
      <div className="flex flex-col w-full gap-4 pb-8 mx-auto border-b-2 max-w-mainContainer border-color-br md:flex-row md:items-center md:justify-between md:pb-10">
        <Link to={"/"}>
          <img
            src={icons.logo}
            width={314}
            height={41}
            loading="lazy"
            alt="logo"
          />
        </Link>
        <Link
          to={"/basket"}
          className="flex items-center justify-center w-full gap-3 px-4 py-3 bg-link rounded-rounded4xl md:w-auto md:px-6 md:py-4"
        >
          <span className="text-base font-bold text-white sans ">
            {totalPrice} ₽
          </span>
          <span className="block w-w1 h-h25 bg-linebasket"></span>
          <span className="flex items-center gap-2 text-base font-bold text-white sans">
            <img
              src={icons.basketH}
              width={16}
              height={16}
              loading="lazy"
              alt="basket"
            />
            {totalCount}
          </span>
        </Link>
      </div>
    </header>
  );
}
