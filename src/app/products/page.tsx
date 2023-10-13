import ProductsGrid from "@/components/organisms/products-grid";

export default async function Products() {
  const response = await fetch("https://naszsklep-api.vercel.app/api/products?take=20");
  const products = (await response.json()) as Product[];

  return (
    <div className="min-h-full bg-white">
      <ProductsGrid products={products} />
    </div>
  );
}
