import { StarIcon } from "@heroicons/react/20/solid";

function classNames(...classes: (string | boolean)[]) {
  return classes.filter(Boolean).join(" ");
}

const Rating = ({ rate, count }: { rate: number; count: number }) => {
  return (
    <div className="mt-6">
      <h3 className="sr-only">Reviews</h3>
      <div className="flex items-center">
        <div className="flex items-center">
          {[0, 1, 2, 3, 4].map((rating) => (
            <StarIcon
              key={rating}
              className={classNames(
                rate > rating ? "text-gray-900" : "text-gray-200",
                "h-5 w-5 flex-shrink-0",
              )}
              aria-hidden="true"
            />
          ))}
        </div>
        <p className="sr-only">{rate} out of 5 stars</p>
        <div className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
          {count} reviews
        </div>
      </div>
    </div>
  );
};

export default Rating;
