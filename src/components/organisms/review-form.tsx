import React, { useState } from "react";

const ReviewForm = () => {
  const [formData, setFormData] = useState({
    headline: "",
    content: "",
    rating: "",
    name: "",
    email: "",
  });

  const { headline, content, rating, name, email } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dodaj tutaj logikę wysyłania danych, np. wywołanie API
    console.log("Dane formularza do wysłania", formData);
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-full max-w-md">
        <form className="mb-4 rounded bg-white px-12 pb-8 pt-6 shadow-lg" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="mb-2 block text-sm font-bold text-gray-700" htmlFor="headline">
              Headline
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              name="headline"
              type="text"
              required
              value={headline}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label className="mb-2 block text-sm font-bold text-gray-700" htmlFor="content">
              Content
            </label>
            <textarea
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              name="content"
              required
              value={content}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="mb-2 block text-sm font-bold text-gray-700" htmlFor="rating">
              Rating
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              name="rating"
              type="number"
              required
              value={rating}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="mb-2 block text-sm font-bold text-gray-700" htmlFor="name">
              Name
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              name="name"
              type="text"
              required
              value={name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label className="mb-2 block text-sm font-bold text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              name="email"
              type="email"
              required
              value={email}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReviewForm;
