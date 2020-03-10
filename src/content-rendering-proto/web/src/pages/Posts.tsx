import * as React from "react";
import { usePosts } from "../data/hooks/use-posts";
import { PostPartial } from "../partials/PostPartial";
import {Cell, Grid} from 'react-foundation';

interface IPostsProps {}

export const Posts: React.FC<IPostsProps> = (props: IPostsProps) => {
  const [posts] = usePosts();

  return (
    <div className={"posts"}>
      <h1>Posts</h1>
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
