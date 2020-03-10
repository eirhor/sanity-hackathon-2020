import * as React from "react";
import { useStartPage } from "../data/hooks/use-landing";
import { ContentRenderer } from "../content/ContentRenderer";
import { PostPartial } from "../partials/PostPartial";
import {Container, ContainerItem, Heading1, Heading2} from 'geta-core';

interface IHomeProps {}

export const Home: React.FC<IHomeProps> = (props: IHomeProps) => {
  const [startPage] = useStartPage();

  return (
    <div className={"home"}>
      <Heading1>{startPage.title}</Heading1>
      <ContentRenderer content={startPage.content} />
      <Heading2>Posts list</Heading2>
      <Container>
        {startPage.postsList.map((p, i) => (
          <ContainerItem key={i}>
            <PostPartial {...p} />
          </ContainerItem>
        ))}
      </Container>
    </div>
  );
};
