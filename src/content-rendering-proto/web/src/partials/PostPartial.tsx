import * as React from "react";
import { IPostItem } from "../data/hooks/use-posts";
import { Link } from "react-router-dom";
import {Heading4} from 'geta-core';

interface IPostPartialProps extends IPostItem {
}

export const PostPartial: React.FC<IPostPartialProps> = ({
  title,
  id,
  mainImage,
  mainImageAlt
}: IPostPartialProps) => (
    <Link to={`/posts/${id}`}>
        <section>
            <div>
                <img className={'img'} src={mainImage.asset.url} alt={mainImageAlt} />
            </div>
            <div>
                <Heading4>{title}</Heading4>
            </div>
        </section>
    </Link>
);
