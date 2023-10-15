import ReviewSubmit from "../atoms/product-view/review-submit";
import { addReview } from "@/api/reviewApi";

const ReviewForm = ({ productId }: { productId: string }) => {
  async function addReviewAction(formData: FormData) {
    "use server";

    const review = Object.fromEntries(formData) as unknown as Review;

    await addReview(productId, review);
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-full max-w-md">
        <form className="mb-4 rounded bg-white px-12 pb-8 pt-6 shadow-lg" action={addReviewAction}>
          <div className="mb-4">
            <label className="mb-2 block text-sm font-bold text-gray-700" htmlFor="headline">
              Headline
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              name="headline"
              type="text"
              required
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
              max={5}
              min={1}
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
            />
          </div>
          <div className="flex items-center justify-between">
            <ReviewSubmit />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReviewForm;
