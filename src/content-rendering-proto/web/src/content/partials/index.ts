import { BlockContent } from "./BlockContent";
import * as React from "react";
import { ImageContent } from "./ImageContent";
import { PostPartial } from "../../partials/PostPartial";

interface IConstentPartialMapping {
  [key: string]: React.FC<any>;
}

export const contentPartialMapping: IConstentPartialMapping = {
  block: BlockContent,
  image: ImageContent,
  post: PostPartial
};
