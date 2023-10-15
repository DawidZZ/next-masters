import { executeGraphql } from "@/api/graphqlApi";
import ProductView from "@/components/organisms/product-view";
import { ProductGetByIdDocument } from "@/gql/graphql";

export async function generateMetadata({ params }: { params: { product: string } }) {
  const { product } = await executeGraphql(ProductGetByIdDocument, { id: params.product });

  return {
    title: product?.name || "Product",
    description: product?.description || "Product",
  };
}

export default async function Product({ params }: { params: { product: string } }) {
  const { product } = await executeGraphql(ProductGetByIdDocument, { id: params.product });

  return <>{product && <ProductView product={product} />}</>;
}
