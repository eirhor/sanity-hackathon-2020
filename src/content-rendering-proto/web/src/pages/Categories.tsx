import * as React from "react";
import { useCategories } from "../data/hooks/use-categories";
import { CategoryPartial } from "../partials/CategoryPartial";
import {Menu, MenuItem} from 'react-foundation';

interface ICategoriesProps {}

export const Categories: React.FC<ICategoriesProps> = (
  props: ICategoriesProps
) => {
  const [categories] = useCategories();

  return (
    <div className={"categories"}>
      <h1>Categories</h1>
      <Menu isVertical={true}>
        {categories.map((c, i) => (
          <MenuItem key={i}>
            <CategoryPartial {...c} />
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};
