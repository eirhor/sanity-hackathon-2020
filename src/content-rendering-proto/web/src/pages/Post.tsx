import * as React from "react";
import { usePost } from "../data/hooks/use-posts";
import { useParams } from "react-router-dom";
import { AuthorPartial } from "../partials/AuthorPartial";
import { CategoryPartial } from "../partials/CategoryPartial";
import {ContentRenderer} from '../content/ContentRenderer';
import {Menu, MenuItem, Thumbnail} from 'react-foundation';

export interface IPostProps {}

export const Post: React.FC<IPostProps> = (props: IPostProps) => {
  const { postId } = useParams();
  const [post] = usePost(postId);

  return (
    <div className={"post"}>
      <h1>Post - {post.title}</h1>
      <Thumbnail src={post.mainImage.asset.url} alt={post.title} />
      <ContentRenderer content={post.content}/>
      <h2>Categories</h2>
      <Menu isVertical={true}>
        {post.categories.map((c, i) => (
          <MenuItem key={i}>
            <CategoryPartial {...c} />
          </MenuItem>
        ))}
      </Menu>
      <h2>Author</h2>
      <AuthorPartial {...post.author} />
    </div>
  );
};
