import * as React from "react";
import { usePosts } from "../data/hooks/use-posts";
import { PostPartial } from "../partials/PostPartial";
import {Container, ContainerItem, Heading1} from 'geta-core';

interface IPostsProps {}

export const Posts: React.FC<IPostsProps> = (props: IPostsProps) => {
  const [posts] = usePosts();

  return (
    <div className={"posts"}>
      <Heading1>Posts</Heading1>
      <Container>
        {posts.map((p, i) => (
          <ContainerItem key={i}>
            <PostPartial {...p} />
          </ContainerItem>
        ))}
      </Container>
    </div>
  );
};
