import { useContext, useEffect, useState } from "react";
import { CartItem } from "../components/CartItem";
import { AuthContext } from "../contexts/AuthContext";
import { CartContext } from "../contexts/CartContext";

export function Cart() {
  const cartContext = useContext(CartContext);
  const authContext = useContext(AuthContext);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    let price_accumulated = 0;

    cartContext.cart.forEach((item) => {
      price_accumulated += item.price * item.amount;
    });

    setTotalPrice(price_accumulated);
  }, [cartContext.cart]);

  async function checkout(e: React.FormEvent<HTMLFormElement>) {
    if (!authContext.auth.is_logged_in) return;
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);

    const body = {
      person_name: formData.get("person_name"),
      adress: formData.get("adress"),
      postal_code: formData.get("postal_code"),
      price: totalPrice,
      accept: false,
      products: JSON.stringify(cartContext.cart),
    };

    await fetch("http://localhost:3000/orders/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authContext.auth.token}`,
      },
      body: JSON.stringify({ order: body }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (!data.error) {
          cartContext.setCart([]);
        } else {
          alert("Something went wrong");
        }
      });
  }

  return (
    <div className="w-[100vw] h-[100vh] pt-24 p-4 overflow-y-auto flex flex-col md:flex-row gap-6 justify-between items-center md:items-start">
      <table className="block rounded-lg max-h-[80vh] overflow-y-auto bg-gray-800 max-w-[95vw] md:max-w-[45%]">
        <h2 className="p-3 md:p-5 text-white text-2xl">Shopping Cart</h2>
        <tr className="w-full p-3 md:p-5">
          <th className="text-white md:text-lg text-start p-3 md:p-5">Name</th>
          <th className="text-white md:text-lg text-start p-3 md:p-5">
            Amount
          </th>
          <th className="text-white md:text-lg text-start p-3 md:p-5">Price</th>
          <th className="text-white md:text-lg text-start p-3 md:p-5">Total</th>
          <th className="text-white md:text-lg text-start p-3 md:p-5"></th>
        </tr>
        {cartContext.cart.map((item) => (
          <CartItem
            id={item.id}
            name={item.name}
            price={item.price}
            amount={item.amount}
          />
        ))}
      </table>
      <section
        className="flex flex-col justify-start items-start gap-4 rounded-lg max-h-[80vh] overflow-y-auto bg-gray-800 w-[90vw] md:w-[45%] max-w-[95vw] md:max-w-[45%]"
        id="summary"
      >
        <h2 className="p-3 md:p-5 text-2xl text-white">Summary</h2>
        <form
          onSubmit={checkout}
          className="flex flex-col justify-start items-start gap-6 p-3 md:p-5"
        >
          <input
            name="person_name"
            className="p-1 outline-none bg-gray-900 border-b-2 border-b-solid border-b-slate-600 text-white"
            required
            placeholder="your name"
          />
          <input
            name="adress"
            className="p-1 outline-none bg-gray-900 border-b-2 border-b-solid border-b-slate-600 text-white"
            required
            placeholder="address"
          />
          <input
            name="postal_code"
            className="p-1 outline-none bg-gray-900 border-b-2 border-b-solid border-b-slate-600 text-white"
            required
            placeholder="postal code"
          />
          <p className="text-white text-xl">Total: ${totalPrice.toFixed(2)}</p>
          <button
            type="submit"
            className="p-1 pl-5 pr-5 rounded-lg text-lg text-white bg-slate-700 hover:bg-slate-600 transition-colors"
          >
            Checkout
          </button>
        </form>
      </section>
    </div>
  );
}
