import { executeGraphql } from "@/api/graphqlApi";
import ProductsGrid from "@/components/organisms/products-grid";
import { ProductGetRelatedDocument } from "@/gql/graphql";

const RelatedProducts = async ({ product }: { product: Product }) => {
  const { product: productWithRelated } = await executeGraphql(ProductGetRelatedDocument, {
    id: product.id,
  });

  const relatedProducts = productWithRelated?.categories[0].products ?? [];

  return (
    <div data-testid="related-products">
      <ProductsGrid products={relatedProducts} />
    </div>
  );
};

export default RelatedProducts;
