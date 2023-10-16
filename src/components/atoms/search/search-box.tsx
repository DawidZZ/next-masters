"use client";

import { useRouter } from "next/navigation";
import { type ChangeEvent, useEffect, useRef, useState } from "react";

const SearchBox = () => {
  const [text, setText] = useState("");
  const lastExecution = useRef(Date.now());
  const router = useRouter();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
    lastExecution.current = Date.now();
  };

  useEffect(() => {
    const delay = 500;

    const intervalId = setInterval(() => {
      if (text && Date.now() - lastExecution.current >= delay) {
        router.push(`/search?query=${text}`);
        clearInterval(intervalId);
      }
    }, delay);

    return () => {
      clearInterval(intervalId);
    };
  }, [text, router]);

  return (
    <div className="flex items-center justify-center p-1">
      <input
        id="searchbox"
        name="search"
        placeholder="Search..."
        type="text"
        role="searchbox"
        value={text}
        onChange={handleChange}
        className="block w-full rounded-md border-0 p-5 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400  sm:text-sm sm:leading-6"
      />
    </div>
  );
};

export default SearchBox;
