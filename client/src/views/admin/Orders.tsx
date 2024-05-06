import { useEffect, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export function Orders() {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (authContext.auth.is_logged_in) {
      if (authContext.auth.user !== "admin@admin") {
        navigate("/");
      }
    }
  }, [authContext.auth.is_logged_in]);

  return <></>;
}
