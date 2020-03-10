import * as React from "react";
import { useAuthors } from "../data/hooks/use-authors";
import {AuthorPartial} from '../partials/AuthorPartial';
import {Cell, Grid} from 'react-foundation';

interface IAuthorsProps {}

export const Authors: React.FC<IAuthorsProps> = (props?: IAuthorsProps) => {
  const [authors] = useAuthors();

  return (
      <div className={'authors'}>
          <h1>Authors</h1>
          <Grid upOnSmall={1} upOnMedium={2}>
              {authors.map((a, i) => (
                  <Cell key={i}>
                      <AuthorPartial {...a} />
                  </Cell>
              ))}
          </Grid>
      </div>
  )
};
