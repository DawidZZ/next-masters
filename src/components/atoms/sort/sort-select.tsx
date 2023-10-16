"use client";

import { useRouter } from "next/navigation";
import React, { type ChangeEvent, useState } from "react";

const SortingComponent = () => {
  const [sortOption, setSortOption] = useState("");
  const router = useRouter();

  const handleSortChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSortOption(value);

    if (value === "price_high_to_low") {
      router.push("/products/1?sort=price");
    } else if (value === "rating_high_to_low") {
      router.push("/products/1?sort=rating");
    }
  };

  return (
    <div className="relative inline-block w-64">
      <label htmlFor="sort" className="mb-2 block text-sm font-bold text-gray-700">
        Sortuj według:
      </label>
      <select
        value={sortOption}
        onChange={handleSortChange}
        className="block w-full appearance-none rounded border border-gray-300 bg-white px-4 py-3 pr-8 leading-tight text-gray-700 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        id="sort"
      >
        <option value="">Wybierz opcję</option>
        <option data-testid="sort-by-price" value="price_high_to_low">
          Cena: od najwyższej
        </option>
        <option data-testid="sort-by-rating" value="rating_high_to_low">
          Ocena: od najwyższej
        </option>
      </select>

      {/* Ikona strzałki dla elementu select */}
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg
          className="h-4 w-4 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M5.555 12.222L10 16.666l4.445-4.444H5.555z" />
        </svg>
      </div>
    </div>
  );
};

export default SortingComponent;
