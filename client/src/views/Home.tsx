import { Product } from "../components/Product";
import { products } from "../utils/products";

export function Home() {
  return (
    <div className="w-[100vw] h-[100vh] overflow-y-auto flex flex-wrap justify-center items-start gap-12 p-4 pt-24">
      {products.map((item) => (
        <Product
          name={item.name}
          description={item.description}
          price={item.price}
          img={item.img}
        />
      ))}
    </div>
  );
}
