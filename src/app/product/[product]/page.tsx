import ProductView from "@/components/organisms/product-view";

export async function generateMetadata({ params }: { params: { product: string } }) {
  const response = await fetch(`https://naszsklep-api.vercel.app/api/products/${params.product}`);
  const product = (await response.json()) as Product;

  return {
    title: product.title,
    description: product.description,
  };
}

export default async function Product({ params }: { params: { product: string } }) {
  const response = await fetch(`https://naszsklep-api.vercel.app/api/products/${params.product}`);
  const product = (await response.json()) as Product;

  return <ProductView product={product} />;
}
