import ProductView from "@/components/organisms/product-view";

export default async function Product({ params }: { params: { product: string } }) {
  const response = await fetch(`https://naszsklep-api.vercel.app/api/products/${params.product}`);

  const product = (await response.json()) as Product;

  return <ProductView product={product} />;
}
