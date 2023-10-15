import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { executeGraphql } from "@/api/graphqlApi";
import { CartGetByIdDocument } from "@/gql/graphql";
import CartView from "@/components/organisms/cart-view";

export default async function CartPage() {
  const cartId = cookies().get("cartId")?.value;

  if (!cartId) {
    redirect("/");
  }

  const { order: cart } = await executeGraphql(CartGetByIdDocument, {
    id: cartId,
  });

  if (!cart) {
    redirect("/");
  }

  return <CartView cart={cart} />;
}
