"use server";

import { executeGraphql } from "@/api/graphqlApi";
import { CartChangeItemQuantityDocument, CartRemoveItemDocument } from "@/gql/graphql";

export const changeItemQuantity = (itemId: string, quantity: number) => {
  return executeGraphql(CartChangeItemQuantityDocument, {
    itemId,
    quantity,
  });
};

export const removeItem = (itemId: string) => {
  return executeGraphql(CartRemoveItemDocument, {
    itemId,
  });
};
