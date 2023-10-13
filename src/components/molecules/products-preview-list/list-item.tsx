import ListItemDescription from "../../atoms/products-preview-list/products-preview-list-item-description";

const ListItem = ({ product }: { product: Product }) => {
  return (
    <>
      <div className="aspect-h-1 aspect-w-1 lg:aspect-none w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
        <img
          src={product.image}
          alt={product.description}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <ListItemDescription {...product} />
    </>
  );
};

export default ListItem;
