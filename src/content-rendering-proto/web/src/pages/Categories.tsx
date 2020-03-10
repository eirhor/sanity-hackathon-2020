import * as React from "react";
import { useCategories } from "../data/hooks/use-categories";
import { CategoryPartial } from "../partials/CategoryPartial";
import { Col } from "geta-core/src/Atoms/Layout/Col/col";
import { Row } from "geta-core/src/Atoms/Layout/Row/row";

interface ICategoriesProps {}

export const Categories: React.FC<ICategoriesProps> = (
  props: ICategoriesProps
) => {
  const [categories] = useCategories();

  return (
    <div className={"categories"}>
      <h1>Categories</h1>
      <Row tag="ul" rowSettings={{small: 1,medium: 2, large: 4}}>
        {categories.map((c, i) => (
          <Col key={i}>
            <CategoryPartial {...c} />
          </Col>
        ))}
      </Row>
    </div>
  );
};
