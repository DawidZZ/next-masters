import { executeGraphql } from "@/api/graphqlApi";
import ProductsGrid from "@/components/organisms/products-grid";
import { ProductsGetListDocument } from "@/gql/graphql";

export default async function Home() {
  const { products } = await executeGraphql(ProductsGetListDocument, {
    count: 4,
    offset: 0,
  });

  return (
    <div className="flex h-full flex-col justify-center bg-white">
      <ProductsGrid products={products} />
    </div>
  );
}
