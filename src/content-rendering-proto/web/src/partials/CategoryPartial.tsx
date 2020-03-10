import * as React from "react";
import { ICategoryItem } from "../data/hooks/use-categories";
import { Link } from "react-router-dom";
import {Paragraph} from 'geta-core';

interface ICategoryPartialProps extends ICategoryItem {}

export const CategoryPartial: React.FC<ICategoryPartialProps> = ({
  id,
  title,
  mainImage,
  mainImageAlt
}: ICategoryPartialProps) => (
    <Link to={`/categories/${id}`}>
        <img className={'img'} src={mainImage.asset.url} alt={mainImageAlt}/>
        <Paragraph>{title}</Paragraph>
    </Link>
);
