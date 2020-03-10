import * as React from "react";
import { usePosts } from "../data/hooks/use-posts";
import { PostPartial } from "../partials/PostPartial";

interface IPostsProps {}

export const Posts: React.FC<IPostsProps> = (props: IPostsProps) => {
  const [posts] = usePosts();

  return (
    <div className={"posts"}>
      <h1>Posts</h1>
      <ul>
        {posts.map((p, i) => (
          <li key={i}>
            <PostPartial {...p} />
          </li>
        ))}
      </ul>
    </div>
  );
};
