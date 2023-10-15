import CategoryCard from "@/components/atoms/categories/category-card";

const CategoryCards = ({ categories }: { categories: Category[] }) => {
  return (
    <div className="justify flex h-full w-full items-center justify-evenly bg-white">
      {categories.map((category: Category) => (
        <CategoryCard key={category.slug} {...category} />
      ))}
    </div>
  );
};

export default CategoryCards;
