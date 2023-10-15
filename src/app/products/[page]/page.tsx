import { executeGraphql } from "@/api/graphqlApi";
import Pagination from "@/components/organisms/pagination";
import ProductsGrid from "@/components/organisms/products-grid";
import { ProductsGetListDocument } from "@/gql/graphql";

export function generateStaticParams() {
  return Array(4).map((_, i) => i + 1);
}

export default async function Products({ params }: { params: { page: string } }) {
  const { products } = await executeGraphql(ProductsGetListDocument, {
    count: 4,
    offset: (Number(params.page) - 1) * 4,
  });

  return (
    <div className="min-h-full bg-white">
      <ProductsGrid products={products} />
      <Pagination count={4} total={14} current={Number(params.page)} href="/products" />
    </div>
  );
}
