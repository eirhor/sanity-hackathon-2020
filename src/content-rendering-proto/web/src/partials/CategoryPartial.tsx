import * as React from "react";
import { ICategoryItem } from "../data/hooks/use-categories";
import { Link } from "react-router-dom";

interface ICategoryPartialProps extends ICategoryItem {}

export const CategoryPartial: React.FC<ICategoryPartialProps> = ({
  id,
  title,
  mainImage,
  mainImageAlt
}: ICategoryPartialProps) => (
    <li>
      <Link to={`/categories/${id}`}>
        <img src={mainImage.asset.url} alt={mainImageAlt}/>
        {title}</Link>
    </li>
);
