import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";

type product = {
  name: string;
  amount: number;
  price: number;
};

export function Order() {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  const [params, setParams] = useSearchParams();
  const [products, setProducts] = useState<product[]>([]);

  useEffect(() => {
    if (!params.get("products")) {
      navigate("/admin/orders");
      return;
    }

    setProducts(
      () => JSON.parse(params.get("products") as string) as product[]
    );

    console.log(JSON.parse(params.get("products") as string));
  }, []);

  useEffect(() => {
    if (authContext.auth.is_logged_in) {
      if (authContext.auth.user !== "admin@admin") {
        navigate("/");
      }
    }
  }, [authContext.auth.is_logged_in]);

  return (
    <div className="w-[100vw] h-[100vh] flex flex-col justify-start items-start p-4 pt-24 gap-6">
      {products.map((item) => (
        <div className="order p-4 rounded-lg bg-slate-800 w-full flex justify-between items-center">
          <h2 className="text-white text-base md:text-xl max-w-3/4">
            {item.name} X{item.amount} - {item.price * item.amount}€
          </h2>
        </div>
      ))}
    </div>
  );
}
