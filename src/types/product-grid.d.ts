type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  images: { url: string }[];
  categories?: { name: string }[];
  reviews?: { rating: number }[];
};
