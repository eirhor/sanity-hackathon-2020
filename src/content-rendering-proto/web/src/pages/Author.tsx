import * as React from "react";
import { useAuthor } from "../data/hooks/use-authors";
import { useParams } from "react-router-dom";
import { ContentRenderer } from "../content/ContentRenderer";
import {Thumbnail} from 'react-foundation';

interface IAuthorProps {}

export const Author: React.FC<IAuthorProps> = (props: IAuthorProps) => {
  const { authorId } = useParams();
  const [author] = useAuthor(authorId);

  return (
    <div className={"author"}>
      <h1>{author.name}</h1>
      <Thumbnail src={author.image.asset.url} alt={author.name} />
      <ContentRenderer content={author.content || []} />
    </div>
  );
};
