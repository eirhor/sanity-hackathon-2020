import * as React from "react";
import { ICategoryItem } from "../data/hooks/use-categories";
import { Link } from "react-router-dom";
import {MenuItem} from 'react-foundation';

interface ICategoryPartialProps extends ICategoryItem {}

export const CategoryPartial: React.FC<ICategoryPartialProps> = ({
  id,
  title
}: ICategoryPartialProps) => (
    <MenuItem>
      <Link to={`/categories/${id}`}>{title}</Link>
    </MenuItem>
);
