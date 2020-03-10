import * as React from "react";
import { IAuthorItem } from "../data/hooks/use-authors";
import { Link } from "react-router-dom";
import {Heading4} from 'geta-core';

interface IAuthorPartialProps extends IAuthorItem {}

export const AuthorPartial: React.FC<IAuthorPartialProps> = ({
  id,
  name,
  image
}: IAuthorPartialProps) => (
  <Link to={`/authors/${id}`}>
      <section>
          <div>
              <img className={'img'} src={image.asset.url} alt={name} />
          </div>
          <div>
              <Heading4>{name}</Heading4>
          </div>
      </section>
  </Link>
);
