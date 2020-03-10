import * as React from "react";
import { ICategoryItem } from "../data/hooks/use-categories";
import { Link } from "react-router-dom";

interface ICategoryPartialProps extends ICategoryItem {}

export const CategoryPartial: React.FC<ICategoryPartialProps> = ({
  id,
  title
}: ICategoryPartialProps) => (
    <li>
      <Link to={`/categories/${id}`}>{title}</Link>
    </li>
);
