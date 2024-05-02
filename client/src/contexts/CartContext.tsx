import { createContext, useState } from "react";

interface Props {
  children: React.ReactNode;
}

interface Product {
  name: string;
  price: number;
  amount: number;
}

export const CartContext = createContext({});

export const CartContextProvider: React.FC<Props> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};
