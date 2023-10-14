import ProductsGrid from "@/components/organisms/products-grid";

export default async function Home() {
  const response = await fetch("https://naszsklep-api.vercel.app/api/products?take=4");
  const products = (await response.json()) as Product[];

  return (
    <div className="flex h-full flex-col justify-center bg-white">
      <ProductsGrid products={products} />
    </div>
  );
}
