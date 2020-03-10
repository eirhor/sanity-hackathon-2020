import * as React from "react";
import { usePost } from "../data/hooks/use-posts";
import { useParams } from "react-router-dom";
import { AuthorPartial } from "../partials/AuthorPartial";
import { CategoryPartial } from "../partials/CategoryPartial";
import {ContentRenderer} from '../content/ContentRenderer';
import {Container, ContainerItem, Heading1, Heading2} from 'geta-core';

export interface IPostProps {}

export const Post: React.FC<IPostProps> = (props: IPostProps) => {
  const { postId } = useParams();
  const [post] = usePost(postId);

  return (
    <div className={"post"}>
      <Heading1>Post - {post.title}</Heading1>
      <img className={'img'} src={post.mainImage.asset.url} alt={post.mainImageAlt} />
      <ContentRenderer content={post.content}/>
      <Heading2>Categories</Heading2>
      <Container>
        {post.categories.map((c, i) => (
            <ContainerItem key={i}>
                <CategoryPartial key={i} {...c} />
            </ContainerItem>
        ))}
      </Container>
      <Heading2>Author</Heading2>
      <AuthorPartial {...post.author} />
    </div>
  );
};
