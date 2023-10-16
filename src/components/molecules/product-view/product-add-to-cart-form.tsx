import { cookies } from "next/headers";
import { addProductToCart, getOrCreateCart } from "@/api/cartApi";
import AddToCartButton from "@/components/atoms/product-view/add-to-cart-button";

const AddToCartForm = ({ id }: { id: string }) => {
  async function addToCartAction() {
    "use server";

    const cart = await getOrCreateCart();
    cookies().set("cartId", cart.id);
    await addProductToCart(cart.id, id);
  }

  return (
    <form action={addToCartAction} className="mt-10">
      <AddToCartButton />
    </form>
  );
};

export default AddToCartForm;
