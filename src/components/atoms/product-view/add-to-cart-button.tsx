"use client";

import { experimental_useFormStatus as useFormStatus } from "react-dom";

const AddToCartButton = () => {
  const formStatus = useFormStatus();
  return (
    <button
      data-testid="add-to-cart-button"
      disabled={formStatus.pending}
      type="submit"
      className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:border-none disabled:bg-slate-300 disabled:ring-0"
    >
      Add to cart
    </button>
  );
};

export default AddToCartButton;
