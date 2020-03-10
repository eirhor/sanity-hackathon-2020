import * as React from "react";
import { IPostItem } from "../data/hooks/use-posts";
import { Link } from "react-router-dom";

interface IPostPartialProps extends IPostItem {
}

export const PostPartial: React.FC<IPostPartialProps> = ({
  title,
  id,
  mainImage
}: IPostPartialProps) => (
    <Link to={`/posts/${id}`}>
        <section>
            <div>
                <img src={mainImage.asset.url} alt={title} />
            </div>
            <div>
                <h4>{title}</h4>
            </div>
        </section>
    </Link>
);
