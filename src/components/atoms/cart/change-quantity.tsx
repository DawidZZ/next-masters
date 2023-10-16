"use client";
import { experimental_useOptimistic as useOptimistic } from "react";
import { changeItemQuantity, removeItem } from "@/app/cart/actions";

export function ChangeQuantity({ itemId, quantity }: { itemId: string; quantity: number }) {
  const [optimisticQuantity, setOptimisticQuantity] = useOptimistic(
    quantity,
    (_state, newQuantity: number) => newQuantity,
  );

  return (
    <form className="flex">
      <button
        className="h-6 w-6 rounded bg-green-400 px-2 py-1 text-white hover:bg-green-500"
        data-testid="decrement"
        type="submit"
        formAction={async () => {
          if (optimisticQuantity <= 1) {
            console.log("remove item");
            await removeItem(itemId);
            return;
          }
          setOptimisticQuantity(optimisticQuantity - 1);
          await changeItemQuantity(itemId, optimisticQuantity - 1);
        }}
      >
        -
      </button>
      <span className="w-8 text-center" data-testid="quantity">
        {optimisticQuantity}
      </span>
      <button
        className="h-6 w-6 rounded bg-red-400 px-2 py-1 text-white hover:bg-red-500"
        data-testid="increment"
        type="submit"
        formAction={async () => {
          setOptimisticQuantity(optimisticQuantity + 1);
          await changeItemQuantity(itemId, optimisticQuantity + 1);
        }}
      >
        +
      </button>
    </form>
  );
}
