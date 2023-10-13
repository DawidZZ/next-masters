import ProductsGrid from "@/components/organisms/products-grid";

const products: Product[] = [
  {
    id: "1",
    name: "Basic Tee",
    description: "Black",
    price: 35,
    image: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    category: "clothes",
  },
  {
    id: "2",
    name: "Basic T-shirt",
    description: "Black",
    price: 35,
    image: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    category: "clothes",
  },
  {
    id: "3",
    name: "Basic Koszulka",
    description: "Black",
    price: 35,
    image: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    category: "clothes",
  },
  {
    id: "4",
    name: "Basic T-Szulka",
    description: "Black",
    price: 35,
    image: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    category: "clothes",
  },
  {
    id: "5",
    name: "Basic Tee",
    description: "Black",
    price: 35,
    image: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    category: "clothes",
  },
  {
    id: "6",
    name: "Basic T-shirt",
    description: "Black",
    price: 35,
    image: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    category: "clothes",
  },
  {
    id: "7",
    name: "Basic Koszulka",
    description: "Black",
    price: 35,
    image: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    category: "clothes",
  },
  {
    id: "8",
    name: "Basic T-Szulka",
    description: "Black",
    price: 35,
    image: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    category: "clothes",
  },
];

export default async function Products() {
  return (
    <div className="min-h-full bg-white">
      <ProductsGrid products={products} />
    </div>
  );
}
