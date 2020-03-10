import * as React from "react";
import { useAuthors } from "../data/hooks/use-authors";
import {AuthorPartial} from '../partials/AuthorPartial';
import {Container, ContainerItem, Heading1} from 'geta-core';

interface IAuthorsProps {}

export const Authors: React.FC<IAuthorsProps> = (props?: IAuthorsProps) => {
  const [authors] = useAuthors();

  return (
      <div className={'authors'}>
          <Heading1>Authors</Heading1>
          <Container>
              {authors.map((a, i) => (
                  <ContainerItem>
                      <AuthorPartial {...a} />
                  </ContainerItem>
              ))}
          </Container>
      </div>
  )
};
