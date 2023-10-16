import { executeGraphql } from "@/api/graphqlApi";
import Pagination from "@/components/organisms/pagination";
import ProductsGrid from "@/components/organisms/products-grid";
import { ProductsGetAllDocument } from "@/gql/graphql";
import SortingComponent from "@/components/atoms/sort/sort-select";

export function generateStaticParams() {
  return Array(4).map((_, i) => i + 1);
}

const averageRating = (product: Product): number => {
  if (product.reviews?.length === 0) {
    return 0;
  }

  const totalRating = product.reviews?.reduce((total, review) => total + review.rating, 0) ?? 0;
  return totalRating / (product.reviews?.length ?? 1);
};

export default async function Products({
  params,
  searchParams,
}: {
  params: { page: string };
  searchParams: { sort: string };
}) {
  // const { products } = await executeGraphql(ProductsGetListDocument, {
  //   count: 4,
  //   offset: (Number(params.page) - 1) * 4,
  // });

  const { products } = await executeGraphql(ProductsGetAllDocument, {});

  let sortedProducts = products;

  if (searchParams.sort === "price") {
    sortedProducts = products.sort((a, b) => a.price - b.price).reverse();
  } else if (searchParams.sort === "rating") {
    sortedProducts = products
      .sort((a, b) => {
        return averageRating(a) - averageRating(b);
      })
      .reverse();
  }

  const offset = (parseInt(params.page) - 1) * 4;
  console.dir(
    sortedProducts.map((product) => averageRating(product)),
    { depth: 10 },
  );

  return (
    <div className="min-h-full bg-white">
      <SortingComponent />
      <ProductsGrid products={sortedProducts.slice(0 + offset, 4 + offset)} />
      <Pagination count={4} total={14} current={Number(params.page)} href="/products" />
    </div>
  );
}
