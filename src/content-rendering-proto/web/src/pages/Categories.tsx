import * as React from "react";
import { useCategories } from "../data/hooks/use-categories";
import { CategoryPartial } from "../partials/CategoryPartial";
import {Container, ContainerItem, Heading1} from 'geta-core';

interface ICategoriesProps {}

export const Categories: React.FC<ICategoriesProps> = (
  props: ICategoriesProps
) => {
  const [categories] = useCategories();

  return (
    <div className={"categories"}>
      <Heading1>Categories</Heading1>
      <Container>
        {categories.map((c, i) => (
          <ContainerItem key={i}>
            <CategoryPartial {...c} />
          </ContainerItem>
        ))}
      </Container>
    </div>
  );
};
