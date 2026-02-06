import { useContext } from "react";
import BasketCard from "./BasketCard";
import { MyContext } from "../../context/CartContext";

export default function BasketGrid() {
  const ctx = useContext(MyContext);
  if (!ctx) return;
  const { cartItems } = ctx;
  return (
    <ul className="flex flex-col w-full gap-4">
      {cartItems.length > 0 &&
        cartItems.map((item) => (
          <BasketCard
            key={item.cartKey}
            id={item.cartKey}
            title={item.title}
            size={item.size}
            dough={item.dough}
            imageUrl={item.imageUrl}
            priceAtAdd={item.priceAtAdd}
            count={item.count}
          />
        ))}
    </ul>
  );
}
