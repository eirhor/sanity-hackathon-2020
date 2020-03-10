import * as React from "react";
import { useParams } from "react-router-dom";
import { useCategory } from "../data/hooks/use-categories";
import { usePostsWithCategory } from "../data/hooks/use-posts";
import { PostPartial } from "../partials/PostPartial";
import {Cell, Grid} from 'react-foundation';

interface ICategoryProps {}

export const Category: React.FC<ICategoryProps> = (props: ICategoryProps) => {
  const { categoryId } = useParams();
  const [category] = useCategory(categoryId);
  const [posts] = usePostsWithCategory(categoryId);

  return (
    <div>
      <h1>{category.title}</h1>
      <h2>Posts</h2>
        <p>{category.description}</p>
      <Grid upOnSmall={1} upOnMedium={2}>
        {posts.map((p, i) => (
          <Cell key={i}>
            <PostPartial {...p} />
          </Cell>
        ))}
      </Grid>
    </div>
  );
};
