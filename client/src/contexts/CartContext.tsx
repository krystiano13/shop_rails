import { createContext, useState, useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";

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
  const authContext = useContext(AuthContext);

  useEffect(() => {
    if(!authContext.auth.is_logged_in) return;
    fetch(`http://127.0.0.1:3000/products/${authContext.auth.user}`, {
      headers: {
        Authorization: `Bearer ${authContext.auth.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, [authContext.auth.is_logged_in]);

  return (
    <CartContext.Provider value={{ cart: cart, setCart: setCart }}>
      {children}
    </CartContext.Provider>
  );
};
