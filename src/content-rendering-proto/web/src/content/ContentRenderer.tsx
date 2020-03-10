import * as React from "react";
import { contentPartialMapping } from "./partials/index";

interface IContentRendererProps {
  content: any[];
}

export const ContentRenderer: React.FC<IContentRendererProps> = ({
  content
}: IContentRendererProps) => {
  return (
    <>
      {content.map((c, i) => {
        const Comp = contentPartialMapping[c.type];

        if (!Comp) {
          return null;
        }

        return (
            <Comp key={i} {...c} />
        );
      })}
    </>
  );
};
