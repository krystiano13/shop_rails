import { createContext, useState } from "react";

interface Props {
  children: React.ReactNode;
}

interface Product {
  name: string;
  price: number;
  amount: number;
}

export const CartContext = createContext<{
  cart: Product[];
  setCart: (cart: Product[]) => void;
}>({ cart: [], setCart: () => {} });

export const CartContextProvider: React.FC<Props> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);
  return (
    <CartContext.Provider value={{ cart: cart, setCart: setCart }}>
      {children}
    </CartContext.Provider>
  );
};
