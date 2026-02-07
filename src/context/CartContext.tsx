import { createContext, useReducer, type Dispatch } from "react";
import type { CartAction, CartItem } from "../types/types";

type CartContextType = {
  cartItems: CartItem[];
  dispatch: Dispatch<CartAction>;
  totalCount: number;
  totalPrice: number;
};

interface Props {
  children: React.ReactNode;
}

export const MyContext = createContext<CartContextType | undefined>(undefined);
const initialState: CartItem[] = [];

function reducer(state: CartItem[], action: CartAction): CartItem[] {
  const { type } = action;
  switch (type) {
    case "add": {
      const existingItem = state.find((item) => {
        return action.payload.cartKey === item.cartKey;
      });
      if (existingItem) {
        return state.map((item) =>
          existingItem.cartKey === item.cartKey
            ? { ...item, count: item.count + 1 }
            : item,
        );
      } else {
        return [...state, { ...action.payload, count: 1 }];
      }
    }
    case "inc": {
      const existingItem = state.find((item) => {
        return action.payload === item.cartKey;
      });
      if (existingItem) {
        return state.map((item) =>
          existingItem.cartKey === item.cartKey
            ? { ...item, count: item.count + 1 }
            : item,
        );
      } else {
        return state;
      }
    }
    case "dec": {
      const existingItem = state.find((item) => {
        return action.payload === item.cartKey;
      });
      if (existingItem) {
        return state.map((item) =>
          existingItem.cartKey === item.cartKey
            ? { ...item, count: item.count > 1 ? item.count - 1 : 1 }
            : item,
        );
      } else {
        return state;
      }
    }
    case "remove": {
      const existingItem = state.find((item) => {
        return action.payload === item.cartKey;
      });
      if (existingItem) {
        return state.filter((item) => existingItem.cartKey !== item.cartKey);
      } else {
        return state;
      }
    }
    case "clear":
      return [];
    default:
      return state;
  }
}

export default function CartContext({ children }: Props) {
  const [cartItems, dispatch] = useReducer(reducer, initialState);
  const totalCount = cartItems.reduce((acc, item) => {
    return acc + item.count;
  }, 0);

  const totalPrice = cartItems.reduce((acc, item) => {
    return acc + item.priceAtAdd * item.count;
  }, 0);
  return (
    <MyContext.Provider value={{ cartItems, dispatch, totalCount, totalPrice }}>
      {children}
    </MyContext.Provider>
  );
}
