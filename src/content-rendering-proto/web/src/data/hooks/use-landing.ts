import { dataClient } from "../client";
import { useEffect, useState } from "react";
import {IPostItem, postsQueryObject} from './use-posts';

interface ILandingItem {
  title: string;
  isStartPage: boolean;
  content: any[];
  postsList: IPostItem[];
}

const queryObject = `{
    title,
    "isStartPage": isstartpage,
    "content": body[]{
    _type == 'block' => {
      "type": _type,
      children[]{
        text
      },
      style
    },
    _type == 'image' => {
      "type": _type,
      asset->{url}
    },
    _type == 'post' => {...}->${postsQueryObject}
  },
  "postsList": postsList[]->${postsQueryObject}
}`;

export const useStartPage = () => {
  const query = `*[_type == "landing" && isstartpage == true]${queryObject}`;
  const [startPage, setStartPage] = useState<ILandingItem>({
    title: "",
    isStartPage: true,
    content: [],
    postsList: [],
  });

  useEffect(() => {
    dataClient.fetch(query).then((r: ILandingItem[]) => {
      if (!!r[0]) {
        setStartPage(r[0]);
      }
    });
  }, [query]);

  return [startPage];
};
