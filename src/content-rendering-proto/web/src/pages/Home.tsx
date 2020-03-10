import * as React from "react";
import { useStartPage } from "../data/hooks/use-landing";
import { ContentRenderer } from "../content/ContentRenderer";
import { PostPartial } from "../partials/PostPartial";
import {Cell, Grid} from 'react-foundation';

interface IHomeProps {}

export const Home: React.FC<IHomeProps> = (props: IHomeProps) => {
  const [startPage] = useStartPage();

  return (
    <div className={"home"}>
      <h1>{startPage.title}</h1>
      <ContentRenderer content={startPage.content} />
      <h2>Posts list</h2>
      <Grid upOnSmall={1} upOnMedium={2}>
        {startPage.postsList.map((p, i) => (
          <Cell key={i}>
            <PostPartial {...p} />
          </Cell>
        ))}
      </Grid>
    </div>
  );
};
