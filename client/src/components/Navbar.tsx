import { NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { CartContext } from "../contexts/CartContext";

export function Navbar() {
  const auth = useContext(AuthContext);
  const cartContext = useContext(CartContext);

  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    let price_accumulated = 0;

    cartContext.cart.forEach((item) => {
      price_accumulated += item.price * item.amount;
    });

    setTotalPrice(price_accumulated);
  }, [cartContext.cart]);

  function logout() {
    localStorage.removeItem("refresh_token");
    auth.setAuth({
      user: "",
      token: "",
      refresh_token: "",
      is_logged_in: false,
    });
  }

  return (
    <nav className="w-[100vw] bg-white shadow dark:bg-gray-800 fixed">
      <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
        <NavLink
          to="/"
          className="text-gray-800 transition-colors duration-300 transform dark:text-gray-200  mx-1.5 sm:mx-6"
        >
          home
        </NavLink>

        {!auth.auth.is_logged_in && (
          <>
            <NavLink
              to="/login"
              className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-red-500 mx-1.5 sm:mx-6"
            >
              Login
            </NavLink>

            <NavLink
              to="/register"
              className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-red-500 mx-1.5 sm:mx-6"
            >
              Register
            </NavLink>
          </>
        )}

        {auth.auth.is_logged_in && (
          <>
            <NavLink
              to="/cart"
              className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-red-500 mx-1.5 sm:mx-6"
            >
              Cart ({totalPrice}$)
            </NavLink>

            <button
              onClick={logout}
              className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-red-500 mx-1.5 sm:mx-6"
            >
              Log Out
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
