import { executeGraphql } from "@/api/graphqlApi";
import ProductsGrid from "@/components/organisms/products-grid";
import { ProductsGetSearchedDocument } from "@/gql/graphql";

export default async function Search({ searchParams }: { searchParams: { query: string } }) {
  if (!searchParams.query) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-white text-2xl">
        Nic tu nie ma!
      </div>
    );
  }

  const { products } = await executeGraphql(ProductsGetSearchedDocument, {
    search: searchParams.query,
  });

  if (products.length === 0) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-white text-center text-2xl text-gray-500">
        Nic tu nie ma!
      </div>
    );
  }

  return (
    <div className="min-h-full bg-white">
      <h2 className="p-10 pb-0 text-2xl font-bold">Pokazuję {products.length} wyników:</h2>
      <ProductsGrid products={products} />
    </div>
  );
}
