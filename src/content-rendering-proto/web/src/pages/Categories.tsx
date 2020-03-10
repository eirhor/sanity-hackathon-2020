import * as React from "react";
import { useCategories } from "../data/hooks/use-categories";
import { CategoryPartial } from "../partials/CategoryPartial";

interface ICategoriesProps {}

export const Categories: React.FC<ICategoriesProps> = (
  props: ICategoriesProps
) => {
  const [categories] = useCategories();

  return (
    <div className={"categories"}>
      <h1>Categories</h1>
      <ul>
        {categories.map((c, i) => (
          <li key={i}>
            <CategoryPartial {...c} />
          </li>
        ))}
      </ul>
    </div>
  );
};
