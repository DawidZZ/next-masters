const ProductImageGallery = ({
  images,
  description,
}: {
  images: { url: string }[];
  description: string;
}) => {
  return (
    <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
      <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
        <img
          src={images[0].url}
          alt={description}
          className="h-full w-full object-contain object-center"
        />
      </div>
      <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
          <img
            src={images[1] ? images[1].url : images[0].url}
            alt={description}
            className="h-full w-full object-contain object-center"
          />
        </div>
        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
          <img
            src={images[2] ? images[2].url : images[0].url}
            alt={description}
            className="h-full w-full object-contain object-center"
          />
        </div>
      </div>
      <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
        <img
          src={images[3] ? images[3].url : images[0].url}
          alt={description}
          className="h-full w-full object-contain object-center"
        />
      </div>
    </div>
  );
};

export default ProductImageGallery;
