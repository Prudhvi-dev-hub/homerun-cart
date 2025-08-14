import React, { createContext, useContext, useReducer, useEffect, ReactNode } from "react";

type CartState = { [productId: string]: number };
type CartAction =
  | { type: "ADD_ONE"; id: string }
  | { type: "SUB_ONE"; id: string }
  | { type: "ADD_FIVE"; id: string }
  | { type: "SUB_FIVE"; id: string }
  | { type: "CLEAR"; id: string };

const MAX_LIMIT = 20;
const STORAGE_KEY = "cartState";

function cartReducer(state: CartState, action: CartAction): CartState {
  const currentQty = state[action.id] || 0;

  switch (action.type) {
    case "ADD_ONE":
      return { ...state, [action.id]: Math.min(MAX_LIMIT, currentQty + 1) };

    case "SUB_ONE":
      if (currentQty > 1) return { ...state, [action.id]: currentQty - 1 };
      const { [action.id]: removedProduct, ...remainingItems } = state;
      return remainingItems;

    case "ADD_FIVE":
      return { ...state, [action.id]: Math.min(MAX_LIMIT, currentQty + 5) };

    case "SUB_FIVE":
      if (currentQty > 5) return { ...state, [action.id]: currentQty - 5 };
      const updated = { ...state };
      delete updated[action.id];
      return updated;

    case "CLEAR":
      const rest = { ...state };
      delete rest[action.id];
      return rest;

    default:
      return state;
  }
}

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
  totalCount: number;
}>({ state: {}, dispatch: () => {}, totalCount: 0 });

export function CartProvider({ children }: { children: ReactNode }) {
  // Initialize from localStorage if available
  const [state, dispatch] = useReducer(cartReducer, {}, () => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  });

  // Persist to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const totalCount = Object.values(state).reduce((sum, qty) => sum + qty, 0);

  return (
    <CartContext.Provider value={{ state, dispatch, totalCount }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
