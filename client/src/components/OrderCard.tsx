import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

interface Props {
  person: string;
  order_id: number;
  products: string;
  accept: boolean;
}

export const OrderCard: React.FC<Props> = ({
  person,
  order_id,
  accept,
  products,
}) => {
  const authContext = useContext(AuthContext);
  async function acceptOrder() {
    await fetch(`http://127.0.0.1:3000/orders/accept?id=${order_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authContext.auth.token}`,
      },
      body: JSON.stringify({ order: { accept: true } }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          //window.location.reload();
        }
      });
  }

  return (
    <div
      className={`order p-4 rounded-lg ${
        accept ? "bg-emerald-800" : "bg-slate-800"
      } w-full flex justify-between items-center`}
    >
      <h2 className="text-white text-xl">
        {person} - order nr. {order_id}
      </h2>
      <div className="buttons flex items-center gap-8">
        <button className="text-white p-1 pl-6 pr-6 bg-emerald-500 hover:bg-emerald-400 transition-colors">
          Show
        </button>
        {!accept && (
          <button
            onClick={acceptOrder}
            className="text-white p-1 pl-6 pr-6 bg-red-500 hover:bg-red-400 transition-colors"
          >
            Accept
          </button>
        )}
      </div>
    </div>
  );
};
