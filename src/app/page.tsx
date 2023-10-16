import { executeGraphql } from "@/api/graphqlApi";
import CollectionCards from "@/components/molecules/collections/collection-cards";
import ProductsGrid from "@/components/organisms/products-grid";
import { CollectionsGetListDocument, ProductsGetListDocument } from "@/gql/graphql";

export default async function Home() {
  const { products } = await executeGraphql(ProductsGetListDocument, {
    count: 4,
    offset: 0,
  });

  const { collections } = await executeGraphql(CollectionsGetListDocument, {});

  return (
    <div className="flex h-full flex-col justify-center bg-white">
      <CollectionCards collections={collections} />
      <ProductsGrid products={products} />
    </div>
  );
}
