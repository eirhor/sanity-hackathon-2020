import * as React from "react";
import { useParams } from "react-router-dom";
import { useCategory } from "../data/hooks/use-categories";
import { usePostsWithCategory } from "../data/hooks/use-posts";
import { PostPartial } from "../partials/PostPartial";
import {Container, ContainerItem, Heading1, Heading2, Paragraph} from 'geta-core';

interface ICategoryProps {}

export const Category: React.FC<ICategoryProps> = (props: ICategoryProps) => {
  const { categoryId } = useParams();
  const [category] = useCategory(categoryId);
  const [posts] = usePostsWithCategory(categoryId);

  return (
    <div>
      <Heading1>{category.title}</Heading1>
      <Heading2>Posts</Heading2>
        <Paragraph>{category.description}</Paragraph>
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
