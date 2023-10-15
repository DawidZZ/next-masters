import { cookies } from "next/headers";
import { executeGraphql } from "./graphqlApi";
import {
  CartAddItemDocument,
  CartChangeItemQuantityDocument,
  CartCreateDocument,
  CartGetByIdDocument,
  ProductGetByIdDocument,
} from "@/gql/graphql";

export async function getOrCreateCart() {
  const cartId = cookies().get("cartId")?.value;
  if (cartId) {
    const { order: cart } = await executeGraphql(CartGetByIdDocument, {
      id: cartId,
    });
    if (cart) {
      return cart;
    }
  }

  const { createOrder: newCart } = await executeGraphql(CartCreateDocument, {});
  if (!newCart) {
    throw new Error("Failed to create cart");
  }

  cookies().set("cartId", newCart.id);
  return newCart;
}

export async function addProductToCart(cartId: string, productId: string) {
  const { order: cart } = await executeGraphql(CartGetByIdDocument, {
    id: cartId,
  });

  if (cart?.orderItems.some((item) => item.product?.id === productId)) {
    const orderItem = cart.orderItems.find((item) => item.product?.id === productId);
    if (!orderItem) return;
    await executeGraphql(CartChangeItemQuantityDocument, {
      itemId: orderItem.id,
      quantity: orderItem.quantity + 1,
    });

    return;
  }

  const { product } = await executeGraphql(ProductGetByIdDocument, {
    id: productId,
  });

  if (!product) {
    throw new Error(`Product with id ${productId} not found`);
  }

  await executeGraphql(CartAddItemDocument, {
    cartId,
    productId,
    total: product.price,
  });
}
