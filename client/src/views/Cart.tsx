import { useContext } from "react";
import { CartItem } from "../components/CartItem";
import { CartContext } from "../contexts/CartContext";

export function Cart() {
  const cartContext = useContext(CartContext);
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
        <form className="flex flex-col justify-start items-start gap-6 p-3 md:p-5">
          <input
            className="p-1 outline-none bg-gray-900 border-b-2 border-b-solid border-b-slate-600 text-white"
            required
            placeholder="your name"
          />
          <input
            className="p-1 outline-none bg-gray-900 border-b-2 border-b-solid border-b-slate-600 text-white"
            required
            placeholder="address"
          />
          <input
            className="p-1 outline-none bg-gray-900 border-b-2 border-b-solid border-b-slate-600 text-white"
            required
            placeholder="postal code"
          />
        </form>
        <p className="text-white p-3 md:p-5 text-xl">Total: $100.00</p>
        <button className="m-3 p-1 pl-5 pr-5 rounded-lg text-lg md:m-5 text-white bg-slate-700 hover:bg-slate-600 transition-colors">
          Checkout
        </button>
      </section>
    </div>
  );
}
