import * as React from "react";
import { IAuthorItem } from "../data/hooks/use-authors";
import { Link } from "react-router-dom";

interface IAuthorPartialProps extends IAuthorItem {}

export const AuthorPartial: React.FC<IAuthorPartialProps> = ({
  id,
  name,
  image
}: IAuthorPartialProps) => (
  <Link to={`/authors/${id}`}>
      <section>
          <div>
              <img src={image.asset.url} alt={name} />
          </div>
          <div>
              <h4>{name}</h4>
          </div>
      </section>
  </Link>
);
