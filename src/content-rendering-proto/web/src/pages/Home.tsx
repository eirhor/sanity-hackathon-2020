import * as React from "react";
import { useStartPage } from "../data/hooks/use-landing";
import { ContentRenderer } from "../content/ContentRenderer";
import { PostPartial } from "../partials/PostPartial";

interface IHomeProps {}

export const Home: React.FC<IHomeProps> = (props: IHomeProps) => {
  const [startPage] = useStartPage();

  return (
    <div className={"home"}>
      <h1>{startPage.title}</h1>
      <ContentRenderer content={startPage.content} />
      <h2>Posts list</h2>
      <ul>
        {startPage.postsList.map((p, i) => (
          <li key={i}>
            <PostPartial {...p} />
          </li>
        ))}
      </ul>
    </div>
  );
};
