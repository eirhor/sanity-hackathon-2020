import * as React from "react";
import { useAuthors } from "../data/hooks/use-authors";
import {AuthorPartial} from '../partials/AuthorPartial';

interface IAuthorsProps {}

export const Authors: React.FC<IAuthorsProps> = (props?: IAuthorsProps) => {
  const [authors] = useAuthors();

  return (
      <div className={'authors'}>
          <h1>Authors</h1>
          <ul>
              {authors.map((a, i) => (
                  <AuthorPartial {...a} />
              ))}
          </ul>
      </div>
  )
};
