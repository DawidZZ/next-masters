import { executeGraphql } from "@/api/graphqlApi";
import ProductsGrid from "@/components/organisms/products-grid";
import { CollectionsGetProductsDocument } from "@/gql/graphql";

export async function generateMetadata({ params }: { params: { collection: string } }) {
  const { collections } = await executeGraphql(CollectionsGetProductsDocument, {
    slug: params.collection,
  });

  const selectedCollection = collections?.[0] ?? {};

  return {
    title: `${selectedCollection.name}`,
    description: `${selectedCollection.name}`,
  };
}

export default async function Collection({ params }: { params: { collection: string } }) {
  const { collections } = await executeGraphql(CollectionsGetProductsDocument, {
    slug: params.collection,
  });

  const selectedCollection = collections?.[0] ?? {};

  return (
    <div className="h-full w-full bg-white p-10">
      <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
        {selectedCollection.name}
      </h1>
      <ProductsGrid products={selectedCollection.products} />
    </div>
  );
}
