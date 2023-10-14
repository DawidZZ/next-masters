import Pagination from "@/components/organisms/pagination";
import ProductsGrid from "@/components/organisms/products-grid";

export default async function Products({ params }: { params: { page: string } }) {
  const response = await fetch(
    `https://naszsklep-api.vercel.app/api/products?take=20&offset=${
      (Number(params.page) - 1) * 20
    }`,
  );
  const products = (await response.json()) as Product[];

  return (
    <div className="min-h-full bg-white">
      <ProductsGrid products={products} />
      <Pagination from={1} to={10} current={Number(params.page)} href="/products" />
    </div>
  );
}
