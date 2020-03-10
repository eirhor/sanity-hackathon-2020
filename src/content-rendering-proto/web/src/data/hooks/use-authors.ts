import { useEffect, useState } from "react";
import { dataClient } from "../client";

export interface IAuthorItem {
  id: string;
  name: string;
  image: {
    asset: {
      url: string;
    };
  };
  content: any[];
}

export interface IBlockContent {
  type: string;
  style: string;
  children: IBlockContentChildren[];
}

interface IBlockContentChildren {
  text: string;
}

export const authorQueryObject = `{
  "id": _id,
  name,
  "image": image{
    asset->{url}
  },
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
    }
  }
}`;

export const useAuthors = () => {
  const query = `*[_type == "author"]${authorQueryObject}`;
  const [authors, setAuthors] = useState<IAuthorItem[]>([]);

  useEffect(() => {
    dataClient.fetch(query).then((r: IAuthorItem[]) => {
      setAuthors(r);
    });
  }, [query]);

  return [authors];
};

export const useAuthor = (id?: string) => {
  const query = `*[_type == "author" && _id == "${id}"]${authorQueryObject}`;
  const [author, setAuthor] = useState<IAuthorItem>({
    id: "",
    name: "",
    image: {
      asset: {
        url: ""
      }
    },
    content: []
  });

  useEffect(() => {
    if (!!id) {
      dataClient.fetch(query).then((r: IAuthorItem[]) => {
        if (!!r[0]) {
          setAuthor(r[0]);
        }
      });
    }
  }, [id, query]);

  return [author];
};
