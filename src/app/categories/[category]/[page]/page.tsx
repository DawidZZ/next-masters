export default async function CategoryPage({
  params,
}: {
  params: { category: string; page: string };
}) {
  const { category, page } = params;
  return (
    <div>
      Category: {category}, Page: {page}
    </div>
  );
}
