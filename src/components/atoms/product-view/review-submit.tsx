"use client";

import { experimental_useFormStatus as useFormStatus } from "react-dom";

const ReviewSubmit = () => {
  const formStatus = useFormStatus();
  return (
    <button
      className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none disabled:bg-gray-200 disabled:hover:bg-gray-200"
      type="submit"
      disabled={formStatus.pending}
    >
      Submit
    </button>
  );
};

export default ReviewSubmit;
