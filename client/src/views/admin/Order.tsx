import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";
import type { product } from "../../utils/products";

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

  return <></>;
}
