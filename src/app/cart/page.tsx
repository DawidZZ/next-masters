import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { executeGraphql } from "@/api/graphqlApi";
import { CartGetByIdDocument } from "@/gql/graphql";

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

  return (
    <div>
      <h1>Order #{cart.id} summary</h1>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cart.orderItems.map((item) => {
            if (!item.product) {
              return null;
            }
            return (
              <tr key={item.product.id}>
                <td>{item.product.name}</td>
                <td>{item.quantity}</td>
                <td>${item.product.price / 100}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
