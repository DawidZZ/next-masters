import React from "react";

const ProductDetails = ({
  description,
  longDescription,
}: {
  description: string;
  longDescription: string;
}) => {
  return (
    <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
      <div>
        <h3 className="sr-only">Description</h3>

        <div className="space-y-6">
          <p className="text-base text-gray-900">{description}</p>
        </div>
      </div>
      <div className="mt-10">
        <h2 className="text-sm font-medium text-gray-900">Details</h2>

        <div className="mt-4 space-y-6">
          <p className="text-sm text-gray-600">{longDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
