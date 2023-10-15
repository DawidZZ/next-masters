import CollectionCard from "@/components/atoms/collections/collection-card";

const CollectionCards = ({ collections }: { collections: Collection[] }) => {
  return (
    <div className="justify flex h-full w-full items-center justify-evenly bg-white">
      {collections.map((category: Collection) => (
        <CollectionCard key={category.slug} {...category} />
      ))}
    </div>
  );
};

export default CollectionCards;
