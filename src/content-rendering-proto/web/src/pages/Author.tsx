import * as React from "react";
import { useAuthor } from "../data/hooks/use-authors";
import { useParams } from "react-router-dom";
import { ContentRenderer } from "../content/ContentRenderer";
import {Heading1} from 'geta-core';

interface IAuthorProps {}

export const Author: React.FC<IAuthorProps> = (props: IAuthorProps) => {
  const { authorId } = useParams();
  const [author] = useAuthor(authorId);

  return (
    <div className={"author"}>
      <Heading1>{author.name}</Heading1>
      <img className={'img'} src={author.image.asset.url} alt={author.name} />
      <ContentRenderer content={author.content || []} />
    </div>
  );
};
