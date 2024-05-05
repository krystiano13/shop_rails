import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { CartContext } from "../contexts/CartContext";
import { debounce } from "../utils/debounce";

interface Props {
  id: number;
  name: string;
  price: number;
  amount: number;
}

export const CartItem: React.FC<Props> = ({ name, price, amount, id }) => {
  const authContext = useContext(AuthContext);
  const cartContext = useContext(CartContext);

  async function updateRecord(e: React.ChangeEvent<HTMLInputElement>) {
    if (!authContext.auth.is_logged_in) return;

    await fetch(
      `http://127.0.0.1:3000/products/edit?user=${authContext.auth.user}&name=${name}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authContext.auth.token}`,
        },
        body: JSON.stringify({
          user: authContext.auth.user,
          name: name,
          price: price,
          amount: e.target.value,
          product_id: 1,
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }

  async function deleteRecord() {
    if (!authContext.auth.is_logged_in) return;
    await fetch(`http://127.0.0.1:3000/products/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authContext.auth.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          const array = cartContext.cart.filter((product) => product.id !== id);
          cartContext.setCart(array);
        } else {
          alert("Something went wrong");
        }
      });
  }

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
          onChange={debounce(updateRecord, 500)}
        />
      </td>
      <td className="p-3 md:p-5">
        <p className="text-white md:text-lg">${price}</p>
      </td>
      <td className="p-3 md:p-5">
        <p className="text-white md:text-lg">${price * amount}</p>
      </td>
      <td className="p-3 md:p-5">
        <button
          onClick={deleteRecord}
          className="text-white p-1 pl-5 pr-5 bg-red-700 hover:bg-red-600 transition-colors"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};
