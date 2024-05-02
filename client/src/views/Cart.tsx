import { CartItem } from "../components/CartItem";

export function Cart() {
  return (
    <div className="w-[100vw] h-[100vh] pt-24 p-4 overflow-y-auto flex flex-col md:flex-row gap-6 justify-between items-center md:items-start">
      <table className="block rounded-lg bg-gray-800 max-w-[95vw] md:max-w-[45%]">
        <h2 className="p-3 md:p-5 text-white text-2xl">Shopping Cart</h2>
        <tr className="w-full p-3 md:p-5">
          <th className="text-white md:text-lg text-start p-3 md:p-5">Name</th>
          <th className="text-white md:text-lg text-start p-3 md:p-5">
            Amount
          </th>
          <th className="text-white md:text-lg text-start p-3 md:p-5">Price</th>
          <th className="text-white md:text-lg text-start p-3 md:p-5">Total</th>
        </tr>
        <CartItem />
      </table>
    </div>
  );
}
