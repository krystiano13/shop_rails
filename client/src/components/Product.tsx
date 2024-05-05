import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { CartContext } from "../contexts/CartContext";

interface Props {
  name: string;
  price: number;
  img: string;
  description: string;
}

export const Product: React.FC<Props> = (props) => {
  const authContext = useContext(AuthContext);
  const cartContext = useContext(CartContext);

  async function addToCart() {
    if (!authContext.auth.is_logged_in) return;

    const user: string = authContext.auth.user;
    let amount = 1;

    if (cartContext.cart.some((item) => item.name === props.name)) {
      const index = cartContext.cart.findIndex(
        (product) => product.name === props.name
      );

      amount = cartContext.cart[index].amount + 1;
    }

    await fetch("http://127.0.0.1:3000/products/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authContext.auth.token}`,
      },
      body: JSON.stringify({
        user: user,
        name: props.name,
        amount: amount,
        price: props.price,
        product_id: 1,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          cartContext.setCart(data.products);
        } else {
          alert("Something went wrong");
        }
      });
  }

  return (
    <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <div className="px-4 py-2">
        <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">
          {props.name}
        </h1>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
          {props.description}
        </p>
      </div>

      <img
        className="object-cover w-full h-48 mt-2"
        src={props.img}
        alt="product image"
      />

      <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
        <h1 className="text-lg font-bold text-white">${props.price}</h1>
        {authContext.auth.is_logged_in && (
          <button
            onClick={addToCart}
            className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none"
          >
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
};
