import * as React from "react";
import { IAuthorItem } from "../data/hooks/use-authors";
import { Link } from "react-router-dom";
import {MediaObject, MediaObjectSection, Thumbnail} from 'react-foundation';

interface IAuthorPartialProps extends IAuthorItem {}

export const AuthorPartial: React.FC<IAuthorPartialProps> = ({
  id,
  name,
  image
}: IAuthorPartialProps) => (
  <Link to={`/authors/${id}`}>
      <MediaObject stackForSmall={true}>
          <MediaObjectSection isMiddle={true}>
              <Thumbnail src={image.asset.url} alt={name} />
          </MediaObjectSection>
          <MediaObjectSection isMain={true}>
              <h4>{name}</h4>
          </MediaObjectSection>
      </MediaObject>
  </Link>
);
