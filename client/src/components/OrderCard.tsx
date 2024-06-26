import { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import type { Order } from "../views/admin/Orders";

interface Props {
  person: string;
  order_id: number;
  products: string;
  accept: boolean;
  setOrders: (order: Order[]) => void;
}

export const OrderCard: React.FC<Props> = ({
  person,
  order_id,
  accept,
  products,
  setOrders,
}) => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
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
          setOrders(data.orders);
        }
      });
  }

  return (
    <div
      className={`order p-4 rounded-lg ${
        accept ? "bg-emerald-800" : "bg-slate-800"
      } w-full flex justify-between items-center`}
    >
      <h2 className="text-white text-base md:text-xl max-w-3/4">
        {person} - order nr. {order_id}
      </h2>
      <div className="buttons flex items-center gap-8">
        <button
          onClick={() => navigate(`/admin/order?products=${products}`)}
          className="text-white p-1 pl-6 pr-6 bg-emerald-500 hover:bg-emerald-400 transition-colors"
        >
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
