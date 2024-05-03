interface Props {
  name: string;
  price: number;
  amount: number;
}

export const CartItem:React.FC<Props> = ({ name, price, amount }) => {
  return (
    <tr className="w-full p-3 md:p-5">
      <td className="p-3 md:p-5">
        <h2 className="text-white md:text-lg">{name}</h2>
      </td>
      <td className="p-3 md:p-5">
        <input
          className="outline-none w-16 md:text-lg bg-gray-900 border-b-2 border-b-solid border-b-slate-600 text-white"
          type="number"
          name="amount"
          min={1}
          defaultValue={amount}
          required
        />
      </td>
      <td className="p-3 md:p-5">
        <p className="text-white md:text-lg">${price}</p>
      </td>
      <td className="p-3 md:p-5">
        <p className="text-white md:text-lg">${price * amount}</p>
      </td>
    </tr>
  );
}
