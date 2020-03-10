import * as React from "react";
import { usePost } from "../data/hooks/use-posts";
import { useParams } from "react-router-dom";
import { AuthorPartial } from "../partials/AuthorPartial";
import { CategoryPartial } from "../partials/CategoryPartial";
import {ContentRenderer} from '../content/ContentRenderer';

export interface IPostProps {}

export const Post: React.FC<IPostProps> = (props: IPostProps) => {
  const { postId } = useParams();
  const [post] = usePost(postId);

  return (
    <div className={"post"}>
      <h1>Post - {post.title}</h1>
      <img src={post.mainImage.asset.url} alt={post.mainImageAlt} />
      <ContentRenderer content={post.content}/>
      <h2>Categories</h2>
      <ul>
        {post.categories.map((c, i) => (
            <CategoryPartial key={i} {...c} />
        ))}
      </ul>
      <h2>Author</h2>
      <AuthorPartial {...post.author} />
    </div>
  );
};
