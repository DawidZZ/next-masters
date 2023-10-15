import { executeGraphql } from "@/api/graphqlApi";
import Pagination from "@/components/organisms/pagination";
import ProductsGrid from "@/components/organisms/products-grid";
import { ProductsGetListDocument } from "@/gql/graphql";

// TODO: temporary solution
export function generateStaticParams() {
  return Array(10).map((_, i) => i + 1);
}

export default async function Products({ params }: { params: { page: string } }) {
  const response = await fetch(
    `https://naszsklep-api.vercel.app/api/products?take=20&offset=${
      (Number(params.page) - 1) * 20
    }`,
  );
  const productsREST = (await response.json()) as Product[];

  const { products } = await executeGraphql(ProductsGetListDocument, {
    offset: (Number(params.page) - 1) * 20,
  });

  console.log(products);

  return (
    <div className="min-h-full bg-white">
      <ProductsGrid products={productsREST} />
      <Pagination from={1} to={10} current={Number(params.page)} href="/products" />
    </div>
  );
}
