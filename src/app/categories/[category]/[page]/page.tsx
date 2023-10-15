import { executeGraphql } from "@/api/graphqlApi";
import Pagination from "@/components/organisms/pagination";
import ProductsGrid from "@/components/organisms/products-grid";
import { CategoryGetAllProductsDocument, CategoryGetProductsDocument } from "@/gql/graphql";

export async function generateMetadata({ params }: { params: { category: string; page: string } }) {
  const { categories } = await executeGraphql(CategoryGetAllProductsDocument, {
    slug: params.category,
  });

  return {
    title: `${categories?.[0]?.name || "Category"}`,
    description: `${categories?.[0]?.name || "Category"}`,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: { category: string; page: string };
}) {
  const { category, page } = params;

  const { categories: categoriesAllProducts } = await executeGraphql(
    CategoryGetAllProductsDocument,
    {
      slug: category,
    },
  );

  const productCount = categoriesAllProducts[0]?.products.length ?? 0;

  const { categories } = await executeGraphql(CategoryGetProductsDocument, {
    slug: category,
    count: 4,
    offset: (Number(page) - 1) * 4,
  });

  const selectedCategory = categories?.[0];

  return (
    <div className="min-h-full bg-white">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
        Category: {selectedCategory.name}
      </h2>
      <ProductsGrid products={selectedCategory.products} />
      <Pagination
        count={Math.min(4, productCount)}
        total={productCount}
        current={Number(page)}
        href={`/categories/${category}`}
      />
    </div>
  );
}
