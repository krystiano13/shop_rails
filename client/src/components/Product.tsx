import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

interface Props {
    name: string;
    price: number;
    img: string;
    description: string;
}

export const Product: React.FC<Props> = (props) => {
  const authContext = useContext(AuthContext);
  return (
    <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <div className="px-4 py-2">
        <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">
          {props.name}
        </h1>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
          {props.description}
        </p>
      </div>

      <img
        className="object-cover w-full h-48 mt-2"
        src={props.img}
        alt="product image"
      />

      <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
        <h1 className="text-lg font-bold text-white">${props.price}</h1>
        {authContext.auth.is_logged_in && (
          <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
}
