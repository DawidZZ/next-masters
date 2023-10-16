type Cart = {
  id: string;
  orderItems: {
    id: string;
    quantity: number;
    product?:
      | {
          id: string;
          description: string;
          name: string;
          price: number;
          images: {
            url: string;
          }[];
        }
      | null
      | undefined;
  }[];
};
