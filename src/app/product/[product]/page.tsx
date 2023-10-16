import { executeGraphql } from "@/api/graphqlApi";
import ProductView from "@/components/organisms/product-view";
import { ProductGetByIdDocument } from "@/gql/graphql";

export async function generateMetadata({ params }: { params: { product: string } }) {
  const { product } = await executeGraphql(ProductGetByIdDocument, { id: params.product });

  return {
    title: product?.name || "Product",
    description: product?.description || "Product",
    openGraph: {
      title: product?.name || "Product",
      description: product?.description || "Product",
      images: [
        {
          url: product?.images[0].url || "",
          width: 800,
          height: 600,
          alt: product?.name || "Product",
        },
      ],
    },
  };
}

export default async function Product({ params }: { params: { product: string } }) {
  const { product } = await executeGraphql(ProductGetByIdDocument, { id: params.product });

  return <>{product && <ProductView product={product} />}</>;
}
