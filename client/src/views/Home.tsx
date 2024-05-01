import { Product } from "../components/Product";

export function Home() {
  return (
    <div className="w-[100vw] h-[100vh] overflow-y-auto flex flex-wrap justify-center items-start gap-12 p-4 pt-24">
      <Product
        name="Product 1"
        description="Product 1 description"
        price={10}
        img="https://via.placeholder.com/150"
      />
      <Product
        name="Product 1"
        description="Product 1 description"
        price={10}
        img="https://via.placeholder.com/150"
      />
      <Product
        name="Product 1"
        description="Product 1 description"
        price={10}
        img="https://via.placeholder.com/150"
      />
    </div>
  );
}
