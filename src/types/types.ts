export type MenuCategory =
  | "all"
  | "meat"
  | "vegetarian"
  | "grill"
  | "spicy"
  | "calzone";

export type ProductSort = "popular" | "price" | "alphabet";

export type FormPizza = "thin" | "traditional";
export type SizePizza = 26 | 30 | 40;
export type Rating = 3 | 2 | 1;

export interface Variant {
  id: number;
  size: SizePizza;
  dough: FormPizza;
  price: number;
}

export interface Product {
  id: number;
  title: string;
  imageUrl: string;
  category: string;
  rating: Rating;
  variants: Variant[];
}

export interface CartItem {
  productId: number;
  variantId: number;
  cartKey: string;
  title: string;
  size: SizePizza;
  dough: FormPizza;
  imageUrl: string;
  priceAtAdd: number;
  count: number;
}

export type CartAction =
  | { type: "add"; payload: CartItem }
  | { type: "inc"; payload: string }
  | { type: "dec"; payload: string }
  | { type: "remove"; payload: string }
  | { type: "clear" };
