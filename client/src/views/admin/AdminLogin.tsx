import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";

export function AdminLogin() {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  const [errors, setErrors] = useState<string[]>([]);

  useEffect(() => {
    if (authContext.auth.is_logged_in) {
      navigate("/");
    }
  }, [authContext.auth.is_logged_in]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const body = new FormData(e.target as HTMLFormElement);
    setErrors([]);

    body.append("email", "admin@admin");

    fetch("http://localhost:3000/users/tokens/sign_in", {
      method: "POST",
      body: body,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error_description) {
          setErrors(data.error_description);
        } else {
          authContext.setAuth({
            user: data.resource_owner.email,
            token: data.token,
            refresh_token: data.refresh_token,
            is_logged_in: true,
          });

          localStorage.setItem("refresh_token", data.refresh_token);

          navigate("/");
        }
      });
  }

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center">
      <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="px-6 py-4">
          <h3 className="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200">
            Welcome Admin !
          </h3>

          <p className="mt-1 text-center text-gray-500 dark:text-gray-400">
            Login
          </p>

          <form onSubmit={handleSubmit}>
            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-2 mt-2 text-gray-100 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-red-400 dark:focus:border-red-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-red-300"
                type="password"
                name="password"
                placeholder="Password"
                aria-label="Password"
              />
            </div>

            <div className="flex items-center justify-between mt-4">
              <button className="w-full px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-500 rounded-lg hover:bg-red-400 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-50">
                Sign In
              </button>
            </div>
            {errors.map((item) => (
              <p className="text-red-500 text-center mt-2">{item}</p>
            ))}
          </form>
        </div>
      </div>
    </div>
  );
}
