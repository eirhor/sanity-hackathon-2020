import * as React from "react";
import { ICategoryItem } from "../data/hooks/use-categories";
import { Link } from "react-router-dom";
import { Col } from "geta-core/src/Atoms/Layout/Col/col";

interface ICategoryPartialProps extends ICategoryItem {}

export const CategoryPartial: React.FC<ICategoryPartialProps> = ({
  id,
  title,
  mainImage,
  mainImageAlt
}: ICategoryPartialProps) => (
    <Col>
      <Link to={`/categories/${id}`}>
        <img src={mainImage.asset.url} alt={mainImageAlt}/>
        {title}</Link>
    </Col>
);
