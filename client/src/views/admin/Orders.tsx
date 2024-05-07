import { useEffect, useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { OrderCard } from "../../components/OrderCard";

interface Order {
  id: number;
  accept: boolean;
  created_at: string;
  adress: string;
  products: string;
  person_name: string;
  postal_code: string;
}

export function Orders() {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    if (authContext.auth.is_logged_in) {
      if (authContext.auth.user !== "admin@admin") {
        navigate("/");
      }

      fetch("http://127.0.0.1:3000/orders", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authContext.auth.token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setOrders(() => data.orders as Order[]);
        });
    }
  }, [authContext.auth.is_logged_in]);

  return (
    <div className="w-[100vw] h-[100vh] flex flex-col justify-start items-start p-4 pt-24 gap-6">
      {orders.map((item) => (
        <OrderCard
          key={item.id}
          person={item.person_name}
          order_id={item.id}
          accept={item.accept}
          products={item.products}
        />
      ))}
    </div>
  );
}
